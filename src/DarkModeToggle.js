import React, { useState } from "react";
import Toggle from "react-toggle";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const handleToggleChange = (({ target }) => setIsDark(target.checked))
  const toggleIcons = { checked: "🌙", unchecked: "🔆" };

  return (
    <Toggle
      checked={isDark}
      onChange={handleToggleChange}
      icons={toggleIcons}
      aria-label="Dark mode toggle"
    />
  );
};