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
            staggerChildren: 0.25,
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
        <div className={styles.AboutIndustrySegment}>
            <h2 className={`sm:text-xl md:text-4xl font-bold text-center sm:mb-3 md:mb-10`}>{locales[locale].home.components.AboutIndustrySegment.title}</h2>
            <p className={`sm:text-xl md:text-2xl text-center leading-normal `}>{locales[locale].home.components.AboutIndustrySegment.description}</p>
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
                    className={`col-span-3 row-span-2 bg-cover  bg-center rounded-2xl min-h-70 md:min-h-0 ${cardStyles.card}`}
                >
                    <Image
                        src="/assets/images/stock/solar-park-4.jpg"
                        className={` ${cardStyles.cardImage}`}
                        alt={ locale == "sr" ? "Solarni parkovi" : "Solar Parks" }
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={` bg-black bg-opacity-30 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                        <h3 className="text-2xl font-semibold text-white mb-7">{locales[locale].home.components.AboutIndustrySegment.solar_parks.title}</h3>
                        <span className="text-lg text-justify text-white">{locales[locale].home.components.AboutIndustrySegment.solar_parks.text}</span>
                    </div>
                </motion.div>

                
                <motion.div
                    key={2}
                    variants={item}
                    className={`col-span-3 row-span-2 bg-cover  bg-center rounded-2xl min-h-70 md:min-h-0 ${cardStyles.card}`}
                >
                    <Image
                        src="/assets/images/stock/solar-roof-2.jpg"
                        className={` ${cardStyles.cardImage}`}
                        alt={ locale == "sr" ? "Solarni krovovi" : "Solar Roofs" }
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className={` bg-black bg-opacity-30 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                        <h3 className="text-2xl font-semibold text-white mb-7">{locales[locale].home.components.AboutIndustrySegment.solar_roofs.title}</h3>
                        <span className="text-lg text-justify text-white">{locales[locale].home.components.AboutIndustrySegment.solar_roofs.text}</span>
                    </div>
                </motion.div>
            </motion.div>
            
        </div>
    );
}