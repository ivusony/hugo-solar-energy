import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";


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
            className="relative w-full mx-auto py-20"
        >
            <div className="max-w-7xl mx-auto w-full  text-center mb-12">
                <h2 className="text-3xl font-extrabold text-[var(--color)] mb-7">
                    { locales[locale].project_development.AdvantagesOfSolarParksSegment.title }
                </h2>
                <p className="mb-5 text-justify  text-xl ">
                    { locales[locale].project_development.AdvantagesOfSolarParksSegment.description }
                </p>

                <motion.div
                    key={2}
                    variants={item}
                    className="text-center"
                >
                    <a href={ `${ locale == "sr" ? "" : "/" + locale }/contact` } className="inline-block bg-[var(--color-secondary)] text-white py-3 px-6 text-lg font-semibold mt-10 hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 ease">
                        {locales[locale].project_development.contactUsButton}
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}