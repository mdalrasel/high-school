import React, { useState, useRef } from 'react';
import { Medal, Download, X, UserRound, Book, Trophy, Award } from 'lucide-react';

// ডামি ফলাফল ডেটা
const dummyResults = [
    {
        id: 1,
        title: 'অষ্টম শ্রেণির বার্ষিক পরীক্ষার ফলাফল',
        class: 'অষ্টম',
        year: '২০২৪',
        details: 'অষ্টম শ্রেণির সকল শিক্ষার্থীর বার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে। নিচে পূর্ণাঙ্গ ফলাফল দেখতে পারবেন। এই বছরের ফলাফল খুবই আশাব্যঞ্জক এবং শিক্ষার্থীদের কঠোর পরিশ্রমের প্রতিফলন।',
        downloadUrl: '#',
        results: [
            { id: 1, name: 'রবিউল ইসলাম', roll: 101, gpa: 4.85, status: 'পাস' },
            { id: 2, name: 'ফারিহা আহমেদ', roll: 102, gpa: 5.00, status: 'পাস' },
            { id: 3, name: 'তানভীর হাসান', roll: 103, gpa: 4.50, status: 'পাস' },
            { id: 4, name: 'সাবিনা ইয়াসমিন', roll: 104, gpa: 3.90, status: 'পাস' },
        ],
    },
    {
        id: 2,
        title: 'দশম শ্রেণির প্রাক-নির্বাচনী ফলাফল',
        class: 'দশম',
        year: '২০২৪',
        details: 'দশম শ্রেণির প্রাক-নির্বাচনী পরীক্ষার ফলাফল প্রকাশিত হয়েছে। এটি শিক্ষার্থীদের নির্বাচনী পরীক্ষার প্রস্তুতির জন্য গুরুত্বপূর্ণ।',
        downloadUrl: '#',
        results: [
            { id: 1, name: 'সাইফ উদ্দিন', roll: 201, gpa: 4.95, status: 'পাস' },
            { id: 2, name: 'সাদিয়া আক্তার', roll: 202, gpa: 5.00, status: 'পাস' },
            { id: 3, name: 'আসিফ মাহমুদ', roll: 203, gpa: 4.75, status: 'পাস' },
        ],
    },
    {
        id: 3,
        title: 'ষষ্ঠ শ্রেণির অর্ধবার্ষিক ফলাফল',
        class: 'ষষ্ঠ',
        year: '২০২৪',
        details: 'ষষ্ঠ শ্রেণির অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশিত হয়েছে।',
        downloadUrl: '#',
        results: [
            { id: 1, name: 'মেহজাবিন আলম', roll: 301, gpa: 4.80, status: 'পাস' },
            { id: 2, name: 'নাসিরুল হক', roll: 302, gpa: 4.50, status: 'পাস' },
        ],
    },
];

const adminResults = [
    {
        id: 4,
        title: 'এসএসসি পরীক্ষার ফলাফল - ২০২৪',
        class: 'এসএসসি',
        year: '২০২৪',
        details: '২০২৪ সালের এসএসসি পরীক্ষার ফলাফল প্রকাশিত হয়েছে। আমাদের বিদ্যালয় থেকে এই বছর ২৫ জন শিক্ষার্থী জিপিএ-৫ পেয়েছে।',
        downloadUrl: '#',
        results: [
            { id: 1, name: 'আবু বকর সিদ্দিক', roll: '123456', gpa: 5.00, status: 'পাস' },
            { id: 2, name: 'মুশফিকুর রহমান', roll: '123457', gpa: 5.00, status: 'পাস' },
            { id: 3, name: 'সানজিদা খাতুন', roll: '123458', gpa: 4.80, status: 'পাস' },
        ],
    },
];

const ResultBoard = () => {
    const [selectedResult, setSelectedResult] = useState(null);
    const modalRef = useRef(null);

    const handleShowDetails = (result) => {
        setSelectedResult(result);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    // const handleDownload = (result) => {
    //     console.log(`Downloading file for result: ${result.title}`);
    //     window.open(result.downloadUrl, '_blank');
    // };

    return (
        <div className="p-4 md:p-8 container mx-auto bg-gray-50 dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                <Medal className="inline-block mr-2" size={32} /> ফলাফল বোর্ড
            </h2>

            {/* ক্লাস ভিত্তিক ফলাফল */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <Trophy size={28} /> ক্লাস ভিত্তিক ফলাফল
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dummyResults.length > 0 ? (
                        dummyResults.map((result) => (
                            <div
                                key={result.id}
                                className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="card-body p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                                            <Book size={24} />
                                        </div>
                                        <div>
                                            <h4 className="card-title text-gray-900 dark:text-gray-100 text-xl font-bold">{result.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">শ্রেণি: {result.class}, বছর: {result.year}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {result.details}
                                    </p>
                                    <div className="card-actions justify-end mt-auto flex-wrap gap-2">
                                        <button
                                            onClick={() => handleShowDetails(result)}
                                            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                        >
                                            বিস্তারিত
                                        </button>
                                        <a
                                            href={result.downloadUrl}
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
                        <div className="col-span-full flex items-center justify-center h-full min-h-[150px]">
                            <p className="text-center text-xl font-semibold text-gray-500 dark:text-gray-400">
                                কোনো ক্লাস ভিত্তিক ফলাফল পাওয়া যায়নি।
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* এডমিন ফলাফল */}
            <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <Award size={28} /> এডমিন প্যানেল ফলাফল
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {adminResults.length > 0 ? (
                        adminResults.map((result) => (
                            <div
                                key={result.id}
                                className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="card-body p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                                            <Book size={24} />
                                        </div>
                                        <div>
                                            <h4 className="card-title text-gray-900 dark:text-gray-100 text-xl font-bold">{result.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">শ্রেণি: {result.class}, বছর: {result.year}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {result.details}
                                    </p>
                                    <div className="card-actions justify-end mt-auto flex-wrap gap-2">
                                        <button
                                            onClick={() => handleShowDetails(result)}
                                            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                        >
                                            বিস্তারিত
                                        </button>
                                        <a
                                            href={result.downloadUrl}
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
                        <div className="col-span-full flex items-center justify-center h-full min-h-[150px]">
                            <p className="text-center text-xl font-semibold text-gray-500 dark:text-gray-400">
                                কোনো এডমিন ফলাফল পাওয়া যায়নি।
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="result-details-modal" ref={modalRef} className="modal">
                <div className="modal-box p-6 w-full max-w-lg">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => setSelectedResult(null)}
                        >
                            <X size={24} />
                        </button>
                    </form>
                    {selectedResult && (
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                                    <Medal size={24} />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{selectedResult.title}</h3>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">শ্রেণি: {selectedResult.class}, বছর: {selectedResult.year}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{selectedResult.details}</p>
                            
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                <UserRound size={20} /> শিক্ষার্থীদের ফলাফল
                            </h4>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                                            <th>ক্রমিক</th>
                                            <th>নাম</th>
                                            <th>রোল</th>
                                            <th>জিপিএ</th>
                                            <th>অবস্থা</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedResult.results.map((student, index) => (
                                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                                <td>{index + 1}</td>
                                                <td>{student.name}</td>
                                                <td>{student.roll}</td>
                                                <td>{student.gpa}</td>
                                                <td>{student.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setSelectedResult(null)}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default ResultBoard;
