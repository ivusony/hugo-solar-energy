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
import InterviewIllustration from "./components/InterviewIllustration";

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
                className="bg-[var(--background)] py-5 mx-auto max-w-7xl px-2 md:px-0"
            >
                <Breadcrumb/>

                <motion.div
                    key={1}
                    variants={item}
                    className="max-w-7xl mx-auto text-center px-2 md:px-0"
                > 
                    <h1 className="hugo-h1">{ locales[locale].our_services.h1 }</h1>
                    <h2 className="hugo-h2">
                        {
                            locales[locale].our_services.h2
                        }
                    </h2>
                    <h3 className="hugo-h3">
                        {
                            locales[locale].our_services.h3
                        }
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <p className="hugo-p-justify">
                            { locales[locale].our_services.p1 }
                        </p>
                        <p className="hugo-p-justify">
                            { locales[locale].our_services.p2 }
                        </p>
                        
                    </div>
                </motion.div>

                <CentralServiceElemetsSegment />

                <InterviewIllustration />

                <EndMessageSegment />
                    
            </motion.div>
        </>

    );
}