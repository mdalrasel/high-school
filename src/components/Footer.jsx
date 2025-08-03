
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className=' p-10 bg-neutral text-neutral-content'>
            <div className="footer p-10 bg-neutral text-neutral-content rounded-box mx-auto px-4 sm:px-8  mt-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
                <aside className="col-span-1 md:col-span-2">
                    <Link to="/" className="text-xl sm:text-2xl font-bold">
                        বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়
                    </Link>
                    <p className="max-w-xs text-sm mt-2">
                        শিক্ষার্থীদের উজ্জ্বল ভবিষ্যতের লক্ষ্যে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
                        আমাদের লক্ষ্য হলো একটি উন্নত ও আধুনিক শিক্ষা ব্যবস্থা নিশ্চিত করা।
                    </p>
                    <div className="mt-4">
                        <p className="text-sm">যোগাযোগের ঠিকানা:</p>
                        <p className="text-sm font-semibold">
                            বলশীদ, শাহরাস্তি চাঁদপুর
                        </p>
                    </div>
                </aside>

                <nav className="col-span-1">
                    <header className="footer-title">মেনু</header>
                    <Link to="/" className="link link-hover">হোম</Link>
                    <Link to="/academic" className="link link-hover">একাডেমিক</Link>
                    <Link to="/teachers" className="link link-hover">শিক্ষকগণ</Link>
                    <Link to="/gallery" className="link link-hover">গ্যালারি</Link>
                    <Link to="/contact" className="link link-hover">যোগাযোগ</Link>
                </nav>

                <nav className="col-span-1">
                    <header className="footer-title">লিংক</header>
                    <a href="#" className="link link-hover">আমাদের সম্পর্কে</a>
                    <a href="#" className="link link-hover">মিশন ও ভিশন</a>
                    <a href="#" className="link link-hover">নীতিমালা</a>
                    <a href="#" className="link link-hover">কমিটি</a>
                </nav>

                <nav className="col-span-1 md:col-span-2 lg:col-span-1">
                    <header className="footer-title">সামাজিক মাধ্যম</header>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" aria-label="Facebook">
                            <FaFacebook size={25} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <IoLogoInstagram size={25} />
                        </a>
                        <a href="#" aria-label="Linkedin">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </nav>

               
            </div>
             <div className="border-t border-gray-400 mt-8 pt-4 col-span-full text-center">
                    <p className=" text-sm">
                        © {new Date().getFullYear()} বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়। সর্বস্বত্ব সংরক্ষিত।
                    </p>
                    <p className=" text-xs mt-2 text-gray-400">
                        Developed by <Link className='text-blue-500' to='https://www.linkedin.com/in/md-al-rasel/'> MD.AL RASEL</Link>
                    </p>
                </div>
        </footer>
    );
};

export default Footer;
