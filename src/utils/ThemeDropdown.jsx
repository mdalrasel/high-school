import React, { useEffect, useState } from 'react';

const ThemeDropdown = () => {
    // থিমের স্টেট রাখার জন্য useState ব্যবহার করা হয়েছে।
    const [theme, setTheme] = useState("light");

    // কম্পোনেন্টটি প্রথমবার লোড হওয়ার সময় local storage থেকে থিম লোড করে।
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.documentElement.setAttribute("data-theme", savedTheme);
        setTheme(savedTheme);
    }, []);

    // ড্রপডাউন থেকে থিম নির্বাচন করার লজিক।
    const handleThemeChange = (newTheme) => {
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="dropdown dropdown-end">
            {/* থিম ড্রপডাউনের বাটন */}
            {/* এখন বাটনের টেক্সট থিমের উপর ভিত্তি করে পরিবর্তন হবে */}
            <div tabIndex={0} role="button" className="btn btn-ghost">
                থিম: <span className="font-bold">{theme === "light" ? "লাইট" : "ডার্ক"}</span>
            </div>
            {/* থিম অপশনের ড্রপডাউন মেনু */}
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                <li>
                    <a onClick={() => handleThemeChange("light")} className={theme === "light" ? "active" : ""}>
                        লাইট
                    </a>
                </li>
                <li>
                    <a onClick={() => handleThemeChange("dark")} className={theme === "dark" ? "active" : ""}>
                        ডার্ক
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ThemeDropdown;
