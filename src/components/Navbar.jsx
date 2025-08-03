import { Link, NavLink } from 'react-router';
import NoticeMarquee from './NoticeMarquee';
import { MdMenu } from 'react-icons/md';
import ThemeToggle from '../utils/ThemeToggle';

const Navbar = () => {
    const navLink = <>
        <li><NavLink to="/">হোম</NavLink></li>
        <li><NavLink to="/academic">একাডেমিক</NavLink></li>
        <li><NavLink to="/teachers">শিক্ষকবৃন্দ</NavLink></li>
        <li><NavLink to="/gallery">গ্যালারি</NavLink></li>
        <li><NavLink to="/contact">যোগাযোগ</NavLink></li>
    </>;

    return (
        <div className="w-full sticky bg-blue-100 top-0 z-40 shadow-md px-4 sm:px-8">
            <div className="navbar mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
                           <MdMenu size={30}/>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                            <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>
                        </ul>
                    </div>
                    <Link to="/" className="lg:hidden">
                        <img className='w-12' src="/public/Profile.png" alt="স্কুল লোগো" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                    
                </div>
               
                <div className="navbar-end flex items-center gap-2">
                    <ThemeToggle />
                    <Link to="/login" className="btn btn-primary btn-sm sm:btn-md">লগইন</Link>
                </div>
            </div>
             <NoticeMarquee />
        </div>
    );
};

export default Navbar;
