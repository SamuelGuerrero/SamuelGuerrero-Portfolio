"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", darkMode);
      window.localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <button
      className={`w-8 h-8 flex items-center border-french-gray justify-center hover:scale-110
       ${
         darkMode
           ? "dark:bg-transparent border-2 text-yellow-300"
           : "bg-white border-2 text-yellow-500"
       } cursor-pointer rounded-full p-1`}
      onClick={() => setDarkMode((prevMode) => !prevMode)}
    >
      {darkMode ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </button>
  );
};
