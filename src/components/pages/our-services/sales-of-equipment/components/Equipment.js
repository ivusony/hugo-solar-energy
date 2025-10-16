import { useLocales } from "@components/hooks/useLocales";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";

export default function SalesEquipment() {

    let { locale } = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);


    const SVGs = {
        'SOLAR PANELS / SOLARNI PANELI': (
            <svg
                height="60px"
                width="60px"
                viewBox="0 0 512 512"
                className="fill-[var(--color-secondary)] mb-3 "
            >
                <g>
                    <path
                        d="M77.604,241.753l10.047-41.623c-21.697-9.842-38.879-39.91-38.879-65.383c0-40.4,32.761-73.162,73.162-73.162
                        c31.978,0,59.097,20.563,69.049,49.153h28.136c4.574-7.435,17.672-17.408,15.484-22.67c-2.766-6.681-27.566-1.566-31.546-7.515
                        c-4.003-5.979,10.172-26.951,5.1-32.022c-5.078-5.078-26.05,9.104-32.029,5.093c-5.941-3.973-0.834-28.788-7.508-31.553
                        c-6.572-2.722-20.497,18.396-27.639,16.984c-6.922-1.368-11.723-26.241-19.048-26.241c-7.325,0-12.126,24.873-19.048,26.241
                        c-7.134,1.412-21.06-19.706-27.631-16.977c-6.681,2.766-1.566,27.566-7.515,31.546c-5.979,4.003-26.951-10.171-32.022-5.1
                        c-5.078,5.078,9.104,26.05,5.101,32.029c-3.98,5.942-28.788,0.834-31.561,7.508c-2.722,6.572,18.397,20.504,16.984,27.639
                        C24.873,122.622,0,127.423,0,134.747c0,7.325,24.873,12.126,26.242,19.048c1.412,7.134-19.707,21.06-16.977,27.631
                        c2.766,6.681,27.565,1.566,31.546,7.515c4.003,5.979-10.171,26.951-5.1,32.022c5.078,5.078,26.05-9.104,32.029-5.101
                        C71.464,218.358,76.938,233.447,77.604,241.753z"
                        />
                    <path
                        d="M66.144,349.022H512l-52.453-217.304h-340.95L66.144,349.022z M473.934,319.049H367.579L361.3,251.61h96.351
                        L473.934,319.049z M435.948,161.691l16.282,67.439h-93.022l-6.271-67.439H435.948z M247.644,161.691h82.718l6.278,67.439h-95.275
                        L247.644,161.691z M239.272,251.61h99.46l6.271,67.439H233.001L239.272,251.61z M142.204,161.691h82.865l-6.271,67.439h-92.876
                        L142.204,161.691z M216.705,251.61l-6.279,67.439H104.218L120.5,251.61H216.705z"
                    />
                    <polygon
                        points="83.634,394.479 494.511,394.479 512,359.508 66.144,359.508"
                    />
                    <polygon
                        points="311.702,408.668 266.449,408.668 264.02,448.271 218.358,470.897 218.358,499.187 359.794,499.187 359.794,470.897 314.131,448.271"
                    />
                </g>
            </svg>
        ),
        'INVERTERS / INVERTERI': (
            <svg class="text-[var(--color-secondary)] mb-3 " width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                <path d="M7 10h3l-3 4h3"/>
                <path d="M14 10h3l-3 4h3"/>
                <line x1="12" y1="6" x2="12" y2="8"/>
                <line x1="12" y1="16" x2="12" y2="18"/>
            </svg>
        ),
        'MOUNTING STRUCTURES / NOSIVE KONSTRUKCIJE': (
            <svg class="text-[var(--color-secondary)] mb-3" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20h20"/>
                
                <path d="M4 20l4-10"/>
                <path d="M4 20l2-8"/> 
                
                <path d="M20 20l-4-10"/>
                <path d="M20 20l-2-8"/> 
                
                <path d="M8 10h8"/>
                
                <path d="M12 20v-4"/>
                <path d="M10 16h4"/>
            </svg>
        ),
        'EQUIPMENT AND CABLES / OPREMA I KABLOVI': (
            <svg class="text-[var(--color-secondary)] mb-3" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 21l14-14m-10 0L5 7c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h4"/>
                <path d="M19 3l-14 14m10 0l4 4c1.105 0 2-.895 2-2v-4c0-1.105-.895-2-2-2h-4"/>
                <polyline points="10 2 10 7 15 7 15 2"/>
            </svg>
        ),
    }

    return(
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="bg-[var(--color-foreground)] py-10 md:py-15 max-w-7xl mx-auto mb-10"
        >
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-[var(--segment-padding-left)] pr-[var(--segment-padding-right)]">
                {
                    locales[locale].sales_of_equipment.equipment.map((equipment_item , index) => (
                        <motion.div
                            key={index}
                            variants={item}
                        >
                            <div  className="h-full bg-white p-5 rounded-lg shadow transform scale-100 transition-transform transition-shadow duration-300 ease hover:shadow-lg hover:scale-101 flex flex-col justify-between">
                                {/* if svg SVGs key name includes equipment_item.category */}
                                { Object.keys(SVGs).find(key => key.includes(equipment_item.category)) && SVGs[Object.keys(SVGs).find(key => key.includes(equipment_item.category))] }
                                <h3 className="hugo-h2">{equipment_item.category}</h3>
                                <p className="hugo-p-justify">{equipment_item.focus}</p>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}