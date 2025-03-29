import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import generatePDF from '../utils/generatePDF'; 
import { appointmentFormWarningEnglish, appointmentFormWarningHindi, BASE_URL } from '../utils/constants';

const AppointmentModal = ({ livingStatus, onClose }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const initialState = {
    district: '',
    doctorId: '',
    appointmentDate: '',
    name: '',
    age: '',
    gender: '',
    address: '',
    phone: '',
    idType: '',
    idNumber: '',
    issue: '',
    livingStatus: livingStatus || '',
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    axios
      .get(BASE_URL + '/doctors')
      .then((res) => {
        const doctorsWithSlots = res.data.filter((doc) => doc.availableSlots.length > 0);
        setDoctors(doctorsWithSlots);
        const uniqueDistricts = [...new Set(doctorsWithSlots.map((doc) => doc.district))];
        setDistricts(uniqueDistricts);
      })
      .catch((err) => console.error('Error fetching doctors:', err));
  }, []);

  useEffect(() => {
    if (formData.district) {
      setFilteredDoctors(doctors.filter((doc) => doc.district === formData.district));
    } else {
      setFilteredDoctors([]);
    }
  }, [formData.district, doctors]);

  useEffect(() => {
    const selectedDoctor = filteredDoctors.find((doc) => doc._id === formData.doctorId);
    setAvailableSlots(selectedDoctor ? selectedDoctor.availableSlots : []);
  }, [formData.doctorId, filteredDoctors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'district') {
      setFormData({ ...formData, district: value, doctorId: '', appointmentDate: '' });
      setAvailableSlots([]);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    setShowWarning(true);
  };

  const confirmAppointment = async () => {
    setShowWarning(false);
    setLoading(true);
    setError(null);
    setSuccessMessage('');

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const appointment = await axios.post(
        BASE_URL + '/appointments',
        formDataToSend,
        { headers: { 'Content-Type': 'application/json' } }
      );

      setSuccessMessage('Appointment booked successfully!');
      await generatePDF(appointment.data.appointment._id, formData, doctors);
      setFormData(initialState);

      setTimeout(() => {
        onClose();
        navigate('/');
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to book appointment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[var(--white)] p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4 text-center">
          Book an Appointment
        </h2>

        {successMessage && <p className="text-[var(--accent-color)] mb-4">{successMessage}</p>}
        {error && <p className="text-[var(--primary-color)] mb-4">{error}</p>}

        {/* Warning Modal */}
        {showWarning && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[60]">
            <div className="bg-[var(--white)] p-6 rounded-lg shadow-lg max-w-md text-center border-2 border-[var(--primary-color)]">
              <h2 className="text-[var(--primary-color)] font-bold text-xl">⚠️ Disclaimer ⚠️</h2>
              <p className="text-[var(--text-color)] mt-2">{appointmentFormWarningHindi}</p>
              <p className="text-[var(--text-color)] mt-2">{appointmentFormWarningEnglish}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  onClick={confirmAppointment}
                  className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg hover:bg-[#c0392b] transition-all"
                >
                  Agree
                </button>
                <button
                  onClick={() => setShowWarning(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all"
                >
                  Disagree
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-[var(--text-color)]">Select District</label>
            <select
              name="district"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onChange={handleChange}
              value={formData.district}
            >
              <option value="">Select a District</option>
              {districts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Select Doctor</label>
            <select
              name="doctorId"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onChange={handleChange}
              value={formData.doctorId}
              disabled={!formData.district}
            >
              <option value="">Select a Doctor</option>
              {filteredDoctors.map((doctor) => (
                <option key={doctor._id} value={doctor._id}>
                  {doctor.name} - {doctor.specialization}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Choose Time Slot</label>
            <select
              name="appointmentDate"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onChange={handleChange}
              value={formData.appointmentDate}
              disabled={!formData.doctorId}
            >
              <option value="">Select a Time Slot</option>
              {availableSlots.map((slot, index) => (
                <option key={`${slot}-${index}`} value={slot}>
                  {new Date(slot).toLocaleString('en-GB', { hour12: true })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Age</label>
            <input
              type="number"
              name="age"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter age"
              onChange={handleChange}
              value={formData.age}
            />
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Gender</label>
            <select
              name="gender"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onChange={handleChange}
              value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Address</label>
            <input
              type="text"
              name="address"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter address"
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Phone No.</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter phone number"
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Select ID Type</label>
            <select
              name="idType"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              onChange={handleChange}
              value={formData.idType}
              required
            >
              <option value="">Select ID Type</option>
              <option value="Aadhar">Aadhar</option>
              <option value="PAN">PAN</option>
              <option value="DL">Driving License</option>
              <option value="VoterID">Voter ID</option>
            </select>
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Enter ID Number</label>
            <input
              type="text"
              name="idNumber"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Enter selected ID number"
              onChange={handleChange}
              value={formData.idNumber}
              required
            />
          </div>

          <div>
            <label className="block text-[var(--text-color)]">Issue (Optional)</label>
            <textarea
              name="issue"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              placeholder="Describe your issue"
              onChange={handleChange}
              value={formData.issue}
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={onClose}
              className="bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg hover:bg-[#c0392b] transition-all"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;