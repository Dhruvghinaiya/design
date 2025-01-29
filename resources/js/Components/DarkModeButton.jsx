import React, { useState } from 'react';

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="p-5">
      <button
        onClick={toggleDarkMode}
        className={`px-2 py-2 rounded-lg font-semibold transition duration-300 sm:text-sm sm:text-px-0 md:text-lg md:px-4
          ${isDarkMode ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
      >
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default DarkModeButton;
