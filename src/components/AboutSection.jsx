const AboutSection = () => {
    return (
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                    <div className="md:w-1/2">
                        <img
                            src="https://placehold.co/600x400/87CEEB/FFFFFF?text=School+Building"
                            alt="স্কুলের ছবি"
                            className="rounded-xl shadow-lg w-full"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                            আমাদের সম্পর্কে
                        </h2>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                            আমাদের স্কুল ১৯০০ সাল থেকে শিক্ষার আলো ছড়িয়ে যাচ্ছে। আমরা শিক্ষার্থীদের একটি সুশৃঙ্খল, আধুনিক এবং নৈতিকতা-ভিত্তিক শিক্ষাব্যবস্থা প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য, শিক্ষার্থীদেরকে কেবল ভালো ফল করার জন্য নয়, বরং একজন ভালো মানুষ হিসেবে গড়ে তোলা।
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            আমরা বিশ্বাস করি, শিক্ষার মাধ্যমে একটি জাতি উন্নত হয়। তাই আমাদের প্রতিটি শিক্ষক শিক্ষার্থীদের মেধা ও সৃজনশীলতা বিকাশে নিরলসভাবে কাজ করে যান।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;