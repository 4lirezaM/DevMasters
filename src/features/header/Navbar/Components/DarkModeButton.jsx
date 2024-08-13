/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import Button from '../../../../ui/Button';
import { AppContext } from '../../../../context/AppContext';

function DarkModeButton({ type }) {
  const { darkMode, toggledarkMode } = useContext(AppContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Button handler={toggledarkMode} type={type}>
      {!darkMode ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-regular fa-sun"></i>
      )}
    </Button>
  );
}

export default DarkModeButton;
