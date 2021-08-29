import React, { useState, useContext } from 'react'
import ThemeContext from "../context/ThemeContext";
export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <div className="Header">
                <h1 style={{ color }}>React Hooks</h1>
                <button onClick={handleClick} type="button">{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
            </div>
        </div>
    )
}
