import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";

export default function EndMessageSegment() {

    let { locale } = useRouter();
    let locales = useLocales();

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
            className="text-[var(--color)] py-10 md:py-15 "
        >
            <motion.div
                key={0}
                variants={item}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">{locales[locale].our_services.EndMessageSegment.title}</h2>
            </motion.div>

            <motion.div
                key={1}
                variants={item}
            >
                <p className="max-w-3xl mx-auto text-center text-lg md:text-xl">{ findCompanyTitleAndMakeLink(locales[locale].our_services.EndMessageSegment.text) }</p>
            </motion.div>

            {/* center align <a> tag button, secondary color, white text, sharp corners, large - contact us */}
            <motion.div
                key={2}
                variants={item}
                className="text-center"
            >
                <a href="/contact" className="inline-block bg-[var(--color-secondary)] text-white py-3 px-6  text-lg font-semibold mt-10 hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 ease">
                    {locales[locale].our_services.EndMessageSegment.button_text}
                </a>
            </motion.div>
        </motion.div>
    )
}

const container = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};