import React, { useState } from 'react';
import { BookOpen, Megaphone, Calendar, Trophy, X } from 'lucide-react';

// কাস্টম মডাল কম্পোনেন্ট
const DetailsModal = ({ post, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 w-full max-w-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
                >
                    <X size={24} />
                </button>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">তারিখ: {post.date} | পোস্ট করেছেন: {post.author}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{post.content}</p>
            </div>
        </div>
    );
};

const Academic = () => {
    // দৈনিক পোস্টের জন্য ডামি ডেটা
    const posts = [
        {
            id: 1,
            title: 'বার্ষিক সাংস্কৃতিক অনুষ্ঠানের ঘোষণা',
            content: 'আগামী ১৫ই মার্চ আমাদের স্কুলের বার্ষিক সাংস্কৃতিক অনুষ্ঠান অনুষ্ঠিত হবে। সকল শিক্ষার্থীকে অংশগ্রহণের জন্য উৎসাহিত করা হচ্ছে। এটি আমাদের স্কুলের সবচেয়ে বড় এবং সবচেয়ে প্রতীক্ষিত ইভেন্টগুলোর মধ্যে একটি।',
            date: '১২ জুন, ২০২৪',
            author: 'অধ্যক্ষ'
        },
        {
            id: 2,
            title: 'মাসিক পরীক্ষার ফলাফল প্রকাশ',
            content: 'মে মাসের মাসিক পরীক্ষার ফলাফল আগামীকাল স্কুলের নোটিশ বোর্ডে প্রকাশ করা হবে। অভিভাবক ও শিক্ষার্থীরা ফলাফল দেখতে পারবেন। নির্দিষ্ট সময়ে ফলাফল সংগ্রহ করার জন্য অনুরোধ করা হলো।',
            date: '১১ জুন, ২০২৪',
            author: 'পরীক্ষা নিয়ন্ত্রক'
        },
        {
            id: 3,
            title: 'সকাল ১০টায় ক্লাস শুরু হবে',
            content: 'বিদ্যুৎ বিভ্রাটের কারণে আজ সকাল ১০টা থেকে সকল ক্লাস শুরু হবে। শিক্ষার্থীরা যথাসময়ে স্কুলে উপস্থিত থাকবে। এই সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত।',
            date: '১০ জুন, ২০২৪',
            author: 'ভারপ্রাপ্ত শিক্ষক'
        },
        {
            id: 4,
            title: 'আন্তঃস্কুল বিতর্ক প্রতিযোগিতা',
            content: 'আমাদের স্কুলের বিতর্ক দল আগামী সপ্তাহে অনুষ্ঠিতব্য আন্তঃস্কুল বিতর্ক প্রতিযোগিতায় অংশগ্রহণ করবে। সকলের জন্য শুভকামনা। তাদের সফলতার জন্য আমরা সবাই আশা করছি।',
            date: '০৯ জুন, ২০২৪',
            author: 'বিতর্ক ক্লাব'
        },
        {
            id: 5,
            title: 'গ্রন্থাগারের নতুন বই',
            content: 'গ্রন্থাগারে নতুন একশটি বই যোগ করা হয়েছে। শিক্ষার্থীরা তাদের পছন্দের নতুন বইগুলো এখন থেকে পড়তে পারবে। নতুন বইগুলো বিভিন্ন বিষয়ের উপর ভিত্তি করে বাছাই করা হয়েছে।',
            date: '০৮ জুন, ২০২৪',
            author: 'গ্রন্থাগারিক'
        },
        {
            id: 6,
            title: 'ক্রীড়া প্রতিযোগিতার প্রস্তুতি',
            content: 'আসন্ন বার্ষিক ক্রীড়া প্রতিযোগিতার জন্য সকল খেলোয়াড়কে নিয়মিত অনুশীলনে অংশ নেওয়ার জন্য বলা হচ্ছে। খেলার নিয়মাবলী এবং সময়সূচী শীঘ্রই প্রকাশ করা হবে।',
            date: '০৭ জুন, ২০২৪',
            author: 'শারীরিক শিক্ষা শিক্ষক'
        },
    ];

    const [selectedPost, setSelectedPost] = useState(null);

    // সর্বশেষ পোস্টটি সামনে রাখার জন্য ডেটা সর্ট করা
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold mb-2">একাডেমিক নোটিশ বোর্ড</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        স্কুলের দৈনন্দিন ঘোষণা, বিজ্ঞপ্তি এবং গুরুত্বপূর্ণ নোটিশ।
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedPosts.length > 0 ? (
                        sortedPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="p-3 bg-blue-100 text-blue-600 dark:bg-blue-600 dark:text-white rounded-full self-start mb-4">
                                    {post.title.includes('সাংস্কৃতিক') && <BookOpen size={24} />}
                                    {post.title.includes('পরীক্ষা') && <Trophy size={24} />}
                                    {post.title.includes('ঘোষণা') && <Megaphone size={24} />}
                                    {post.title.includes('ক্লাস') && <Calendar size={24} />}
                                    {post.title.includes('গ্রন্থাগার') && <BookOpen size={24} />}
                                    {post.title.includes('ক্রীড়া') && <Trophy size={24} />}
                                    {!post.title.includes('সাংস্কৃতিক') && !post.title.includes('পরীক্ষা') && !post.title.includes('ঘোষণা') && !post.title.includes('ক্লাস') && !post.title.includes('গ্রন্থাগার') && !post.title.includes('ক্রীড়া') && <Megaphone size={24} />}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 truncate">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-3">
                                    {post.content}
                                </p>
                                <div className="mt-auto flex justify-between items-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                    <span>তারিখ: {post.date}</span>
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                    >
                                        বিস্তারিত দেখুন
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-lg text-gray-500 col-span-full">কোনো পোস্ট পাওয়া যায়নি।</p>
                    )}
                </div>
            </div>
            {selectedPost && <DetailsModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
        </div>
    );
};

export default Academic;
