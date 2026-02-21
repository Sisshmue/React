import "./SwitchTheme.css";
import { useTheme } from "../utils/ThemeProvider";

export function SwitchTheme() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className="switch-container">
      <label class="switch">
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  );
}
