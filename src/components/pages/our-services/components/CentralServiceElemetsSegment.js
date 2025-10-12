import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

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

export default function CentralServiceElemetsSegment() {

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
            className="bg-[#EEF1F3] py-10 md:py-15 "
        >
            <motion.div
                key={0}
                variants={item}
            >
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">{locales[locale].our_services.CentralServiceElemetsSegment.title}</h2>
            </motion.div>

            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-[var(--segment-padding-left)] pr-[var(--segment-padding-right)]">
                <motion.div
                    key={1}
                    variants={item}
                >
                    <a href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/project-development` } className="h-full bg-white p-5 rounded-lg shadow transform scale-100 transition-transform transition-shadow duration-300 ease hover:shadow-lg hover:scale-105 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">{locales[locale].our_services.CentralServiceElemetsSegment.project_development.title}</h3>
                            <p className="text-gray-600">{locales[locale].our_services.CentralServiceElemetsSegment.project_development.text}</p>
                        </div>
                        <div className="mt-4 text-[var(--color-secondary)] font-semibold">{ locale == "sr" ? "Saznaj više" : "Learn More" } &rarr;</div>
                    </a>
                </motion.div>
                <motion.div
                    key={2}
                    variants={item}
                >
                    <a href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/procurement-and-construction` } className="h-full bg-white p-5 rounded-lg shadow transform scale-100 transition-transform transition-shadow duration-300 ease hover:shadow-lg hover:scale-105 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">{locales[locale].our_services.CentralServiceElemetsSegment.procurement_and_construction.title}</h3>
                            <p className="text-gray-600">{locales[locale].our_services.CentralServiceElemetsSegment.procurement_and_construction.text}</p>
                        </div>
                        <div className="mt-4 text-[var(--color-secondary)] font-semibold">{ locale == "sr" ? "Saznaj više" : "Learn More" } &rarr;</div>
                    </a>
                </motion.div>
                <motion.div
                    key={3}
                    variants={item}
                >
                    <a href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/operation-and-maintenance` } className="h-full bg-white p-5 rounded-lg shadow transform scale-100 transition-transform transition-shadow duration-300 ease hover:shadow-lg hover:scale-105 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">{locales[locale].our_services.CentralServiceElemetsSegment.operation_and_maintenance.title}</h3>
                            <p className="text-gray-600">{locales[locale].our_services.CentralServiceElemetsSegment.operation_and_maintenance.text}</p>
                        </div>
                        <div className="mt-4 text-[var(--color-secondary)] font-semibold">{ locale == "sr" ? "Saznaj više" : "Learn More" } &rarr;</div>
                    </a>
                </motion.div>
                <motion.div
                    key={3}
                    variants={item}
                >
                    <a href={ `${ locale == "sr" ? "" : "/" + locale }/our-services/sales-of-equipment` } className="h-full bg-white p-5 rounded-lg shadow transform scale-100 transition-transform transition-shadow duration-300 ease hover:shadow-lg hover:scale-105 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">{locales[locale].our_services.CentralServiceElemetsSegment.sales_of_equipment.title}</h3>
                            <p className="text-gray-600">{locales[locale].our_services.CentralServiceElemetsSegment.sales_of_equipment.text}</p>
                        </div>
                        <div className="mt-4 text-[var(--color-secondary)] font-semibold">{ locale == "sr" ? "Saznaj više" : "Learn More" } &rarr;</div>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}