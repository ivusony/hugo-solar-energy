import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import CentralServiceElemetsSegment from "./components/CentralServiceElemetsSegment";
import EndMessageSegment from "./components/EndMessageSegment";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";

export default function OurServices() {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <>
            <div className="h-[100px] bg-[var(--color)]"></div>
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                className="max-w-7xl mx-auto"
            >
                <div className="pb-[var(--segment-padding-bottom)] px-2 md:px-0">
                    <Breadcrumb/>

                    <motion.div
                        key={1}
                        variants={item}
                        className="max-w-7xl mx-auto text-center"
                    > 
                        <div className="text-3xl md:text-4xl font-bold mt-5 mb-10  flex justify-center">
                            <h1 className="bg-white p-1">{ locales[locale].our_services.h1 }</h1>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-normal mb-10  font-italic text-center">
                            {
                                locales[locale].our_services.h2
                            }
                        </h2>
                        <h3 className="text-lg md:text-2xl font-normal mb-10 text-justify md:text-center  font-italic">
                            {
                                locales[locale].our_services.h3
                            }
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                            <p className="mb-5 text-justify  text-xl">
                                { locales[locale].our_services.p1 }
                            </p>
                            <p className="mb-5 text-justify  text-xl ">
                                { locales[locale].our_services.p2 }
                            </p>
                           
                        </div>
                    </motion.div>

                    <CentralServiceElemetsSegment />

                    <EndMessageSegment />
                    
                </div>
            </motion.div>
        </>

    );
}