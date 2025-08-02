import React from 'react';
import { Link } from 'react-router';

// Swiper.js এর প্রয়োজনীয় কম্পোনেন্ট এবং মডিউল ইম্পোর্ট করা হয়েছে
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper এর CSS ফাইল ইম্পোর্ট করা হয়েছে
import 'swiper/css';
import 'swiper/css/pagination';

const HomepageCarousel = () => {
    const swiperModules = [Autoplay, Pagination];
    
    // ক্যারোসেলের জন্য ছবির URL
    const carouselImages = [
        "https://placehold.co/1200x600/77B0AA/FFFFFF?text=School+Building+1",
        "https://placehold.co/1200x600/135D66/FFFFFF?text=Students+in+Action",
        "https://placehold.co/1200x600/003C43/FFFFFF?text=School+Event",
        "https://placehold.co/1200x600/E3FEF7/000000?text=Classroom"
    ];

    // চেয়ারম্যান এবং প্রিন্সিপালের জন্য একটি আলাদা কম্পোনেন্ট তৈরি করা হয়েছে যাতে কোড পুনরাবৃত্তি না হয়
    const AboutSection = ({ title, imgText, linkTo, content }) => (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg flex-1 min-w-0">
            <img
                src={`https://placehold.co/200x200/cccccc/333333?text=${imgText}`}
                alt={`${title} এর ছবি`}
                className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover mb-4 shadow-md"
            />
            <div className="text-center">
                <h3 className="font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs md:text-sm mb-2 md:mb-4">
                    {content}
                </p>
                <Link to={linkTo} className="text-blue-600 hover:underline dark:text-blue-400">
                    আরও পড়ুন
                </Link>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            {/* মোবাইল ডিভাইসের জন্য লেআউট (Swiper উপরে, তারপর দুটি কলাম) */}
            <div className="flex flex-col gap-4 lg:hidden">
                {/* মাঝখানের Swiper ক্যারোসেল স্লাইডার */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={swiperModules}
                        className="mySwiper h-full"
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* চেয়ারম্যান এবং প্রিন্সিপালের ব্লক (মোবাইলে পাশাপাশি) */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <AboutSection
                        title="চেয়ারম্যান সম্পর্কে"
                        imgText="Chairman"
                        linkTo="/chairman"
                        content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                    />
                    <AboutSection
                        title="প্রিন্সিপাল সম্পর্কে"
                        imgText="Principal"
                        linkTo="/principal"
                        content="The magnificently, systematically and..."
                    />
                </div>
            </div>

            {/* ট্যাবলেট এবং ডেস্কটপ ডিভাইসের জন্য লেআউট (তিন কলাম) */}
            <div className="hidden lg:flex flex-row gap-8">
                {/* বাম পাশের স্থির ব্লক (About Chairman) */}
                <AboutSection
                    title="চেয়ারম্যান সম্পর্কে"
                    imgText="Chairman"
                    linkTo="/chairman"
                    content="বর্তমান স্কুল বিজ্ঞান ও তথ্য-প্রযুক্তি উন্নত করবে..."
                />
                
                {/* মাঝখানের Swiper ক্যারোসেল স্লাইডার */}
                <div className="flex-grow rounded-xl overflow-hidden shadow-lg">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={swiperModules}
                        className="mySwiper h-full"
                    >
                        {carouselImages.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ডান পাশের স্থির ব্লক (About Principal) */}
                <AboutSection
                    title="প্রিন্সিপাল সম্পর্কে"
                    imgText="Principal"
                    linkTo="/principal"
                    content="The magnificently, systematically and..."
                />
            </div>
        </div>
    );
};

export default HomepageCarousel;
