import React, { useState, useRef } from 'react';
import { Bell, FileText, Download, X } from 'lucide-react';

// ডামি নোটিশ ডেটা
const dummyNotices = [
    {
        id: 1,
        title: 'বার্ষিক পরীক্ষা-২০২৪ এর সময়সূচী',
        content: 'আগামী ১লা ডিসেম্বর থেকে বার্ষিক পরীক্ষা শুরু হবে। সকল শিক্ষার্থীকে সময়সূচী অনুযায়ী প্রস্তুতি নেওয়ার জন্য বলা হচ্ছে। এই পরীক্ষাটি শিক্ষার্থীদের জন্য অত্যন্ত গুরুত্বপূর্ণ।',
        fullContent: 'বিদ্যালয়ের সকল শিক্ষার্থী ও অভিভাবকদের অবগতির জন্য জানানো যাচ্ছে যে, আগামী ১লা ডিসেম্বর, ২০২৪ থেকে ২০শে ডিসেম্বর, ২০২৪ পর্যন্ত বার্ষিক পরীক্ষা অনুষ্ঠিত হবে। পরীক্ষার রুটিন এবং আসন বিন্যাস খুব শীঘ্রই নোটিশ বোর্ডে প্রকাশ করা হবে। সকলকে নিয়মিত বিদ্যালয়ে উপস্থিত থাকার জন্য অনুরোধ করা হলো।',
        date: '১২ জুন, ২০২৪',
        downloadUrl: '#',
    },
    {
        id: 2,
        title: 'গ্রন্থাগারের নতুন নিয়মাবলী',
        content: 'লাইব্রেরিতে বই ইস্যু এবং ফেরত দেওয়ার জন্য নতুন কিছু নিয়ম চালু করা হয়েছে। বিস্তারিত জানতে নোটিশটি দেখুন। এই নিয়মগুলো লাইব্রেরির শৃঙ্খলা বজায় রাখতে সাহায্য করবে।',
        fullContent: 'প্রিয় শিক্ষার্থী ও শিক্ষকবৃন্দ, লাইব্রেরির পরিষেবা আরও উন্নত করার লক্ষ্যে কিছু নতুন নিয়মাবলী প্রণয়ন করা হয়েছে। এখন থেকে একজন শিক্ষার্থী সর্বোচ্চ দুটি বই একবারে ইস্যু করতে পারবে এবং তা ১৫ দিনের মধ্যে ফেরত দিতে হবে। বই দেরিতে ফেরত দিলে প্রতিদিন ৫ টাকা জরিমানা করা হবে। লাইব্রেরি ব্যবহারের সময় নিরবতা বজায় রাখতে হবে।',
        date: '১১ জুন, ২০২৪',
        downloadUrl: '#',
    },
    {
        id: 3,
        title: 'স্কুল ইউনিফর্ম পরিবর্তনের ঘোষণা',
        content: 'আগামী শিক্ষাবর্ষ থেকে নতুন ইউনিফর্ম চালু করা হবে। ইউনিফর্মের নকশা ও অন্যান্য বিস্তারিত তথ্য এই নোটিশে দেওয়া আছে।',
        fullContent: 'আগামী শিক্ষাবর্ষ (২০২৫) থেকে বিদ্যালয়ের সকল শিক্ষার্থীর জন্য নতুন ইউনিফর্ম চালু করার সিদ্ধান্ত নেওয়া হয়েছে। নতুন ইউনিফর্মের নকশা এবং রঙের বিবরণ নোটিশের সাথে সংযুক্ত করা হলো। সকল শিক্ষার্থীকে ফেব্রুয়ারি মাসের মধ্যে নতুন ইউনিফর্ম সংগ্রহ করতে বলা হচ্ছে।',
        date: '১০ জুন, ২০২৪',
        downloadUrl: '#',
    },
    {
        id: 4,
        title: 'মাতৃভাষা দিবসের অনুষ্ঠান',
        content: 'আসন্ন ২১শে ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস পালনের জন্য একটি বিশেষ অনুষ্ঠানের আয়োজন করা হয়েছে। আগ্রহী শিক্ষার্থীদের নাম জমা দেওয়ার জন্য বলা হচ্ছে।',
        fullContent: 'আগামী ২১শে ফেব্রুয়ারি, আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে আমাদের বিদ্যালয়ে একটি বিশেষ সাংস্কৃতিক অনুষ্ঠানের আয়োজন করা হয়েছে। অনুষ্ঠানে কবিতা আবৃত্তি, গান এবং নাটকের আয়োজন করা হবে। আগ্রহী শিক্ষার্থীদেরকে আগামী ১৮ই ফেব্রুয়ারির মধ্যে তাদের নাম শ্রেণী শিক্ষকের কাছে জমা দেওয়ার জন্য অনুরোধ করা হচ্ছে।',
        date: '০৯ জুন, ২০২৪',
        downloadUrl: '#',
    },
];

const NoticeBoard = () => {
    const [selectedNotice, setSelectedNotice] = useState(null);
    const modalRef = useRef(null);

    const handleShowDetails = (notice) => {
        setSelectedNotice(notice);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    // const handleDownload = (notice) => {
    //     // এখানে ডাউনলোডের আসল লজিক যুক্ত করতে পারেন
    //     console.log(`Downloading file for notice: ${notice.title}`);
    //     window.open(notice.downloadUrl, '_blank');
    // };

    return (
        <div className="p-4 md:p-8 container mx-auto bg-gray-50 dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                <Bell className="inline-block mr-2" size={32} /> নোটিশ বোর্ড
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyNotices.length > 0 ? (
                    dummyNotices.map((notice) => (
                        <div
                            key={notice.id}
                            className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h2 className="card-title text-gray-900 dark:text-gray-100 text-xl font-bold">{notice.title}</h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">তারিখ: {notice.date}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                    {notice.content}
                                </p>
                                <div className="card-actions justify-end mt-auto flex-wrap gap-2">
                                    <button
                                        onClick={() => handleShowDetails(notice)}
                                        className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                    >
                                        বিস্তারিত
                                    </button>
                                    <a
                                        href={notice.downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-outline btn-info border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 flex items-center gap-2"
                                    >
                                        <Download size={20} /> ডাউনলোড
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex items-center justify-center h-full min-h-[300px]">
                        <p className="text-center text-xl font-semibold text-gray-500 dark:text-gray-400">
                            কোনো নোটিশ পাওয়া যায়নি।
                        </p>
                    </div>
                )}
            </div>

            {/* DaisyUI Modal */}
            <dialog id="notice-details-modal" ref={modalRef} className="modal">
                <div className="modal-box p-6 w-full max-w-lg">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => setSelectedNotice(null)}
                        >
                            <X size={24} />
                        </button>
                    </form>
                    {selectedNotice && (
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{selectedNotice.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">তারিখ: {selectedNotice.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedNotice.fullContent}</p>
                        </div>
                    )}
                </div>
                {/* Modal backdrop to close when clicked outside */}
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setSelectedNotice(null)}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default NoticeBoard;
