"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full flex justify-end items-center px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setIsDark(!isDark)}
        className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
