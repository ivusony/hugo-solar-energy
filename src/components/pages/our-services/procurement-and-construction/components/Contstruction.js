import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Image from "next/image";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import Link from "next/link";


export default function Contstruction() {
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
            className="max-w-7xl mx-auto mt-10"
        >
            <motion.div
                key={1}
                variants={item}
                className="relative w-full h-[200px] md:h-[200px] lg:h-[300px] border-t-8  border-[var(--color-secondary)]"
            >
                <Image
                    src="/assets/images/stock/solar-construction-3.jpg"
                    alt="Solar Panels"
                    fill
                    className="object-cover object-center w-full mb-10"
                    priority
                />
                <div className="relative w-full h-full flex justify-center items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white p-2 tracking-wider bg-[var(--color)]/40">
                        { locales[locale].procurement_and_construction.construction.h2 }
                    </h2>
                </div>
            </motion.div>

            <motion.div
                key={1}
                variants={item}
                className="mt-10 px-2 md:px-0"
            >
                <h3 className="hugo-h2">
                    { locales[locale].procurement_and_construction.construction.h3 }
                </h3>
            </motion.div>

            <motion.div
                key={2}
                variants={item}
                className="px-2 md:px-0"
            >
                <p className="hugo-p-justify">
                    { findCompanyTitleAndMakeLink(locales[locale].procurement_and_construction.construction.p1) }
                </p>
            </motion.div>

            <motion.div
                key={3}
                variants={item}
                className="px-2 md:px-0"
            >
                <p className="hugo-p-justify">
                    { findCompanyTitleAndMakeLink(locales[locale].procurement_and_construction.construction.p2) }
                </p>
            </motion.div>

            <div className="bg-[var(--color-foreground)] p-4 mt-15">
                <motion.div
                    key={4}
                    variants={item}
                    className="px-2 md:px-0"
                >
                    <h4 className="hugo-h3">{ locales[locale].procurement_and_construction.construction.h4 }</h4>
                </motion.div>
                {
                    locales[locale].procurement_and_construction.construction.list.map((listItem, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="pl-4 mb-2 border-l-4 border-[var(--color-secondary)] text-lg ml-2 md:ml-0"
                        >
                            { `-${listItem}` }
                        </motion.div>
                    ))
                }
            </div>

        </motion.div>
    )
}