"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function Switcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="rounded border-8 dark:bg-red-600 bg-black flex gap-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
