import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Image from "next/image";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";


export default function Operation() {
    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return(
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="max-w-7xl mx-auto mt-10 mb-5"
        >
            <motion.div
                key={1}
                variants={item}
                className="relative w-full h-[200px] md:h-[200px] lg:h-[300px] border-t-8  border-[var(--color-secondary)]"
            >
                <Image
                    src="/assets/images/team/474743537_917069923950149_5326844373437376252_n.jpg"
                    alt="Solar Panels"
                    fill
                    className="object-cover object-center w-full mb-10"
                    priority
                />
                <div className="relative w-full h-full flex justify-center items-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-white p-2 tracking-wider bg-[var(--color)]/40">
                        { locales[locale].support_and_maintenance.operation.h3 }
                    </h3>
                </div>
            </motion.div>

            <motion.div
                key={1}
                variants={item}
                className="mt-10 px-2 md:px-0"
            >
                <p className="hugo-p-justify">
                    { findCompanyTitleAndMakeLink(locales[locale].support_and_maintenance.operation.h4) }
                </p>
            </motion.div>

            <motion.div
                    key={2}
                    variants={item}
                    className="relative w-full h-[200px] md:h-[200px] lg:h-[300px] border-t-8  border-[var(--color-secondary)]"
                >
                    <Image
                        src="/assets/images/team/473785699_911935471130261_7930744259815660623_n.jpg"
                        alt="Solar Panels"
                        fill
                        className="object-cover object-center w-full mb-10"
                        priority
                    />
                </motion.div>

            <div className="bg-[var(--color-foreground)] p-4 mt-15">
                <motion.div
                    key={3}
                    variants={item}
                    className="px-2 md:px-0 "
                >
                        <h4 className="hugo-h3">{ locales[locale].support_and_maintenance.operation.list_title }</h4>
                </motion.div>
                {
                    locales[locale].support_and_maintenance.operation.list.map((listItem, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="pl-4 mb-2 border-l-4 border-[var(--color-secondary)] text-lg ml-2 md:ml-0"
                        >
                            { `-${listItem}` }
                        </motion.div>
                    ))
                }
            </div>
        

        </motion.div>
    )
}