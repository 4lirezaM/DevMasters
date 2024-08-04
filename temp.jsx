/* eslint-disable react/prop-types */
// MyModal.js

import { useState } from 'react';

const MyModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState(false);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'} flex items-center justify-center bg-gray-500 bg-opacity-50`}
    >
      <div className="rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-2 text-lg font-semibold">Select a value:</h2>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value={true}
            checked={value === true}
            onChange={() => handleValueChange(true)}
          />
          True
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value={false}
            checked={value === false}
            onChange={() => handleValueChange(false)}
          />
          False
        </label>
        <div className="mt-4 flex justify-end">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={() => onClose(value)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
