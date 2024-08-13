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
    ></div>
  );
};

export default MyModal;
