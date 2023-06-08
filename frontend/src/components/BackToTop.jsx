import React, { useEffect, useState } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);
        return () => window.removeEventListener('scroll', checkVisibility);
    }, []);

    return (
        <button 
            onClick={scrollToTop} 
            className={`fixed bottom-5 left-5 z-[50] text-white bg-gray-500 px-2 py-1 rounded-full opacity-75 hover:opacity-100 transition ${isVisible ? 'block' : 'hidden'}`}
        >
            Back to Top
        </button>
    );
}

export default BackToTop;
