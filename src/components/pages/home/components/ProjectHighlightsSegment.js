
import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/pages/home_partials/ProjectHighlights.module.css";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import cardStyles from "@styles/components/shared/Card.module.css";
import { useEffect } from "react";
import Image from "next/image";

export default function ProjectHighlightsSegment() {

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

    return(
        <div className={styles.ProjectHighlightsSegment}>
                <h2 className={`sm:text-xl md:text-4xl font-bold text-center sm:mb-3 md:mb-10`}>{locales[locale].home.components.ProjectHighlightsSegment.title}</h2>
                <p className={`sm:text-xl md:text-2xl text-center leading-normal `}>{locales[locale].home.components.ProjectHighlightsSegment.text}</p>
               

                <motion.div
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-6 grid-rows-9 md:grid-cols-6 md:grid-rows-3 mt-20 gap-3 h-[600px]"
                >
                    <motion.div
                        key={1}
                        variants={item}
                        className={` col-span-3 row-span-3 md:col-span-2 md:row-span-2 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-5dba30677f0bafa95fb5a0413b4f28d3-V.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 1 - instalacija na krovu u Kladovu, Srbija" : "Project showcase 1 - roof installation in Kladovo, Serbia" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih na krovu industrijske zgrade u Kladovu, Srbija" : "Photograph of solar panels installed on the roof of an industrial building in Kladovo, Serbia" }
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                {
                                    locale == "sr" ? "SRBIJA, KLADOVO - 1MW" : "SERBIA, KLADOVO - 1MW"
                                }
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        key={2}
                        variants={item}
                        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-1 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-8925ee388d02f60ebf3ba2efb9811385-V-1.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 2 - instalacija na krovu u Bečeju, Srbija" : "Project showcase 2 - roof installation in Bečej, Serbia" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih na krovu industrijske zgrade u Bečeju, Srbija" : "Photograph of solar panels installed on the roof of an industrial building in Bečej, Serbia" }
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                { locale == "sr" ? "SRBIJA, BEČEJ - 1MW" : "SERBIA, BEČEJ - 1MW" }
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        key={3}
                        variants={item}
                        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-2 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-312525d0582517b2d969a2655a793a6d-V.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 3 - instalacija na krovu u Krčedinu, Srbija" : "Project showcase 3 - roof installation in Krčedin, Serbia" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih na krovu industrijske zgrade u Krčedinu, Srbija" : "Photograph of solar panels installed on the roof of an industrial building in Krčedin, Serbia" }
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                { locale == "sr" ? "SRBIJA, KRČEDIN - 570KW" : "SERBIA, KRČEDIN - 570KW" }
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        key={4}
                        variants={item}
                        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-2 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-a0c1f75d523aa9b287c37b8c256df636-V.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 4 - instalacija na krovu u Beogradu, Srbija" : "Project showcase 4 - roof installation in Belgrade, Serbia" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih na krovu industrijske zgrade u Beogradu, Srbija" : "Photograph of solar panels installed on the roof of an industrial building in Belgrade, Serbia" }
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                { locale == "sr" ? "SRBIJA, BEOGRAD - 840KW" : "SERBIA, BELGRADE - 840KW" }
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        key={5}
                        variants={item}
                        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-1 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-ea26e37a48e28eba3ba73ce58872a1b5-V.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 5 - instalacija solarnog parka u Grudama, Bosna i Hercegovina" : "Project showcase 5 - solar park installation in Grude, Bosnia and Herzegovina" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih u solarnom parku u Grudama, Bosna i Hercegovina" : "Photograph of solar panels installed in a solar park in Grude, Bosnia and Herzegovina" }
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                { locale == "sr" ? "BOSNA I HERCEGOVINA, GRUDE - 40MW" : "BOSNIA AND HERZEGOVINA, GRUDE - 40MW" }
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        key={6}
                        variants={item}
                        className={`col-span-3 row-span-3 md:col-span-2 md:row-span-1 bg-cover bg-center rounded-2xl ${cardStyles.card}`}
                    >
                        <Image
                            src="/assets/images/projects/IMG-891695925b7190d0815bf1cfc7cfdb0c-V.jpg"
                            className={` ${cardStyles.cardImage}`}
                            alt={ locale == "sr" ? "Prikaz projekta 6 - instalacija solarnog parka u Inđiji, Srbija" : "Project showcase 6 - solar park installation in Inđija, Serbia" }
                            aria-description={ locale == "sr" ? "Fotografija solarnih panela instaliranih u solarnom parku u Inđiji, Srbija" : "Photograph of solar panels installed in a solar park in Inđija, Serbia" }
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className={` bg-black bg-opacity-10 p-4 text-center rounded-b-2xl ${cardStyles.cardOverlay}`}>
                            <p className="text-white absolute bottom-5">
                                { locale == "sr" ? "SRBIJA, INĐIJA - 7.2MW" : "SERBIA, INĐIJA - 7.2MW" }
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

              

        </div>
    )
}