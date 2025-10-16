import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import Operation from "./components/Operation";
import EndMessageSegment from "./components/EndMessageSegment";
import Image from "next/image";

export default function SupportAndMaintenance() {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return(
        <>
            {/* this div gives background to navbar */}
            <div className="h-[100px] bg-[var(--color)]"></div>
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                className="bg-[var(--background)] py-5 mx-auto max-w-7xl px-2 md:px-0"
            >
                <Breadcrumb/>

                <motion.div
                    key={1}
                    variants={item}
                    className="max-w-7xl mx-auto text-center px-2 md:px-0"
                    id="header"
                > 
                    <h1 className="hugo-h1">{ locales[locale].support_and_maintenance.h1 }</h1>
                    <h2 className="hugo-h2">
                        {
                            findCompanyTitleAndMakeLink(locales[locale].support_and_maintenance.h2)
                        }
                    </h2>
                </motion.div>


                <Operation/>

                <EndMessageSegment/>

            </motion.div>


        </>
    )
}