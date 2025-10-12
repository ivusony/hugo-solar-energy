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
                className="max-w-7xl mx-auto"
            >
                <div className="pb-[var(--segment-padding-bottom)]">
                    <Breadcrumb/>
                </div>


                <motion.div
                    key={1}
                    variants={item}
                    className="max-w-7xl mx-auto text-center px-2 md:px-0"
                    id="header"
                > 
                    <div className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center">
                        <h1 className="bg-white p-1">{ locales[locale].support_and_maintenance.h1 }</h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-normal mb-10  font-italic text-justify md:text-center">
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