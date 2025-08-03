import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setTheme(savedTheme);
    }, []);

    const handleThemeChange = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div
            onClick={handleThemeChange}
            className="w-10 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300"
        >
            
            <div
                className={`w-6 h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
                    theme === 'dark' ? 'translate-x-2' : 'translate-x-0'
                }`}
            >
                {theme === 'light' && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                )}
                {theme === 'dark' && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-200"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default ThemeToggle;
