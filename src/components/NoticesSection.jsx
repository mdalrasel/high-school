import React from 'react';
import { Link } from 'react-router';

const NoticesSection = () => {
    const notices = [
        { id: 1, title: '২০২৪-২৫ শিক্ষাবর্ষের ভর্তি বিজ্ঞপ্তি', date: '১২ জুন, ২০২৪' },
        { id: 2, title: 'মাসিক বেতন পরিশোধের সময়সীমা বৃদ্ধি', date: '১০ জুন, ২০২৪' },
        { id: 3, title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা, ২০২৪', date: '০৫ জুন, ২০২৪' },
        { id: 4, title: 'গ্রীষ্মকালীন অবকাশের সময়সূচি', date: '০১ জুন, ২০২৪' },
    ];

    return (
        <div className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
                    সাম্প্রতিক নোটিশ
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notices.map((notice) => (
                        <div key={notice.id} className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 transition duration-300 transform hover:scale-105 hover:shadow-lg">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{notice.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">তারিখ: {notice.date}</p>
                            <Link to={`/notices/${notice.id}`} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                                বিস্তারিত দেখুন →
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/notices" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                        সকল নোটিশ দেখুন
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NoticesSection;
