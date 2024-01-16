"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const currentTheme = theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {currentTheme === "dark" ? (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      ) : (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
    </div>
  );
}
