import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import ProjectDevelopmentSteps from "./components/ProjectDevelopmentSteps";
import AdvantagesOfSolarParks from "./components/AdvantagesOfSolarParks";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import Breadcrumb from "@components/shared/Breadcrumb";

export default function ProjectDevelopment() {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return(
        <>
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
                    className="max-w-7xl mx-auto text-center"
                    id="header"
                > 
                    <div className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center">
                        <h1 className="bg-white p-1">{ locales[locale].project_development.h1 }</h1>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-normal mb-10  font-italic text-center">
                        {
                            locales[locale].project_development.h2
                        }
                    </h2>
                </motion.div>

                <motion.div
                    key={2}
                    variants={item}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
                > 
                    <p className="mb-5 text-justify  text-xl ">
                        { locales[locale].project_development.p1 }
                    </p>
                    <p className="mb-5 text-justify  text-xl ">
                        { findCompanyTitleAndMakeLink(locales[locale].project_development.p2) }
                    </p>
                </motion.div>


                <ProjectDevelopmentSteps />

                <AdvantagesOfSolarParks />
            </motion.div>
        </>
    )
}