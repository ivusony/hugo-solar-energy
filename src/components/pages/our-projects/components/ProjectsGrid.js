import { useLocales } from "@components/hooks/useLocales";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";

export default function ProjectsGrid() {
    let {locale} = useRouter();
    let locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    function handleMouseEnter(e) {
        const projectImg = e.currentTarget.querySelector('.project-box img');
        const projectTextBox = e.currentTarget.querySelector('.project-text-box');
        const projectCapacity = e.currentTarget.querySelector('.project-capacity');
        projectTextBox.classList.remove('translate-y-15');
        projectTextBox.classList.add('translate-y-0');
        projectCapacity.classList.remove('opacity-0');
        projectCapacity.classList.add('opacity-100');
        projectImg.classList.add('scale-105');
    };

    function handleMouseLeave(e) {
        const projectImg = e.currentTarget.querySelector('.project-box img');
        const projectTextBox = e.currentTarget.querySelector('.project-text-box');
        const projectCapacity = e.currentTarget.querySelector('.project-capacity');
        projectCapacity.classList.remove('opacity-100');
        projectCapacity.classList.add('opacity-0');
        projectTextBox.classList.remove('translate-y-0');
        projectTextBox.classList.add('translate-y-15');
        projectImg.classList.remove('scale-105');
    };

    useEffect(() => {
        const projectBoxes = document.querySelectorAll('.project-box');
        projectBoxes.forEach(box => {
            box.addEventListener('mouseenter', handleMouseEnter);
            box.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            projectBoxes.forEach(box => {
                box.removeEventListener('mouseenter', handleMouseEnter);
                box.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView])
   
    return(

        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="relative  mb-15"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 grid-rows-32 sm:grid-rows-24 md:grid-rows-22 gap-3 md:gap-6 h-[1700px] md:h-[1000px] p-4">

                <motion.div
                    key={locales[locale].our_projects.projects[0].slug}
                    variants={item}
                    className="project-box relative overflow-hidden cursor-pointer  text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-2 md:col-span-3 md:row-start-2 md:row-span-7 sm:col-span-1 sm:row-span-2"
                > 
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[0].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[0].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[0].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[0].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[0].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[1].slug}
                    variants={item} 
                    className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-5 md:col-span-4 md:row-start-10 md:row-span-7 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[1].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[1].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[1].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[1].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[1].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[2].slug}
                    variants={item}  
                    className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-5 md:col-span-4 md:row-start-1 md:row-span-9 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[2].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[2].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[2].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[2].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[2].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[3].slug}
                    variants={item}  className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-9 md:col-span-3 md:row-start-2 md:row-span-7 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[3].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[3].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[3].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[3].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[3].work_performance_period
                                }
                            </div>
                        </div>
                        </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[4].slug}
                    variants={item} 
                    className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-1 md:col-span-4 md:row-start-9 md:row-span-6 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[4].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[4].imgs[1]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[4].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[4].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[4].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[5].slug}
                    variants={item} 
                    className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-9 md:col-span-4 md:row-start-9 md:row-span-10 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[5].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[5].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[5].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[5].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[5].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[6].slug}
                    variants={item}
                    className="project-box relative overflow-hidden cursor-pointer text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-2 md:col-span-3 md:row-start-15 md:row-span-6 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[6].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[6].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[6].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[6].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[6].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

                <motion.div
                    key={locales[locale].our_projects.projects[7].slug}
                    variants={item}
                    className="project-box relative overflow-hidden cursor-pointer  text-white font-bold text-lg row-span-4 sm:row-span-6 md:col-start-5 md:col-span-4 md:row-start-17 md:row-span-6 sm:col-span-1 sm:row-span-2"
                >
                    <Link
                        href={`${ locale == "sr" ? "" : "/" + locale }/our-projects/${locales[locale].our_projects.projects[7].slug}`}
                    >
                        <Image
                            className="w-full h-full transition-transform duration-500 ease-in-out hover:scale-105"
                            src={`/assets/images/projects/${locales[locale].our_projects.projects[7].imgs[0]}`}
                            layout="fill"
                            objectFit="cover"   
                        />
                        <div className="relative bg-gradient-to-b from-transparent to-[black]/70 hover:bg-[black]/50 text-center w-full h-full  transition-all duration-300"/>
                        <div className="project-text-box absolute bottom-4 left-0 w-full p-4 transition-all duration-300 translate-y-15">
                            <div className="project-name text-lg md:text-xl font-bold tracking-wider">{locales[locale].our_projects.projects[7].name}</div>
                            <div className="project-capacity text-sm md:text-base font-normal opacity-0 transition-opacity duration-600">
                                {
                                    locales[locale].our_projects.projects[7].solar_power_plant_capacity
                                }
                                <br/>
                                {
                                    locales[locale].our_projects.projects[7].work_performance_period
                                }
                            </div>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </motion.div>
    )
}
