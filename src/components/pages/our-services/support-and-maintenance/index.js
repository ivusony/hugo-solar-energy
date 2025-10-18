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
import Link from "next/link";

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

                <motion.div
                    key={2}
                    variants={item}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl mx-auto mt-10 text-center"
                >
                    <div className="grid-col-1 flex justify-end">
                        <Link
                            href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/procurement-and-construction` } 
                            className="relative text-center w-full sm:w-[300px] inline-block bg-[var(--color)] text-white py-3 px-6 text-lg font-semibold  hover:bg-[var(--color-darker)] transition-colors duration-300 ease"
                        >
                            {/* white left arrow svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={20} height={20}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l-4 4m0 0l4 4m-4-4h18" />
                            </svg>
                            {
                                locale == "sr" ? "Nabavka i izgradnja" : "Procurement & Construction"
                            }
                        
                        </Link>
                    </div>
                    <div className="grid-col-1 flex justify-start">
                        <Link
                            href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/sales-of-equipment` }
                            className="relative text-center w-full sm:w-[300px] inline-block bg-[var(--color)] text-white py-3 px-6 text-lg font-semibold  hover:bg-[var(--color-darker)] transition-colors duration-300 ease"
                        >
                            {
                                locale == "sr" ? "Prodaja opreme" : "Sales of Equipment"
                            }
                            {/* white right arrow svg */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2 absolute right-4 top-1/2 transform -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width={20} height={20}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                <EndMessageSegment/>

            </motion.div>


        </>
    )
}