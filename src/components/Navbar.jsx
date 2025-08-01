import React from 'react';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import ThemeDropdown from '../utils/ThemeDropdown';
import LanguageToggle from '../utils/LanguageToggle';

const Navbar = () => {
    // useTranslation হুক থেকে t (translation) ফাংশন আনা হয়েছে।
    const { t } = useTranslation();

    return (
        <div className="navbar bg-base-100 shadow-lg rounded-box mx-auto px-4 sm:px-8 max-w-7xl mt-4">
            {/* মোবাইল এবং ছোট স্ক্রিনের জন্য বাম পাশের অংশ */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">{t('navbar.home')}</Link></li>
                        <li><Link to="/academic">{t('navbar.academic')}</Link></li>
                        <li><Link to="/teachers">{t('navbar.teachers')}</Link></li>
                        <li><Link to="/gallery">{t('navbar.gallery')}</Link></li>
                        <li><Link to="/contact">{t('navbar.contact')}</Link></li>
                    </ul>
                </div>
                {/* স্কুলের নাম */}
                <Link to="/" className="btn btn-ghost text-lg sm:text-xl font-bold">
                    {t('navbar.schoolName')}
                </Link>
            </div>

            {/* বড় স্ক্রিনের জন্য মাঝখানের অংশ */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">{t('navbar.home')}</Link></li>
                    <li><Link to="/academic">{t('navbar.academic')}</Link></li>
                    <li><Link to="/teachers">{t('navbar.teachers')}</Link></li>
                    <li><Link to="/gallery">{t('navbar.gallery')}</Link></li>
                    <li><Link to="/contact">{t('navbar.contact')}</Link></li>
                </ul>
            </div>

            {/* ডান পাশের অংশ - লগইন বাটন এবং থিম টগল */}
            <div className="navbar-end flex items-center gap-2">
                <ThemeDropdown />
                <LanguageToggle />
                <Link to="/login" className="btn btn-primary btn-sm sm:btn-md">{t('navbar.login')}</Link>
            </div>
        </div>
    );
};

export default Navbar;
