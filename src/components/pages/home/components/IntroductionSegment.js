import { useLocales } from "@components/hooks/useLocales";
import styles from "@styles/components/pages/home_partials/IntroductionSegment.module.css"
import Link from "next/link";
import { useRouter } from "next/router";
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


function IntroductionBox({
    icon, title, url
}){
   
    return(
        <motion.div
            key={title}
            variants={item} 
            className={styles.IntroductionBox}
        >
            <Link href={url} className="no-underline text-inherit">
                <div className="flex flex-col items-center justify-center h-52 hover:scale-105 transition-all duration-300 cursor-pointer p-4 rounded hover:shadow-md">
                    {/* icon must be in fixed size div, centered, so that the title can be aligned properly */}
                    <div className="flex items-center justify-center w-24 h-24 mb-2">
                        { icon }
                    </div>
                    <div className="h-15 flex items-center justify-center">
                        <h3 className="text-lg md:text-xl text-center font-semibold">{title}</h3>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default function IntroductionSegment() {

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
            className="relative pl-[var(--segment-padding-left)] pr-[var(--segment-padding-right)] pt-[var(--segment-padding-top)] pb-[var(--segment-padding-bottom)] bg-white min-h-[100vh] flex items-center justify-center"
        >
            <div className={`${styles.IntroMediaSegmentContainer} `}>
                <h2 className={`text-2xl md:text-4xl font-bold mt-5 mb-10 text-center flex justify-center`}>{locales[locale].home.components.IntroductionSegment.title}</h2>
                <h3 className={`text-xl md:text-2xl font-normal mb-10 text-justify  font-italic`}>{locales[locale].home.components.IntroductionSegment.text}</h3>
                
                <div className="bg-[var(--foreground)] py-10 w-full border-t-3 border-[var(--color)]">
                    <p className={`text-2xl md:text-3xl font-bold mt-5 mb-5 text-center flex justify-center`}>
                        {locales[locale].home.components.IntroductionSegment.boxes.title}
                    </p>
                    <p className={`text-md md:text-xl font-normal text-center flex justify-center`}>
                        {locales[locale].home.components.IntroductionSegment.boxes.subtitle}
                    </p>
                    <div className="max-w-7xl mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-5">
                        <IntroductionBox 
                            icon={
                                <svg width="90px" height="90px" viewBox="0 0 512 512">
                                    <g className={styles.IntroductionBoxIcon} transform="translate(42.666667, 42.666667)">
                                        <path d="M277.333333,234.666667 L277.333,255.999667 L298.666667,256 L298.666667,298.666667 L277.333,298.666667 L277.333333,426.666667 L256,426.666667 L256,298.666667 L234.666667,298.666667 L234.666667,256 L256,255.999667 L256,234.666667 L277.333333,234.666667 Z M341.333333,234.666667 L341.333,341.332667 L362.666667,341.333333 L362.666667,384 L341.333,383.999667 L341.333333,426.666667 L320,426.666667 L320,383.999667 L298.666667,384 L298.666667,341.333333 L320,341.332667 L320,234.666667 L341.333333,234.666667 Z M405.333333,234.666667 L405.333,277.332667 L426.666667,277.333333 L426.666667,320 L405.333,319.999667 L405.333333,426.666667 L384,426.666667 L384,319.999667 L362.666667,320 L362.666667,277.333333 L384,277.332667 L384,234.666667 L405.333333,234.666667 Z M170.666667,7.10542736e-15 L341.333333,96 L341.333,213.333 L298.666,213.333 L298.666,138.747 L192,200.331 L192,323.018 L213.333,311.018 L213.333333,320 L234.666667,320 L234.666,348 L170.666667,384 L3.55271368e-14,288 L3.55271368e-14,96 L170.666667,7.10542736e-15 Z M42.666,139.913 L42.6666667,263.04 L149.333,323.022 L149.333,201.497 L42.666,139.913 Z M170.666667,48.96 L69.246,105.991 L169.656,163.963 L271.048,105.424 L170.666667,48.96 Z"/>
                                    </g>
                                </svg>
                            } 
                            title={locales[locale].home.components.IntroductionSegment.boxes.box1.title} 
                            url={ `${ locale == "sr" ? "" : "/" + locale }/our-services/project-development` } 
                        />
                        <IntroductionBox
                            icon={
                                    <svg 
                                        width="70px" 
                                        height="70px" 
                                        viewBox="0 0 16 16"    
                                    >
                                        <g strokeWidth="1" fill="none" fillRule="evenodd">
                                            <g transform="translate(0.000000, 1.000000)" className={`${ styles.IntroductionBoxIcon } fill-[var(--color)]`}>
                                                <g>
                                                    <path 
                                                        d="M14.217,14.949 C14.748,15.482 15.076,15.103 15.512,14.668 C15.948,14.233 16.326,13.904 15.795,13.372 C15.795,13.372 8.393,5.977 6.565,4.154 L4.987,5.731 L14.217,14.949 L14.217,14.949 Z" />
                                                    <path
                                                        d="M2.048,7.015 L2.662,6.411 C2.662,6.411 2.391,5.668 2.788,5.312 C3.185,4.956 3.855,5.176 3.855,5.176 L6.01,3.093 C6.01,3.093 5.859,2.01 6.059,1.81 C6.259,1.61 8.494,0.521 8.71,0.303 L8.251,-0.156 C8.251,-0.156 5.123,0.22 4.784,0.558 C4.585,0.758 3.096,2.262 2.034,3.324 C2.034,3.324 2.3,4.083 1.95,4.433 C1.599,4.784 0.809,4.533 0.809,4.533 C0.436,4.906 0.186,5.155 0.186,5.155 C-0.077,5.42 0.078,5.792 0.401,6.115 L1.087,6.801 C1.412,7.125 1.785,7.278 2.048,7.015 L2.048,7.015 Z" />
                                                </g>
                                                <path d="M11.733,5.515 C12.81,6.026 14.161,5.869 15.055,4.975 C15.745,4.285 16.019,3.336 15.872,2.444 L14.351,3.963 L13.057,4.284 L11.595,2.842 L11.938,1.505 L13.445,0.017 C12.552,-0.129 11.543,0.082 10.853,0.773 C9.958,1.668 9.836,3.052 10.347,4.13 L9.353,5.123 C9.79,5.558 10.257,6.025 10.741,6.508 L11.733,5.515 L11.733,5.515 Z"/>
                                                <path d="M7.432,10.119 L5.927,8.615 L4.619,9.924 C4.537,10.004 4.479,10.095 4.438,10.19 C4.361,10.16 4.318,10.159 4.291,10.17 C4.041,10.087 3.777,10.031 3.5,10.031 C2.119,10.031 1,11.136 1,12.5 C1,13.864 2.119,14.969 3.5,14.969 C4.881,14.969 6,13.864 6,12.5 C6,12.217 5.941,11.949 5.854,11.696 C5.849,11.672 5.848,11.65 5.834,11.615 C5.938,11.572 6.036,11.514 6.122,11.427 L7.432,10.119 L7.432,10.119 Z M3.5,13.938 C2.688,13.938 2.031,13.295 2.031,12.5 C2.031,11.705 2.687,11.062 3.5,11.062 C4.313,11.062 4.969,11.705 4.969,12.5 C4.969,13.295 4.312,13.938 3.5,13.938 L3.5,13.938 Z"/>
                                            </g>
                                        </g>
                                    </svg>
                            } 
                            title={locales[locale].home.components.IntroductionSegment.boxes.box2.title} 
                            url={locales[locale].home.components.IntroductionSegment.boxes.box2.url} 
                        />
                        <IntroductionBox 
                            icon={
                                <svg width="90px" height="90px" viewBox="0 0 512 512" className={styles.IntroductionBoxIcon}>
                                    <g transform="translate(42.666667, 42.666667)" >
                                        <path d="M213.333333,7.10542736e-15 C330.959705,7.10542736e-15 426.666667,95.7069604 426.666667,213.333333 C426.666667,330.959705 330.959705,426.666667 213.333333,426.666667 C95.7069604,426.666667 7.10542736e-15,330.959705 7.10542736e-15,213.333333 C7.10542736e-15,95.7069604 95.7069604,7.10542736e-15 213.333333,7.10542736e-15 Z M213.333333,42.6666667 C118.892964,42.6666667 42.6666667,118.892964 42.6666667,213.333333 C42.6666667,307.773704 118.892964,384 213.333333,384 C307.773704,384 384,307.773704 384,213.333333 C384,118.892964 307.773704,42.6666667 213.333333,42.6666667 Z M214.247352,115.448129 C230.38415,136.430834 235.828347,162.243841 230.657609,181.089155 C230.011918,184.190056 252.755616,208.371626 298.888703,253.633865 C313.973648,268.71881 313.973648,283.803754 298.888703,298.888699 C284.691108,313.086294 270.493513,313.921446 256.295918,301.394157 L181.426839,230.319924 C162.579882,235.491139 136.767529,230.046951 115.785814,213.909668 C100.396892,193.674631 95.0886432,167.225458 99.3755574,148.268642 L132.19607,181.089155 L165.016583,164.678898 L181.426839,131.858386 L148.606327,99.0378728 C167.562553,94.7513198 194.012816,100.058863 214.247352,115.448129 Z"/>
                                    </g>
                                </svg>
                            } 
                            title={locales[locale].home.components.IntroductionSegment.boxes.box3.title} 
                            url={locales[locale].home.components.IntroductionSegment.boxes.box3.url} 
                        />
                        <IntroductionBox 
                            icon={
                                <svg className={`fill-[var(--color)] ${styles.IntroductionBoxIcon}`}  width="80px" height="80px" viewBox="0 0 260 244" enableBackground="new 0 0 260 244" >
                                    <path d="M258,54v-8h-25.176c-0.596-3.416-1.941-6.576-3.86-9.307l17.806-17.806l-5.656-5.657l-17.803,17.802
                                        c-2.731-1.926-5.892-3.275-9.311-3.876V2h-8v25.148c-3.433,0.596-6.609,1.947-9.35,3.879L178.87,13.248l-5.656,5.657l17.781,17.78
                                        c-1.922,2.733-3.269,5.896-3.866,9.315H162v8h25.129c0.598,3.428,1.95,6.597,3.88,9.335L173.23,81.112l5.656,5.657l17.783-17.782
                                        c2.737,1.924,5.906,3.271,9.331,3.865V98h8V72.844c3.41-0.599,6.565-1.944,9.292-3.862l17.804,17.805l5.656-5.656l-17.803-17.804
                                        c1.927-2.735,3.276-5.902,3.874-9.326H258z M209.976,34.8c8.382,0,15.2,6.819,15.2,15.2s-6.818,15.2-15.2,15.2
                                        c-8.381,0-15.199-6.819-15.199-15.2S201.595,34.8,209.976,34.8z M80,236v6H43v-6h15v-22h6v22H80z M63.537,82l9.723,38h24.545
                                        l-9.773-38H63.537z M84.518,164h24.603l-9.773-38H74.795L84.518,164z M78.325,164l-9.723-38h-24.52l9.723,38H78.325z M26.632,82H2
                                        l9.772,38h24.582L26.632,82z M67.067,120l-9.723-38H32.825l9.723,38H67.067z M95.776,208h24.661l-9.773-38H86.053L95.776,208z
                                        M55.34,170l9.723,38h24.52l-9.723-38H55.34z M37.89,126H13.315l9.772,38h24.525L37.89,126z M24.631,170l9.772,38H58.87l-9.723-38
                                        H24.631z M178.667,190h17.055l6.686,26h-17.089L178.667,190z M163,237v-16h-5v16h-11v5h27v-5H163z M155.259,185l-7.164-28h16.968
                                        l7.164,28H155.259z M146.815,152l-6.652-26h16.968l6.652,26H146.815z M173.506,190l6.652,26H163.19l-6.652-26H173.506z M151.377,190
                                        l6.652,26h-16.834l-6.686-26H151.377z M141.654,152h-16.917l-6.686-26h16.951L141.654,152z M150.098,185h-16.874l-7.201-28h16.911
                                        L150.098,185z M179.264,126l6.686,26h-17.006l-6.652-26H179.264z M170.223,157h17.013l7.201,28h-17.049L170.223,157z M240,238v4h-16
                                        v-4h6v-9h4v9H240z M230.721,210l3.838,15h9.591l-3.838-15H230.721z M248.279,225H258l-3.858-15h-9.702L248.279,225z M217.049,210
                                        l3.858,15h9.524l-3.838-15H217.049z M243.417,206h9.696l-4.115-16h-9.675L243.417,206z M216.358,170h-9.596l4.115,16h9.575
                                        L216.358,170z M234.206,170l4.094,16h9.67l-4.115-16H234.206z M221.475,190h-9.57l4.115,16h9.549L221.475,190z M239.288,206
                                        l-4.094-16h-9.591l4.094,16H239.288z M234.171,186l-4.094-16h-9.591l4.094,16H234.171z"
                                    />
                                </svg>   
                            } 
                            title={locales[locale].home.components.IntroductionSegment.boxes.box4.title} 
                            url={locales[locale].home.components.IntroductionSegment.boxes.box4.url} 
                        />  
                    </div>
                    <motion.div
                        key={"discover-more-button"}
                        variants={item}  
                        className="flex justify-center mt-10"
                    >
                        <Link href={ locales[locale].home.components.IntroductionSegment.discoverMoreButton.url } className="no-underline">
                            <button className="bg-[var(--color-secondary)] text-white px-6 py-3 hover:bg-[var(--color-secondary-dark)] transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-103">
                                { locales[locale].home.components.IntroductionSegment.discoverMoreButton.text }
                            </button>
                        </Link>
                    </motion.div>
                </div>

                
            </div>  
        </motion.div>
    );
}