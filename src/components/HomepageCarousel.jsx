import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HomepageCarousel = () => {
    const swiperModules = [Autoplay, Pagination];
    
    // ক্যারোসেলের জন্য ছবির URL
    const carouselImages = [
        "https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/502587142_9931523800260626_7012699636374275548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGoCzKN1cOix9cD15yO7-CBiIMXpw63YciIgxenDrdhyJJrW1q6ncWbfd9UnUa0GGd8QwPyRa0mUY07P2EGr43C&_nc_ohc=hsNKLZrBfz4Q7kNvwEK-O6U&_nc_oc=Adkh73ZB0Qc6Hfe7ez365iPR99V86bqHBjGtQWnrmlyNht2YFdnt0upsEr2qFKq5tyU&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=9ZAfnfjXW224vTME586dwA&oh=00_AfSFm00nEe83aRPZMVsa1q8odIUMA4GOJNKq02ibsxdaeA&oe=68942EE7",
        "https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/502729673_9931523960260610_2589370528712807362_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGp9AkThHuJQWzts8cwtDRYmkcPJp8tx1eaRw8mny3HV2_clEllYKDl5wC_9mMx2VSAO1VgkIlbvW7CIlSDiemx&_nc_ohc=8XWIlaKe7_sQ7kNvwHJ4Ble&_nc_oc=AdmKRDmfQ6YbLPvfaeYL6QhpJF7Z7rrc2oLh_gWraEDCnEe7lAqdwSMRnTOkNeILXSs&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=1i8Hxap4yMv5TNEHhjEXHA&oh=00_AfTcgcs_4URxtqqwYwtjiIDxvdNKj1jpYy4QE0G9zyzUIQ&oe=6894263B",
        "https://placehold.co/1200x600/003C43/FFFFFF?text=School+Event",
        "https://placehold.co/1200x600/E3FEF7/000000?text=Classroom"
    ];

    const AboutSection = ({ title, imgText, content, fullContent, uniqueId }) => {
        const modalId = `modal-${uniqueId}`;

        return (
            <div className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex-1 ">
                <img
                    src={`https://placehold.co/200x200/cccccc/333333?text=${imgText}`}
                    alt={`${title} এর ছবি`}
                    className="w-24 md:w-40 rounded-full object-cover mb-4 shadow-md"
                />
                <div className="text-center">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-2 md:mb-4">
                        {content}
                    </p>
                    {/* বাটনে ক্লিক করলে মোডাল খোলার জন্য ডেইজিইউআই এর মেথড ব্যবহার করা হয়েছে */}
                    <button
                        className="text-blue-600 hover:underline dark:text-blue-400"
                        onClick={() => document.getElementById(modalId).showModal()}
                    >
                        আরও পড়ুন
                    </button>
                </div>
                
                {/* ডেইজিইউআই মোডাল কম্পোনেন্ট */}
                <dialog id={modalId} className="modal">
                    <div className="modal-box bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl ">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            {fullContent}
                        </p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                >
                                    বন্ধ করুন
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        );
    };

    return (
        <div className=" px-4 py-8">
            {/* মোবাইল ডিভাইসের জন্য লেআউট (Swiper উপরে, তারপর দুটি কলাম) */}
            <div className="flex flex-col gap-4 lg:hidden">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={swiperModules}
                        className="mySwiper "
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full "
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <AboutSection
                        title="চেয়ারম্যান সম্পর্কে"
                        imgText="Chairman"
                        content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                        fullContent="আমাদের সম্মানিত চেয়ারম্যানের নেতৃত্বে, বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয় বিজ্ঞান ও তথ্য-প্রযুক্তিতে একটি নতুন দিগন্ত উন্মোচন করতে বদ্ধপরিকর। আমাদের লক্ষ্য হলো শিক্ষার্থীদেরকে ২১ শতকের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করা এবং তাদের সৃজনশীলতা ও উদ্ভাবনী ক্ষমতাকে উৎসাহিত করা।"
                        uniqueId="chairman-mobile" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                    <AboutSection
                        title="প্রিন্সিপাল সম্পর্কে"
                        imgText="Principal"
                        content="The magnificently, systematically and..."
                        fullContent="The magnificently, systematically and meticulously crafted curriculum of our school, under the visionary guidance of our esteemed Principal, ensures a holistic and well-rounded education. We are dedicated to nurturing not just academic excellence but also the moral and ethical values that shape responsible global citizens."
                        uniqueId="principal-mobile" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                </div>
            </div>

            {/* ট্যাবলেট এবং ডেস্কটপ ডিভাইসের জন্য লেআউট (তিন কলাম) */}
            <div className="hidden lg:flex flex-row gap-8 items-center">
                {/* বাম পাশের স্থির ব্লক (About Chairman) */}
                <div className="w-1/6">
                    <AboutSection
                        title="চেয়ারম্যান সম্পর্কে"
                        imgText="Chairman"
                        content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                        fullContent="আমাদের সম্মানিত চেয়ারম্যানের নেতৃত্বে, বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয় বিজ্ঞান ও তথ্য-প্রযুক্তিতে একটি নতুন দিগন্ত উন্মোচন করতে বদ্ধপরিকর। আমাদের লক্ষ্য হলো শিক্ষার্থীদেরকে ২১ শতকের চ্যালেঞ্জ মোকাবেলায় প্রস্তুত করা এবং তাদের সৃজনশীলতা ও উদ্ভাবনী ক্ষমতাকে উৎসাহিত করা।"
                        uniqueId="chairman-desktop" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                </div>
                
                {/* মাঝখানের Swiper ক্যারোসেল স্লাইডার */}
                <div className="w-4/6 rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={swiperModules}
                        className="mySwiper h-96"
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full  object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ডান পাশের স্থির ব্লক (About Principal) */}
                <div className="w-1/6">
                    <AboutSection
                        title="প্রিন্সিপাল সম্পর্কে"
                        imgText="Principal"
                        content="The magnificently, systematically and..."
                        fullContent="The magnificently, systematically and meticulously crafted curriculum of our school, under the visionary guidance of our esteemed Principal, ensures a holistic and well-rounded education. We are dedicated to nurturing not just academic excellence but also the moral and ethical values that shape responsible global citizens."
                        uniqueId="principal-desktop" // এখানে একটি অনন্য আইডি যোগ করা হয়েছে
                    />
                </div>
            </div>
        </div>
    );
};

export default HomepageCarousel;
