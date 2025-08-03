import React, { useState, useRef} from 'react';
import { UserRound, X } from 'lucide-react';

const leadTeacher = {
    id: 1,
    name: 'আব্দুল আহাদ',
    img: 'https://placehold.co/150x150/E0E7FF/3B82F6?text=প্রধান+শিক্ষক',
    designation: 'প্রধান শিক্ষক',
    bio: 'আব্দুল আহাদ স্যার আমাদের বিদ্যালয়ের প্রধান শিক্ষক। তিনি গত ২০ বছর ধরে শিক্ষকতা করছেন এবং তার নেতৃত্বে বিদ্যালয়টি শিক্ষাক্ষেত্রে অনেক সাফল্য অর্জন করেছে। তাঁর লক্ষ্য শিক্ষার্থীদের জন্য একটি আদর্শ শিক্ষাব্যবস্থা তৈরি করা। তিনি ইংরেজি সাহিত্যে স্নাতকোত্তর ডিগ্রিধারী।'
};

const otherTeachers = [
    { id: 2, name: 'ফারজানা আক্তার', img: 'https://placehold.co/100x100/D1FAE5/059669?text=ফারজানা', designation: 'সহকারী শিক্ষক (গণিত)', bio: 'ফারজানা আক্তার ম্যাডাম গণিত বিভাগে অত্যন্ত দক্ষ একজন শিক্ষক। তার সহজবোধ্য শিক্ষাদান পদ্ধতি শিক্ষার্থীদের মধ্যে খুবই জনপ্রিয়। তিনি গত ১০ বছর ধরে আমাদের বিদ্যালয়ে কর্মরত আছেন।' },
    { id: 3, name: 'কামাল হোসেন', img: 'https://placehold.co/100x100/FCE7F3/BE185D?text=কামাল', designation: 'সহকারী শিক্ষক (বিজ্ঞান)', bio: 'কামাল স্যার একজন অভিজ্ঞ বিজ্ঞান শিক্ষক। তিনি শিক্ষার্থীদের মধ্যে বিজ্ঞানের প্রতি আগ্রহ বাড়ানোর জন্য বিভিন্ন প্রজেক্ট ও সেমিনারের আয়োজন করেন। তিনি বিজ্ঞান মেলায় তার শিক্ষার্থীদের নিয়ে সাফল্য লাভ করেছেন।' },
    { id: 4, name: 'তাসনুভা রহমান', img: 'https://placehold.co/100x100/FEE2E2/EF4444?text=তাসনুভা', designation: 'সহকারী শিক্ষক (বাংলা)', bio: 'তাসনুভা ম্যাডাম বাংলা ভাষা ও সাহিত্যে একজন গুণী শিক্ষক। তিনি শিক্ষার্থীদের বাংলা সাহিত্য ও ব্যাকরণের প্রতি আগ্রহ তৈরিতে বিশেষভাবে পারদর্শী। তিনি শিক্ষার্থীদের বাংলা সাহিত্যে দক্ষতা বাড়াতে সাহায্য করেন।' },
    { id: 5, name: 'রাকিব আহমেদ', img: 'https://placehold.co/100x100/E5E7EB/6B7280?text=রাকিব', designation: 'শারীরিক শিক্ষা শিক্ষক', bio: 'রাকিব স্যার স্কুলের ক্রীড়া বিভাগের দায়িত্বে আছেন। তিনি শিক্ষার্থীদের শারীরিক ও মানসিক বিকাশে অত্যন্ত যত্নশীল। তিনি খেলাধুলা সম্পর্কিত সকল কার্যকলাপ পরিচালনা করেন।' },
    { id: 6, name: 'সালমা বেগম', img: 'https://placehold.co/100x100/DBEAFE/2563EB?text=সালমা', designation: 'লাইব্রেরিয়ান', bio: 'সালমা ম্যাডাম লাইব্রেরির দায়িত্বে রয়েছেন। তিনি শিক্ষার্থীদের বই পড়তে উৎসাহিত করেন এবং লাইব্রেরিকে একটি জ্ঞান-ভিত্তিক কেন্দ্র হিসেবে গড়ে তুলেছেন। তিনি শিক্ষার্থীদের বই নির্বাচনে সহায়তা করেন।' },
];

