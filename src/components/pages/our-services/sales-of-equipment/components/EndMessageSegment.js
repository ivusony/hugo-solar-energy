import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import Link from "next/link";

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
            className="text-[var(--color)] bg-[var(--color-foreground)] py-10 md:py-15 px-2 "
        >
            <motion.div
                key={0}
                variants={item}
            >
                <h2 className="hugo-h2">{locales[locale].sales_of_equipment.EndMessageSegment.title}</h2>
            </motion.div>

            <motion.div
                key={1}
                variants={item}
            >
                <p className="max-w-3xl mx-auto hugo-p-justify">{ findCompanyTitleAndMakeLink(locales[locale].sales_of_equipment.EndMessageSegment.text) }</p>
            </motion.div>

            {/* center align <a> tag button, secondary color, white text, sharp corners, large - contact us */}
            <motion.div
                key={2}
                variants={item}
                className="text-center"
            >
                <Link
                    href={ `${locale == "sr" ? "" : "/en"}/contact-us` } 
                    className=" w-full sm:w-[300px] inline-block bg-[var(--color-secondary)] text-white py-3 px-6  text-lg font-semibold mt-10 hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 ease"
                >
                    {locales[locale].sales_of_equipment.EndMessageSegment.button_text}
                </Link>
            </motion.div>
        </motion.div>
    )
}
