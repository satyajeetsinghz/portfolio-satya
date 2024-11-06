import React from 'react'
import './Header.css'
import { useState, useEffect, useRef } from 'react';

const Header = () => {

    const phrases = ["Myself, Satyajeet Singh", "pursuing Computer Science.", "Aspiring Software Enginner!", "Hustle and Coding."];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const headingRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); // Disable animation momentarily to reset it
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3500); // Changes phrase every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    useEffect(() => {
        if (headingRef.current) {
            const textWidth = headingRef.current.scrollWidth;
            headingRef.current.style.setProperty("--motion-preset-typewriter-width", `${textWidth}px`);
        }

        setAnimate(true); // Re-enable animation
    }, [currentPhraseIndex]);


    return (
        // <div className=''>
        //     <div className="w-full h-64 mt-16 flex justify-center items-center">
        //         <div className="inline-flex translate-y-[-3.75rem] md:translate-y-[-50px] overflow-hidden">
        //             <img className="w-10 h-8 md:w-[4rem] md:h-[3rem] lg:w-20 lg:h-16" src="/img/chevron-outline 1.png" alt="" />
        //             <h2 className="text-xl md:text-4xl lg:text-5xl bg-neutral-950/90 text-neutral-50 font-bold py-1.5 px-1 text-center md:py-3 md:px-4 md:text-center motion-preset-typewriter-[28] motion-duration-css">{phrases[currentPhraseIndex]}</h2>
        //         </div>
        //     </div>
        // </div>

        <div className=''>
            <div className="w-full h-64 mt-16 flex justify-center items-center">
                <div className="inline-flex items-center translate-y-[-3.75rem] md:translate-y-[-50px]">
                    <img
                        className="w-10 h-8 md:w-[4rem] md:h-[3rem] lg:w-20 lg:h-16"
                        src="/img/chevron-outline 1.png"
                        alt=""
                    />

                    <h2 ref={headingRef} className={`text-xl md:text-4xl lg:text-5xl bg-neutral-950/90 text-neutral-50 font-bold py-1 md:py-2 px-2 text-start ${animate ? "motion-typewriter" : "opacity-0"}`} style={{
                        "--motion-duration": "1s", // Set duration slightly less than the interval
                    }}>
                        {phrases[currentPhraseIndex]}
                    </h2>

                </div>
            </div>
        </div>

    )
}

export default Header
