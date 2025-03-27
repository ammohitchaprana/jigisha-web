import React, { useState } from 'react';

const LivingStatusModal = ({ onConfirm, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [customInput, setCustomInput] = useState('');

  const handleSelection = (option) => {
    setSelectedOption(option);
    if (option !== 'Other') {
      setCustomInput('');
    }
  };

  const handleSubmit = () => {
    const finalSelection = selectedOption === 'Other' ? customInput : selectedOption;
    if (finalSelection.trim()) {
      onConfirm(finalSelection);
    } else {
      alert('Please select or enter a valid option.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform transition-all">
        {/* Modal Header */}
        <h2 className="text-2xl font-semibold text-white mb-4 text-center bg-[var(--primary-color)] p-4 rounded-t-lg">
          Select Your Living Status
        </h2>

        {/* Radio Options */}
        <div className="space-y-4 p-4">
          {['60yrs+ age', 'Orphan', 'Alone in family', 'Below Poverty Line', 'Other'].map((option) => (
            <div key={option} className="flex items-center space-x-3">
              <input
                type="radio"
                id={option}
                name="livingStatus"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelection(option)}
                className="w-5 h-5 border-gray-300 custom-radio"
              />
              <label
                htmlFor={option}
                className="text-[var(--text-color)] text-lg cursor-pointer hover:text-[var(--primary-color)] transition-colors"
              >
                {option}
              </label>
            </div>
          ))}

          {/* Custom Input for "Other" */}
          {selectedOption === 'Other' && (
            <input
              type="text"
              placeholder="Enter your status"
              className="w-full p-3 mt-3 border border-[var(--text-light)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
            />
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 p-4 flex justify-between bg-[var(--light-color)] rounded-b-lg">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500 focus:outline-none transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#c0392b] focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-opacity-50 transition-all"
          >
            Confirm
          </button>
        </div>

        {/* Inline CSS for radio buttons */}
        <style jsx>{`
          .custom-radio:checked {
            accent-color: var(--primary-color);
          }
          .custom-radio:focus {
            box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
          }
        `}</style>
      </div>
    </div>
  );
};

export default LivingStatusModal;