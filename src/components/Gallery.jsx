import React, { useState, useRef } from 'react';
import { Camera, X } from 'lucide-react';

// ডামি গ্যালারি ডেটা
const dummyGallery = [
    {
        id: 1,
        title: 'বার্ষিক ক্রীড়া প্রতিযোগিতা',
        description: '২০২৪ সালের বার্ষিক ক্রীড়া প্রতিযোগিতার কিছু স্মরণীয় মুহূর্ত।',
        imageUrl: 'https://placehold.co/600x400/1e40af/ffffff?text=Event+Photo+1',
        fullImageUrl: 'https://placehold.co/1200x800/1e40af/ffffff?text=Event+Photo+1',
    },
    {
        id: 2,
        title: 'মাতৃভাষা দিবস পালন',
        description: 'আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে আয়োজিত সাংস্কৃতিক অনুষ্ঠানের চিত্র।',
        imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=Event+Photo+2',
        fullImageUrl: 'https://placehold.co/1200x800/2563eb/ffffff?text=Event+Photo+2',
    },
    {
        id: 3,
        title: 'প্রতিষ্ঠা বার্ষিকী উৎসব',
        description: 'বিদ্যালয়ের প্রতিষ্ঠা বার্ষিকী উপলক্ষে আয়োজিত বিশেষ অনুষ্ঠানের ছবি।',
        imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Event+Photo+3',
        fullImageUrl: 'https://placehold.co/1200x800/3b82f6/ffffff?text=Event+Photo+3',
    },
    {
        id: 4,
        title: 'শিক্ষাসফর - কক্সবাজার',
        description: '২০২৪ সালের শিক্ষাসফরের সময় তোলা ছবি।',
        imageUrl: 'https://placehold.co/600x400/60a5fa/ffffff?text=Event+Photo+4',
        fullImageUrl: 'https://placehold.co/1200x800/60a5fa/ffffff?text=Event+Photo+4',
    },
    {
        id: 5,
        title: 'পুরস্কার বিতরণী অনুষ্ঠান',
        description: 'বার্ষিক পরীক্ষায় কৃতি শিক্ষার্থীদের পুরস্কার বিতরণের দৃশ্য।',
        imageUrl: 'https://placehold.co/600x400/93c5fd/ffffff?text=Event+Photo+5',
        fullImageUrl: 'https://placehold.co/1200x800/93c5fd/ffffff?text=Event+Photo+5',
    },
    {
        id: 6,
        title: 'বিজ্ঞান মেলা',
        description: 'বিদ্যালয়ে আয়োজিত বিজ্ঞান মেলায় শিক্ষার্থীদের তৈরি প্রজেক্ট।',
        imageUrl: 'https://placehold.co/600x400/bfdbfe/ffffff?text=Event+Photo+6',
        fullImageUrl: 'https://placehold.co/1200x800/bfdbfe/ffffff?text=Event+Photo+6',
    },
];

const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const modalRef = useRef(null);

    const handleShowDetails = (photo) => {
        setSelectedPhoto(photo);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="p-4 md:p-8 container mx-auto bg-gray-50 dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                <Camera className="inline-block mr-2" size={32} /> গ্যালারি
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dummyGallery.length > 0 ? (
                    dummyGallery.map((photo) => (
                        <div
                            key={photo.id}
                            className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                        >
                            <figure className="h-48 w-full">
                                <img
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    className="object-cover w-full h-full"
                                />
                            </figure>
                            <div className="card-body p-6">
                                <h3 className="card-title text-gray-900 dark:text-gray-100 text-xl font-bold">{photo.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                                    {photo.description}
                                </p>
                                <div className="card-actions justify-end mt-4 flex-wrap gap-2">
                                    <button
                                        onClick={() => handleShowDetails(photo)}
                                        className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300"
                                    >
                                        বিস্তারিত
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full flex items-center justify-center h-full min-h-[300px]">
                        <p className="text-center text-xl font-semibold text-gray-500 dark:text-gray-400">
                            কোনো ছবি পাওয়া যায়নি।
                        </p>
                    </div>
                )}
            </div>

            {/* DaisyUI Modal */}
            <dialog id="gallery-details-modal" ref={modalRef} className="modal">
                <div className="modal-box p-6 w-full max-w-2xl">
                    <form method="dialog">
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            <X size={24} />
                        </button>
                    </form>
                    {selectedPhoto && (
                        <div>
                            <figure className="mb-4 rounded-lg overflow-hidden">
                                <img
                                    src={selectedPhoto.fullImageUrl}
                                    alt={selectedPhoto.title}
                                    className="object-cover w-full h-full"
                                />
                            </figure>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{selectedPhoto.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedPhoto.description}</p>
                        </div>
                    )}
                </div>
                <form method="dialog" className="modal-backdrop"></form>
            </dialog>
        </div>
    );
};

export default Gallery;
