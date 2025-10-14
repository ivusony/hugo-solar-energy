import { useLocales } from "@components/hooks/useLocales";
import SolarCarousel from "@components/shared/SolarCarousel";
import { useAnimation, motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import findCompanyTitleAndMakeLink from "@components/utils/findCompanyTitleAndMakeLink";
import Breadcrumb from "@components/shared/Breadcrumb";

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


const FAQItem = ({ key, question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    
    useEffect(() => {
        setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }, [isOpen]);

    return (
        <motion.div
            key={key}
            variants={item}
            className="border-b border-gray-300"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-gray-800 font-medium px-4 py-4 focus:outline-none"
            >
                <span className="text-xl text-[var(--color)]">{question}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 stroke-[var(--color-secondary)] ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: height }}
                className="overflow-hidden transition-all duration-500 px-4"
            >
                <p className="py-2 text-[var(--color)] text-justify">{findCompanyTitleAndMakeLink(answer)}</p>
            </div>
        </motion.div>
    );
};

// 
function FAQSolarRoofs() {
    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView ) controls.start("visible");
    }, [controls, inView]); 

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            id="solar-industry-segment"
            className="max-w-7xl mx-auto text-center mt-10  py-10 bg-white"
        >
            <h2 className="text-3xl font-bold mb-6 text-center"> { locales[locale].commercial_solar_roofs.FAQ.title }</h2>
            <div className="space-y-2">
                {locales[locale].commercial_solar_roofs.FAQ.accordion.map((item, idx) => (
                    <FAQItem 
                        key={idx} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
        </motion.div>
    );
}

function  WhySolarRoofs(){
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

    return(
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            id="solar-industry-segment"
            className="max-w-7xl mx-auto text-center mt-10 bg-[#EEF1F3] py-10"
        >
            <motion.div
                key={0}
                variants={item}
            > 
                <h2 className="text-2xl md:text-3xl font-bold mb-5">{ locales[locale].commercial_solar_roofs.why_solar_roofs.title}</h2>
            </motion.div>
            {/* two columns two rows stackable grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5">
                <motion.div
                    key={1}
                    variants={item}
                    className="text-xl bg-white p-5 rounded-lg shadow-md"
                > 
                    <div className="paragraph-icon mb-5 text-3xl text-[var(--color-secondary)] justify-start flex">
                        01
                    </div>
                    <p className="text-justify">{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.why_solar_roofs.p1) }</p>
                </motion.div>
                <motion.div
                    key={2}
                    variants={item}
                    className="text-xl bg-white p-5 rounded-lg shadow-md"
                >
                    <div className="paragraph-icon mb-5 text-3xl text-[var(--color-secondary)] justify-start flex">
                        02
                    </div>
                    <p className="text-justify">{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.why_solar_roofs.p2) }</p>
                </motion.div>
                <motion.div
                    key={3}
                    variants={item}
                    className="text-xl bg-white p-5 rounded-lg shadow-md"
                >
                    <div className="paragraph-icon mb-5 text-3xl text-[var(--color-secondary)] justify-start flex">
                        03
                    </div>
                    <p className="text-justify">{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.why_solar_roofs.p3) }</p>
                </motion.div>
                <motion.div
                    key={4}
                    variants={item}
                    className="text-xl bg-white p-5 rounded-lg shadow-md"
                >
                    <div className="paragraph-icon mb-5 text-3xl text-[var(--color-secondary)] justify-start flex">
                        04
                    </div>
                    <p className="text-justify">{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.why_solar_roofs.p4) }</p>
                </motion.div>
            </div>
        </motion.div>
    );
}


export default function CommercialSolarRoofs() {
    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

   

    useEffect(() => {
        if (inView ) controls.start("visible");
    }, [controls, inView]); 


    return(
        <div id="CommercialSolarRoofs" >
            <div className="pt-[100px] bg-[var(--color)]">
                <div className={` relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] `}>
                    <SolarCarousel 
                        images={[
                            {
                                url : "/assets/images/stock/solar-roof-1.jpg",
                                alt : locale == "sr" ? "Komercijalni solarni krov 1" : "Commercial Solar Roof 1"
                            },
                            {
                                url : "/assets/images/stock/solar-roof-2.jpg",
                                alt : locale == "sr" ? "Komercijalni solarni krov 2" : "Commercial Solar Roof 2"
                            },
                            {
                                url : "/assets/images/stock/solar-roof-3.jpg",
                                alt : locale == "sr" ? "Komercijalni solarni krov 3" : "Commercial Solar Roof 3"
                            },
                            {
                                url : "/assets/images/stock/solar-roof-4.jpg",
                                alt : locale == "sr" ? "Komercijalni solarni krov 4" : "Commercial Solar Roof 4"
                            }
                        ]}
                    />
                </div>
            </div>

            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                id="solar-industry-segment"
                className="mx-auto max-w-7xl py-5"
            >
                <div className="px-2 md:px-0">
                    <Breadcrumb />
                </div>
                
                {/* h1 & h2 */}
                <motion.div
                    key={1}
                    variants={item}
                    className="max-w-7xl mx-auto text-center px-2 md:px-0"
                > 
                    <div className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center">
                        <h1 className="bg-white p-1">{ locales[locale].commercial_solar_roofs.h1 }</h1>
                    </div>
                    <h2 className="text-xl md:text-2xl font-normal mb-10 text-justify  font-italic ">
                        {
                            locales[locale].commercial_solar_roofs.h2
                        }
                    </h2>
                </motion.div>

                {/* paragraph left and right */}
                <motion.div
                    key={2}
                    variants={item}
                    className="max-w-7xl mx-auto text-center px-2 md:px-0"
                > 

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <div className="mb-5 text-justify  text-xl">
                            <h3 className="font-bold mb-2">{ locales[locale].commercial_solar_roofs.p1.title }</h3>
                            <p>{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.p1.text) }</p>
                        </div>
                        <div className="mb-5 text-justify  text-xl">
                            <h3 className="font-bold mb-2">{ locales[locale].commercial_solar_roofs.p2.title }</h3>
                            <p>{ findCompanyTitleAndMakeLink(locales[locale].commercial_solar_roofs.p2.text) }</p>
                        </div>
                    </div>
                </motion.div>
                
                <WhySolarRoofs />


                <FAQSolarRoofs />

                 {/* contact us button */}
                <motion.div
                    key={3}
                    variants={item}
                    className="max-w-7xl mx-auto text-center my-10"
                >
                    <p
                        className="max-w-7xl mx-auto text-center text-lg md:text-xl"
                    >
                        { locales[locale].commercial_solar_roofs.contact_button }
                    </p>
                    <a 
                        href={ `${locale == "sr" ? "" : "/en"}/contact-us` } 
                        className="inline-block bg-[var(--color-secondary)] text-white py-3 px-6  text-lg font-semibold mt-10 hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 ease"
                    >
                        {
                            locale == "sr" ? "Kontaktirajte nas" : "Contact Us"
                        }
                    </a>

                </motion.div>

            </motion.div>

        </div>
    )
}