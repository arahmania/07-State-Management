'use client';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToogle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
        Current Theme: {theme} (Click to toggle)
        </button>
    );
}
