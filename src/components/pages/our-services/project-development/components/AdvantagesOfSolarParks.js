import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Link from "next/link";


export default function AdvantagesOfSolarParks() {
    let {locale} = useRouter();
    let locales = useLocales ();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);


    return(
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="relative w-full mx-auto py-20 px-2 md:px-0"
        >
            <div className="max-w-7xl mx-auto w-full  text-center mb-12">
                <motion.div
                    key={0}
                    variants={item}
                >
                    <h2 className="hugo-h2">
                        { locales[locale].project_development.AdvantagesOfSolarParksSegment.title }
                    </h2>
                </motion.div>
                <motion.div
                    key={1}
                    variants={item}
                >
                    <p className="hugo-p-justify">
                        { locales[locale].project_development.AdvantagesOfSolarParksSegment.description }
                    </p>
                </motion.div>

                <motion.div
                    key={2}
                    variants={item}
                >
                    <Link
                        href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/procurement-and-construction` } 
                        className="w-full sm:w-[300px] inline-block bg-[var(--color)] text-white py-3 px-6 text-lg font-semibold mt-10 hover:bg-[var(--color-darker)] transition-colors duration-300 ease"
                    >
                        {
                            locale == "sr" ? "Nabavka i izgradnja" : "Procurement & Construction"
                        }
                        {/* white right arrow svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={20} height={20}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>

                <motion.div
                    key={3}
                    variants={item}
                >
                    <Link
                        href={ `${ locale == "sr" ? "" : "/" + locale }/contact_us` } 
                        className="w-full sm:w-[300px] inline-block bg-[var(--color-secondary)] text-white py-3 px-6 text-lg font-semibold mt-10 hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 ease"
                    >
                        {locales[locale].project_development.contactUsButton}
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}