import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import SalesEquipment from "./components/Equipment";
import EndMessageSegment from "./components/EndMessageSegment";



export default function SalesOfEquipment() {

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
                    <h1 className="hugo-h1">{ locales[locale].sales_of_equipment.h1 }</h1>
                    <h2 className="hugo-h2">
                        {
                            findCompanyTitleAndMakeLink(locales[locale].sales_of_equipment.h2)
                        }
                    </h2>
                </motion.div>

                <motion.div
                    key={2}
                    variants={item}
                    className="max-w-7xl mx-auto grid grid-cols-1 gap-10 mb-10 px-2 md:px-0"
                > 
                    <p className="hugo-p-justify">
                        { findCompanyTitleAndMakeLink(locales[locale].sales_of_equipment.p1) }
                    </p>
                </motion.div>


                <SalesEquipment/>

                <EndMessageSegment/>
            </motion.div>

           

        </>
    )
}