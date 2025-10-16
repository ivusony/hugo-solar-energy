import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";


function IndustryBoxes(){
    let { locale } = useRouter();
    let locales = useLocales();
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

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
            className={` mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4  mt-10 mb-10 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[180px]`}
        >
            <motion.div
                key={1}
                variants={item}
                className="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden  group relative cursor-pointer"
            > 
                <Link
                    href="/solar-energy/commercial-solar-roofs"
                >
                    <h3 className="absolute text-white font-bold top-4 left-4 z-10 text-xl md:text-xl drop-shadow-lg  px-3 py-1 rounded-md tracking-wider">{ locales[locale].solar_energy.components.solar_industry.solar_roofs.h3 }</h3>
                    <Image src="/assets/images/stock/solar-roof-3.jpg" fill alt="Commercial solar roof" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-secondary)]/60 transition-all duration-500"></div>
                </Link>
            </motion.div>

            <motion.div
                key={2}
                variants={item}
                className="col-span-1 row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden  group relative cursor-pointer "
            >
                <Link
                    href="/solar-energy/industrial-solar-parks"
                >
                    <h3 className="absolute text-white font-bold top-4 left-4 z-10 text-xl md:text-xl drop-shadow-lg  px-3 py-1 rounded-md tracking-wider">{ locales[locale].solar_energy.components.solar_industry.solar_parks.h3 }</h3>
                    <Image src="/assets/images/stock/solar-park-6.jpg" fill alt="Industrial solar park" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[var(--color-secondary)]/60 transition-all duration-500"></div>
                </Link>
            </motion.div>

        </motion.div>
    );
}

export default function SolarIndustrySegment() {

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
            className="bg-[var(--background)] py-10 "
        >   
            <motion.div
                key={1}
                variants={item}
                className="max-w-7xl mx-auto text-center"
            > 
                <h2 className="hugo-h2">{ locales[locale].solar_energy.components.solar_industry.h2 }</h2>
            </motion.div>

            <IndustryBoxes />
        </motion.div>
    );
}