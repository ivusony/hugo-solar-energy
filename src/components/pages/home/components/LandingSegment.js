import { useLocales } from "@components/hooks/useLocales";
import introMediaStyles from "@styles/components/pages/home_partials/LandingSegment.module.css"
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";


export default function LandingSegment() {

    let { locale } = useRouter();
    let locales = useLocales();
    let [ hideScrollIndicator, setHideScrollIndicator ] = useState(false);

    // function to scroll down to the next segment, smoothly. Determine introMediaSegment offset height, and scroll down by that height

    const scrollToNextSegment = () => {
        console.log("scrolling to next segment");
        const introMediaParallaxSegment = document.querySelector(`#intro-media-parallax-segment`);
        if (!introMediaParallaxSegment) return;
        const segmentBottom = introMediaParallaxSegment.getBoundingClientRect().bottom + window.scrollY;
        const scrollDistance = segmentBottom - window.scrollY;
        
        window.scrollBy({
            top: scrollDistance,
            left: 0,
            behavior: 'smooth'
        });
    }

    // function to give #intro-media-text-box a parallax effect on scroll
    function handleScroll() {
        const introMediaTextBox = document.querySelector(`#intro-media-text-box`);
        if (!introMediaTextBox) return;
        const scrollPosition = window.scrollY;
        introMediaTextBox.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        const scrollDownIndicator = document.querySelector(`#scroll-down-indicator`);
        if ( scrollPosition > 200 ) {
            scrollDownIndicator.style.opacity = 0;
        } else {
            scrollDownIndicator.style.opacity = 1;
        }
    }

    // add event listener to window scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div id="landing-segment" className="h-[100vh] relative bg-gradient-to-b from-transparent to-[black]/70">
            <div id="intro-media-text-box" className="absolute bottom-1/4  md:bottom-1/6  left-[calc(5vw)] md:left-[5vw] ">
                <h1 className="text-white text-4xl md:text-7xl font-bold mb-4">HUGO SOLAR ENERGY</h1>
                <h2 className="text-white text-xl md:text-4xl font-bold md:font-normal mb-8 md:mb-10">{locales[locale].home.components.IntroMediaSegment.introMediaTextBox}</h2>
                {/* var(--color) button "OUR PROJECTS" text white, sharp edges */}
                <Link 
                    className="mt-4 md:mt-8 bg-[var(--color)] text-white px-6 md:px-8 py-4 md:py-4 text-sm md:text-lg font-bold hover:brightness-90 transition-all duration-300 ease-in-out"
                    href={`${ locale == "sr" ? "" : "/" + locale }/our-projects` }
                >
                    {
                        locale == "sr" ? "NAŠI PROJEKTI" : "OUR PROJECTS"
                    }
                </Link>
            </div>
             <button 
                aria-label="Scroll Down" 
                id="scroll-down-indicator"
                className={`absolute z-10 bottom-25 ${hideScrollIndicator ? "opacity-0" : "opacity-100"} md:bottom-5 right-5 md:right-15 w-10 h-10 border-2 border-[var(--color)] rounded-full flex items-center justify-center  transition-all duration-300 ease-in-out bg-[var(--color)]  ${introMediaStyles.scrollDownIndicator}`}   
                onClick={scrollToNextSegment}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke="white" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </button>
        </div>
    )
}