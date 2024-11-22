import React from "react";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
   // document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 hover:text-black"
    >
      {theme === "dark" ? "🌙" : "☀️"} 
      <span className={` ml-2`}>Toggle Theme</span>
    </button>
  );
};

export default ThemeToggle;
