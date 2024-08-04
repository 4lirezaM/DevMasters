/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Button from '../../../../ui/Button';

function DarkModeButton({ type }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Button handler={toggleDarkMode} type={type}>
      {!darkMode ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-regular fa-sun"></i>
      )}
    </Button>
  );
}

export default DarkModeButton;
