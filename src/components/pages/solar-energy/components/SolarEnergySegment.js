import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Breadcrumb from "@components/shared/Breadcrumb";

export default function SolarEnergySegment() {

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


    // if offset top is greater than page heiight, change #solar-energy opacity to 1, else to 0
    function handleScroll() {
        const h2 = document.querySelector('#solar-energy-header');
        if (window.scrollY > window.innerHeight - 150) {
            h2.classList.remove('opacity-0');
            h2.classList.add('opacity-100');
        } else {
            h2.classList.remove('opacity-100');
            h2.classList.add('opacity-0');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

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
            className="bg-[var(--background)] py-5 mx-auto max-w-7xl px-2 md:px-0"
        >   
            <Breadcrumb />

            <motion.div
                key={1}
                variants={item}
                className="max-w-7xl mx-auto"
            > 
                <h2 id="solar-energy-header" className="hugo-h1 opacity-0 transition-opacity duration-500">{ locales[locale].solar_energy.components.solar_energy.h2 }</h2>
                <h3 className="hugo-h2">
                    {
                        locales[locale].solar_energy.components.solar_energy.h3
                    }
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <p className="hugo-p-justify">
                        { locales[locale].solar_energy.components.solar_energy.p1 }
                    </p>
                    <p className="hugo-p-justify">
                        { locales[locale].solar_energy.components.solar_energy.p2 }
                    </p>
                    <p className="hugo-p-justify">
                        { locales[locale].solar_energy.components.solar_energy.p3 }
                    </p>
                    <p className="hugo-p-justify">
                        { locales[locale].solar_energy.components.solar_energy.p4 }
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}