const retiredTeachers = [
    { id: 7, name: 'আলমগীর হোসেন', img: 'https://placehold.co/100x100/FCE7F3/BE185D?text=আলমগীর', designation: 'সাবেক প্রধান শিক্ষক', bio: 'আলমগীর স্যার আমাদের বিদ্যালয়ের একজন প্রাক্তন প্রধান শিক্ষক। তার দীর্ঘ ৩০ বছরের কর্মজীবনে তিনি বিদ্যালয়ের উন্নয়নে অসামান্য অবদান রেখেছেন।' },
    { id: 8, name: 'মমতাজ বেগম', img: 'https://placehold.co/100x100/DBEAFE/2563EB?text=মমতাজ', designation: 'সাবেক সহকারী শিক্ষক', bio: 'মমতাজ ম্যাডাম বাংলা বিভাগে শিক্ষকতা করেছেন। তার মধুর ব্যবহার এবং সহজ শিক্ষাদান পদ্ধতির জন্য তিনি সকল শিক্ষার্থীর প্রিয় ছিলেন। তার কর্মজীবনে তিনি অনেক পুরষ্কার পেয়েছেন।' },
];

const TeacherCard = ({ teacher, onShowDetails }) => (
    <div className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <figure className="p-6 pb-0">
            <img src={teacher.img} alt={teacher.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-md" />
        </figure>
        <div className="card-body items-center text-center p-6 pt-4">
            <h2 className="card-title text-gray-900 dark:text-gray-100">{teacher.name}</h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{teacher.designation}</p>
            <div className="card-actions justify-end mt-4">
                <button
                    onClick={() => onShowDetails(teacher)}
                    className="btn btn-sm btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                >
                    বিস্তারিত
                </button>
            </div>
        </div>
    </div>
);

const Teacher = () => {
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const modalRef = useRef(null);

    const handleShowDetails = (teacher) => {
        setSelectedTeacher(teacher);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="p-4 md:p-8 container mx-auto bg-gray-50 dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100">
            {/* প্রধান শিক্ষক সেকশন */}
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
                <UserRound className="inline-block mr-2" size={32} /> প্রধান শিক্ষক
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 transition-colors duration-200">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                    <img
                        src={leadTeacher.img}
                        alt={leadTeacher.name}
                        className="w-full h-full rounded-full object-cover shadow-xl border-4 border-blue-200 dark:border-blue-700"
                    />
                </div>
                <div className="text-center md:text-left flex-grow">
                    <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">{leadTeacher.name}</h3>
                    <p className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{leadTeacher.designation}</p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {leadTeacher.bio}
                    </p>
                </div>
            </div>

            {/* শিক্ষক মণ্ডলী সেকশন */}
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
                <UserRound className="inline-block mr-2" size={32} /> শিক্ষক মণ্ডলী
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {otherTeachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} onShowDetails={handleShowDetails} />
                ))}
            </div>

            {/* অবসরপ্রাপ্ত শিক্ষক মণ্ডলী সেকশন */}
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
                <UserRound className="inline-block mr-2" size={32} /> অবসরপ্রাপ্ত শিক্ষক মণ্ডলী
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {retiredTeachers.map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} onShowDetails={handleShowDetails} />
                ))}
            </div>

            {/* DaisyUI Modal */}
            <dialog id="teacher-details-modal" ref={modalRef} className="modal">
                <div className="modal-box p-6 w-full max-w-lg">
                    <form method="dialog">
                        {/* If there is a button in form, it will close the modal */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => setSelectedTeacher(null)}
                        >
                            <X size={24} />
                        </button>
                    </form>
                    {selectedTeacher && (
                        <div className="text-center">
                            <figure className="p-4">
                                <img
                                    src={selectedTeacher.img}
                                    alt={selectedTeacher.name}
                                    className="w-32 h-32 rounded-full object-cover shadow-xl mx-auto border-4 border-blue-200 dark:border-blue-700"
                                />
                            </figure>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{selectedTeacher.name}</h3>
                            <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">{selectedTeacher.designation}</p>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedTeacher.bio}</p>
                        </div>
                    )}
                </div>
                {/* Modal backdrop to close when clicked outside */}
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setSelectedTeacher(null)}>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Teacher;
