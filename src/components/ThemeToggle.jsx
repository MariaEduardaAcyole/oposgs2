import { useTheme } from "../context/ThemeContext";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-800 dark:bg-gray-200 transition border border-gray-600 dark:border-gray-300"
    >
      {theme === "dark" ? (
        <LuSun className="text-yellow-400" size={22} />
      ) : (
        <LuMoon className="text-gray-700" size={22} />
      )}
    </button>
  );
}
