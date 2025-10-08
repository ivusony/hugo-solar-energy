import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function SolarEnergySegment() {

    let { locale } = useRouter();
    let locales = useLocales();

      const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    const container = {
        hidden: {},
        visible: {
        transition: {
            staggerChildren: 0.25,
        },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
    };

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            id="solar-industry-segment"
            className="pl-[var(--segment-padding-left)] pr-[var(--segment-padding-right)] py-10 "
        >   
            <nav className="flex text-sm text-gray-500 " aria-label="Breadcrumb">
                <div className="bg-white pt-2 pb-2">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li>
                            <a href="/" class="inline-flex items-center text-gray-700 hover:text-[var(--color-secondary)] font-medium ">
                                hugosolarenergy.rs
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <span class="mx-2 text-gray-400">›</span>
                                <a href="/nasa-prica" class="text-gray-700 hover:text-[var(--color-secondary)] font-medium">
                                    Solarna energija
                                </a>
                            </div>
                        </li>
                    </ol>
                </div>
            </nav>

            <motion.div
                key={1}
                variants={item}
                className="max-w-7xl mx-auto text-center"
            > 
                <div className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center">
                    <h2 className="bg-white p-1">{ locales[locale].solar_energy.components.solar_energy.h2 }</h2>
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-10 text-justify  font-italic bg-white">
                    {
                        locales[locale].solar_energy.components.solar_energy.h3
                    }
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].solar_energy.components.solar_energy.p1 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].solar_energy.components.solar_energy.p2 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].solar_energy.components.solar_energy.p3 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].solar_energy.components.solar_energy.p4 }
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}