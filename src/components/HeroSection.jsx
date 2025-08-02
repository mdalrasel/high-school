import React from 'react';
import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center text-white"
             style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/FFFFFF?text=School+Image')" }}>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 text-center p-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়ে স্বাগতম
                </h1>
                <p className="text-md md:text-xl font-light mb-8 max-w-2xl mx-auto">
                    জ্ঞান ও নৈতিকতার সমন্বয়ে উন্নত ভবিষ্যত গড়ার লক্ষ্যে আমরা প্রতিজ্ঞাবদ্ধ।
                </p>
                <Link to="/admission" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
                    ভর্তি তথ্য
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;