const Banner = () => {
    return (
        <div className='hidden md:flex justify-between py-5 px-10 bg-gradient-to-r from-white to-green-100'>
            <div className='flex-1 flex items-center gap-4'>
                <img className='w-24' src="/public/Profile.png" alt="স্কুল লোগো" />
                <div>
                    <h1 className='text-2xl font-extrabold'>বলশীদ হাজী আকুব আলী উচ্চ বিদ্যালয়</h1>
                    <p>প্রতিষ্ঠাতা : প্রয়াত চেয়ারম্যান আশেক আলী সাহেব।</p>
                    <div className='flex gap-5'>
                        <p>স্থাপিতঃ-১৯৬৯ইং</p>
                        <p>ইআইআইএন : ১০৩৯৭০</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex justify-end'>
                <img className='h-44 w-full object-cover' src="https://placehold.co/1200x200/cccccc/333333?text=School+Banner" alt="স্কুল ব্যানার" />
            </div>
        </div>
    );
};

export default Banner;