import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSunMedium } from "react-icons/lu";


export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.theme === "dark";
  });
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setDarkMode(!darkMode)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-2 text-black"
      >
        {darkMode ? (
          <FaRegMoon className="text-xl sm:text-2xl md:text-3xl text-white" />
        ) : (
          <LuSunMedium className="text-xl sm:text-2xl md:text-3xl " />
        )}
      </button>

      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-[#3a3b3c] text-white text-sm px-3 py-1 rounded-lg shadow-md z-50 whitespace-nowrap">
          Toggle
        </div>
      )}
    </div>
  );
}
