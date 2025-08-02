import React from 'react';
import { Link } from 'react-router'; 

const NoticeMarquee = () => {
    const notices = [
        { id: 1, title: "ভর্তি চলছে: নতুন শিক্ষাবর্ষের জন্য আবেদন করুন!", slug: "/notices/admission-2024" },
        { id: 2, title: "আগামীকাল স্কুল ছুটি থাকবে।", slug: "/notices/holiday-notice" },
        { id: 3, title: "২০২৪-২৫ শিক্ষাবর্ষের ফলাফল প্রকাশিত হয়েছে।", slug: "/notices/results-2024-25" },
        { id: 4, title: "বার্ষিক ক্রীড়া প্রতিযোগিতা আগামী ১লা সেপ্টেম্বর অনুষ্ঠিত হবে।", slug: "/notices/annual-sports" },
        { id: 5, title: "শিক্ষকদের জন্য একটি বিশেষ প্রশিক্ষণ কর্মসূচি শুরু হবে।", slug: "/notices/teacher-training" }
    ];

    return (
        <div className="bg-blue-600 text-white font-bold py-3 px-4 shadow-lg rounded-md mt-4">
            <div className="flex items-center">
                <span className="bg-red-700 text-sm md:text-base px-3 py-1 rounded-full mr-4 whitespace-nowrap">
                    জরুরি নোটিশ
                </span>
                
                <marquee
                    className="flex-1 text-sm md:text-base"
                    behavior="scroll"
                    direction="left"
                    scrollamount="5"
                >
                    {notices.map((notice) => (
                        <Link 
                            key={notice.id} 
                            to={notice.slug} 
                            className="mx-8 hover:underline hover:text-yellow-300"
                        >
                            • {notice.title}
                        </Link>
                    ))}
                </marquee>
            </div>
        </div>
    );
};

export default NoticeMarquee;
