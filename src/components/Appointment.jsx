import React, { useState } from 'react';
import LivingStatusModal from './LivingStatusModal';
import AppointmentModal from './AppointmentModal';

const Appointment = () => {
  const [showLivingStatus, setShowLivingStatus] = useState(true);
  const [livingStatus, setLivingStatus] = useState('');

  const handleLivingStatusConfirm = (selectedStatus) => {
    setLivingStatus(selectedStatus);
    setShowLivingStatus(false);
  };

  const handleClose = () => {
    window.close(); // Closes the tab
  };

  return (
    <>
      {showLivingStatus ? (
        <LivingStatusModal
          onConfirm={handleLivingStatusConfirm}
          onClose={handleClose}
        />
      ) : (
        <AppointmentModal
          livingStatus={livingStatus}
          onClose={handleClose}
        />
      )}
    </>
  );
};

export default Appointment;