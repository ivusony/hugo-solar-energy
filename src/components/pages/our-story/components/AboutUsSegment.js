
import { useLocales } from '@components/hooks/useLocales';
import { useRouter } from 'next/router'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Breadcrumb from '@components/shared/Breadcrumb';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";

export default function AboutUsSegment() {
    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });



    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);


    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className={`bg-[var(--background)] mx-auto max-w-7xl pt-10 px-2 md:px-0`}
        >

            <Breadcrumb />

            <motion.div
                key={0}
                variants={item}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 mt-10">{ locales[locale].our_story.components.AboutUsSegment.h1 }</h1>
            </motion.div>
            <motion.div
                key={1}
                variants={item}
            >
                <h2 className="text-xl md:text-3xl font-semibold mb-10 text-justify md:text-center">
                    { locales[locale].our_story.components.AboutUsSegment.h2 }
                </h2>
            </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        key={2}
                        variants={item}
                    >
                        <p className="mb-5 text-justify  text-xl ">
                            { locales[locale].our_story.components.AboutUsSegment.p1 }
                        </p>
                    </motion.div>
                    <motion.div
                        key={3}
                        variants={item}
                    >
                        <p className="mb-5 text-justify  text-xl ">
                            { locales[locale].our_story.components.AboutUsSegment.p2 }
                        </p>
                    </motion.div>
                    <motion.div
                        key={4}
                        variants={item}
                    >
                        <p className="mb-5 text-justify  text-xl ">
                            { locales[locale].our_story.components.AboutUsSegment.p3 }
                        </p>
                    </motion.div>
                    <motion.div
                        key={5}
                        variants={item}
                    >
                        <p className="mb-5 text-justify  text-xl ">
                            { locales[locale].our_story.components.AboutUsSegment.p4 }
                        </p>
                    </motion.div>
                </div>
            
        </motion.div>
    )
}