import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";


export default function ProjectDevelopmentSteps() {
    let {locale} = useRouter();
    let locales = useLocales ();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    let [ showConnectingLines, setShowConnectingLines ] = useState(false);

    useEffect(() => {
        if (inView) controls.start("visible");
        setTimeout(() => { setShowConnectingLines(true) }, 2000);
    }, [controls, inView]);

    return(
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="relative w-full mx-auto px-4 py-20 bg-[#EEF1F3]"
        >
            <div className="grid lg:grid-cols-4 gap-6 relative items-center"> 
                {/* STEP 1 */}
                <motion.div
                    key={1}
                    variants={item}
                    className="relative flex flex-col items-center text-center h-[230px] w-full"
                > 
                    <div className="bg-white p-6 rounded-lg shadow-md w-full h-full transform transition-transform duration-300 hover:scale-105 z-10 flex flex-col items-center">
                        
                        {/* Icon */}
                        <svg className="w-8 h-8 mb-3" fill="none" stroke="var(--color-secondary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
                        </svg>

                        <h3 className="font-semibold mb-2 text-2xl">{ locales[locale].project_development.DevelopmentStepsSegment.steps["1"].title }</h3>
                        <p className="absolute bottom-2 p-5 text-lg text-[var(--color)] text-justify">
                            { locales[locale].project_development.DevelopmentStepsSegment.steps["1"].description }
                        </p>
                    </div>

                    {/* Right line */}
                    <div className={`hidden lg:block ${showConnectingLines ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 absolute top-1/2 right-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0`}></div>
                </motion.div>

                {/* STEP 2 */}
                <motion.div
                    key={2}
                    variants={item}
                    className="relative flex flex-col items-center text-center h-[230px] w-full"
                >
                    <div className="bg-white p-6 rounded-lg shadow-md w-full h-full transform transition-transform duration-300 hover:scale-105 z-10 flex flex-col items-center">
                        
                        <svg className="w-8 h-8 mb-3" fill="none" stroke="var(--color-secondary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 20l9-5-9-5-9 5 9 5zm0-10l9-5-9-5-9 5 9 5z" />
                        </svg>

                        <h3 className="font-semibold mb-2 text-2xl">{ locales[locale].project_development.DevelopmentStepsSegment.steps["2"].title }</h3>
                        <p className="absolute bottom-2 p-5 text-lg text-[var(--color)] text-justify">
                            { locales[locale].project_development.DevelopmentStepsSegment.steps["2"].description }
                        </p>
                    </div>

                    {/* Left line */}
                    {/* <div className="hidden lg:block absolute top-1/2 left-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0"></div> */}
                    {/* Right line */}
                    <div className={`hidden lg:block ${showConnectingLines ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 absolute top-1/2 right-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0`}></div>
                </motion.div>

                {/* STEP 3 */}
                <motion.div
                    key={3}
                    variants={item}
                    className="relative flex flex-col items-center text-center h-[230px] w-full"
                >
                    <div className="bg-white p-6 rounded-lg shadow-md w-full h-full transform transition-transform duration-300 hover:scale-105 z-10 flex flex-col items-center">
                        
                        <svg className="w-8 h-8 mb-3" fill="none" stroke="var(--color-secondary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                        <path d="M12 14c-4.418 0-8 2.239-8 5v2h16v-2c0-2.761-3.582-5-8-5z" />
                        </svg>

                        <h3 className="font-semibold mb-2 text-2xl">{ locales[locale].project_development.DevelopmentStepsSegment.steps["3"].title }</h3>
                        <p className="absolute bottom-2 p-5 text-lg text-[var(--color)] text-justify">
                            { locales[locale].project_development.DevelopmentStepsSegment.steps["3"].description }
                        </p>
                    </div>

                    {/* Left line */}
                    {/* <div className="hidden lg:block absolute top-1/2 left-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0"></div> */}
                    {/* Right line */}
                    <div className={`hidden lg:block ${showConnectingLines ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 absolute top-1/2 right-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0`}></div>
                </motion.div>

                {/* STEP 4 */}
                <motion.div
                    key={4}
                    variants={item}
                    className="relative flex flex-col items-center text-center h-[230px] w-full"
                >
                    <div className="bg-white p-6 rounded-lg shadow-md w-full h-full transform transition-transform duration-300 hover:scale-105 z-10 flex flex-col items-center">
                        
                        <svg className="w-8 h-8 mb-3" fill="none" stroke="var(--color-secondary)" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>

                        <h3 className="font-semibold mb-2 text-2xl">{ locales[locale].project_development.DevelopmentStepsSegment.steps["4"].title }</h3>
                        <p className="absolute bottom-2 p-5 text-lg text-[var(--color)] text-justify">
                            { locales[locale].project_development.DevelopmentStepsSegment.steps["4"].description }
                        </p>
                    </div>

                    {/* Left line */}
                    <div className={`hidden lg:block ${showConnectingLines ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 absolute top-1/2 left-[-50%] w-[100%] h-1 bg-[var(--color-secondary)] z-0`}></div>
                </motion.div>
            </div>
        </motion.div>
    )
}