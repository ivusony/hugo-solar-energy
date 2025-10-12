import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";
import Procurement from "./components/Procurement";
import Contstruction from "./components/Contstruction";

export default function ProcurementAndConstruction() {

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
                className="max-w-7xl mx-auto px-2 md:px-0"
            >
                <div className="pb-[var(--segment-padding-bottom)]">
                    <Breadcrumb/>
                </div>


                <motion.div
                    key={1}
                    variants={item}
                    className="max-w-7xl mx-auto text-center"
                    id="header"
                > 
                    <div className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center">
                        <h1 className="bg-white p-1">{ locales[locale].procurement_and_construction.h1 }</h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-normal mb-10  font-italic text-justify md:text-center">
                        {
                            locales[locale].procurement_and_construction.h2
                        }
                    </h2>
                </motion.div>

                <motion.div
                    key={2}
                    variants={item}
                    className="max-w-7xl mx-auto grid grid-cols-1 gap-10 mb-10"
                > 
                    <h3 className="mb-5 text-justify md:text-center text-xl ">
                        { locales[locale].procurement_and_construction.h3 }
                    </h3>
                </motion.div>

            </motion.div>

            <Procurement/>

            <Contstruction/>
        </>
    )
}