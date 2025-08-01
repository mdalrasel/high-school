import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    // useTranslation হুক ব্যবহার করে t (translation) ফাংশন এবং i18n অবজেক্ট আনা হয়েছে।
    const { i18n } = useTranslation();

    // ভাষা পরিবর্তন করার জন্য একটি ফাংশন।
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'bn' ? 'en' : 'bn';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="btn btn-ghost btn-sm sm:btn-md"
        >
            {i18n.language === 'bn' ? 'English' : 'বাংলা'}
        </button>
    );
};

export default LanguageToggle;
