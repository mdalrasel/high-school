import React, { useState, useRef, useEffect } from 'react';
import { Book, UserRound, Bell, Medal, Image, LayoutGrid, List,  } from 'lucide-react';
import HomepageCarousel from '../../components/HomepageCarousel';
import Teacher from '../../components/Teacher';
import Academic from '../../components/Academic';
import NoticeBoard from '../../components/NoticeBoard';
import ResultBoard from '../../components/ResultBoard';
import Gallery from '../../components/Gallery';

// এই ক্যাটাগরির ডেটা আপনার দেওয়া কোড থেকে নেওয়া হয়েছে।
const categories = [
    { id: '1', title: 'একাডেমিক', details: 'একাডেমিক ক্যালেন্ডার, সিলেবাস এবং অন্যান্য গুরুত্বপূর্ণ তথ্য এখানে পাওয়া যাবে।', icon: <Book /> },
    { id: '2', title: 'শিক্ষক পরিচিতি', details: 'বিদ্যালয়ের সকল শিক্ষকদের পরিচিতি এবং যোগাযোগের তথ্য এখানে পাবেন।', icon: <UserRound /> },
    { id: '3', title: 'নোটিশ বোর্ড', details: 'স্কুলের সাম্প্রতিক নোটিশ এবং ঘোষণাগুলো এখানে প্রকাশিত হয়।', icon: <Bell /> },
    { id: '4', title: 'ফলাফল', details: 'শিক্ষার্থীদের পরীক্ষার ফলাফল এবং অন্যান্য একাডেমিক ফলাফল এখানে দেখা যাবে।', icon: <Medal /> },
    { id: '5', title: 'গ্যালারি', details: 'স্কুলের বিভিন্ন ইভেন্ট ও অনুষ্ঠানের ছবি এবং ভিডিও এখানে দেখুন।', icon: <Image /> },
    { id: '6', title: 'লাইব্রেরি', details: 'স্কুলের লাইব্রেরি এবং বইয়ের তালিকা এখানে পাওয়া যাবে।', icon: <Book /> },
    { id: '7', title: 'কলা ও সংস্কৃতি', details: 'স্কুলের সাংস্কৃতিক কার্যক্রম এবং বিভিন্ন ইভেন্টের বিস্তারিত এখানে আছে।', icon: <Medal /> },
    { id: '8', title: 'খেলাধুলা', details: 'খেলাধুলার সময়সূচী এবং ফলাফল এখানে দেখুন।', icon: <Bell /> },
    { id: '9', title: 'অভিভাবক', details: 'অভিভাবকদের জন্য গুরুত্বপূর্ণ তথ্য ও পরামর্শ এখানে আছে।', icon: <UserRound /> },
    { id: '10', title: 'যোগাযোগ', details: 'স্কুলের সাথে যোগাযোগের ঠিকানা এবং ফোন নম্বর।', icon: <Image /> },
];


const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('1'); // ডিফল্টভাবে 'একাডেমিক' সিলেক্ট করা হয়েছে
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isStackedLayout, setIsStackedLayout] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCategorySelect = (id) => {
        setSelectedCategory(id);
        setIsDropdownOpen(false);
    };

    // নির্বাচিত ক্যাটাগরি অনুযায়ী কম্পোনেন্ট রেন্ডার করার জন্য একটি ফাংশন
    const renderContent = () => {
        switch (selectedCategory) {
            case '1':
                return <Academic />;
            case '2':
                return <Teacher />;
            case '3':
                return <NoticeBoard />;
            case '4':
                return <ResultBoard />;
            case '5':
                return <Gallery />;
            
        }
    };

    const categoryDetails = categories.find(cat => cat.id === selectedCategory);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <HomepageCarousel />
            <div className="p-4 md:p-8 container mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">ওয়েবসাইট মেনু</h1>
                    <button
                        onClick={() => setIsStackedLayout(!isStackedLayout)}
                        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 shadow-md transition-colors"
                        aria-label="Toggle layout"
                    >
                        {isStackedLayout ? <LayoutGrid /> : <List />}
                    </button>
                </div>
                
                {isStackedLayout ? (
                    <div className="flex flex-col gap-8">
                        {categories.map(category => (
                            <div key={category.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex-1 transition-transform duration-300 hover:scale-[1.01]">
                                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                    {category.icon} {category.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {category.details}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col md:flex-row gap-8 md:h-[calc(100vh-14rem)] md:overflow-hidden">
                        {/* মোবাইল ড্রপডাউন মেনু */}
                        <div className="md:hidden w-full flex justify-center sticky top-20 z-50 bg-gray-50 dark:bg-gray-900 pb-4">
                            <div ref={dropdownRef} className="relative w-full max-w-sm">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg p-3 w-full flex items-center justify-between cursor-pointer shadow-md"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="flex-1 text-center font-semibold flex items-center justify-center gap-2">
                                        {categoryDetails?.icon} {categoryDetails?.title}
                                    </div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                {isDropdownOpen && (
                                    <ul
                                        tabIndex={0}
                                        className="absolute top-full left-0 z-[50] mt-2 p-2 w-full max-w-sm shadow-lg bg-white dark:bg-gray-800 rounded-box"
                                    >
                                        {categories.map(category => (
                                            <li key={category.id}>
                                                <div
                                                    onClick={() => handleCategorySelect(category.id)}
                                                    className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg transition-colors duration-200 justify-center
                                                    ${selectedCategory === category.id
                                                            ? 'bg-blue-600 text-white shadow-md'
                                                            : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                                        }`}
                                                >
                                                    {category.icon} {category.title}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* ডেস্কটপ সাইডবার */}
                        <div className="relative md:w-1/4 flex-shrink-0">
                            <div className="md:sticky md:top-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                                <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-gray-800 dark:text-gray-100">ক্যাটাগরি</h2>
                                <ul className="space-y-2">
                                    {categories.map(category => (
                                        <li
                                            key={category.id}
                                            className={`cursor-pointer p-3 rounded-lg transition-colors duration-200 flex items-center gap-2 ${selectedCategory === category.id
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                                                }`}
                                            onClick={() => handleCategorySelect(category.id)}
                                        >
                                            {category.icon} {category.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* কন্টেন্ট এরিয়া - এই অংশে স্ক্রল হবে */}
                        <div className="w-full md:w-3/4 flex-1 md:h-full md:overflow-y-auto">
                            {renderContent()}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
