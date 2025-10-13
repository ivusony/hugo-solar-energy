import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/pages/home_partials/AboutIndustrySegment.module.css";
import cardStyles from "@styles/components/shared/Card.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";


export default function AboutIndustrySegment() {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    const container = {
        hidden: {},
        visible: {
        transition: {
            staggerChildren: 0.1,
        },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };


    function handleMouseEnter(e) {
        const cardOverlay = e.currentTarget.querySelector(`.${cardStyles.cardOverlay}`);
        const cardImage = e.currentTarget.querySelector(`.${cardStyles.cardImage}`);
        cardOverlay.classList.add(`${ cardStyles.hovered }`);
        cardImage.classList.add(`${ cardStyles.zoomed }`);
    };

    function handleMouseLeave(e) {
        const cardOverlay = e.currentTarget.querySelector(`.${cardStyles.cardOverlay}`);
        const cardImage = e.currentTarget.querySelector(`.${cardStyles.cardImage}`);
        cardImage.classList.remove(`${ cardStyles.zoomed }`);
        cardOverlay.classList.remove(`${ cardStyles.hovered }`);
    };

    useEffect(() => {
        const cards = document.querySelectorAll(`.${cardStyles.card}`);
        cards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <div id="about-industry-segment" className="relative pl-[var(--segment-padding-left)] pr-[var(--segment-padding-right)] pb-5 bg-white ">
            <h2 className={`text-3xl md:text-4xl font-bold pt-5 mb-10 text-center flex justify-center`}>{locales[locale].home.components.AboutIndustrySegment.title}</h2>
            <h3 className={`text-xl md:text-2xl font-normal mb-10 text-justify  font-italic`}>{locales[locale].home.components.AboutIndustrySegment.description}</h3>
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-2 sm:grid-cols-6 grid-rows-2 gap-6 mt-20 h-auto md:h-[400px]"
            >
                <motion.div
                    key={1}
                    variants={item}
                    className={`col-span-3 row-span-2 bg-cover  bg-center  min-h-70 md:min-h-0 ${cardStyles.card}`}
                >
                    <Image
                        src="/assets/images/stock/solar-park-7.jpg"
                        className={` ${cardStyles.cardImage}`}
                        alt={ locale == "sr" ? "Solarni parkovi" : "Solar Parks" }
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={` bg-black bg-opacity-30 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                        <h3 className="text-xl font-semibold text-white mb-3 mt-7 tracking-wider">{locales[locale].home.components.AboutIndustrySegment.solar_parks.title}</h3>
                        <span className="text-lg text-justify text-white">{locales[locale].home.components.AboutIndustrySegment.solar_parks.text}</span>
                        <div className="mt-4 flex justify-center">
                            <a 
                                className={`bg-[var(--color-secondary)] text-white text-xs md:text-sm px-7 py-3`}
                                href="/solar-energy/industrial-solar-parks"
                            >
                                { locale == "sr" ? "Saznaj više" : "Learn more" }
                            </a>
                        </div>
                    </div>
                </motion.div>

                
                <motion.div
                    key={2}
                    variants={item}
                    className={`col-span-3 row-span-2 bg-cover  bg-center min-h-70 md:min-h-0 ${cardStyles.card}`}
                >
                    <Image
                        src="/assets/images/stock/solar-roof-5.jpg"
                        className={` ${cardStyles.cardImage}`}
                        alt={ locale == "sr" ? "Solarni krovovi" : "Solar Roofs" }
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={` bg-black bg-opacity-30 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                        <h3 className="text-xl font-semibold text-white mb-3 mt-7 tracking-wider">{locales[locale].home.components.AboutIndustrySegment.solar_roofs.title}</h3>
                        <span className="text-lg text-justify text-white">{locales[locale].home.components.AboutIndustrySegment.solar_roofs.text}</span>
                        <div className="mt-4 flex justify-center">
                            <a 
                                className={`bg-[var(--color-secondary)] text-white text-xs md:text-sm px-7 py-3 `}
                                href="/solar-energy/commercial-solar-roofs"
                            >
                                { locale == "sr" ? "Saznaj više" : "Learn more" }
                            </a>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            
        </div>
    );
}