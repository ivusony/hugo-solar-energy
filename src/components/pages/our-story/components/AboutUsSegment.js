
import { useLocales } from '@components/hooks/useLocales';
import styles from '@styles/components/pages/our_story_partials/AboutUsSegment.module.css'
import { useRouter } from 'next/router'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function AboutUsSegment() {
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
            className={`mt-10 mb-10 ${styles.AboutUsSegment}`}
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
                                    Naša priča
                                </a>
                            </div>
                        </li>
                    </ol>
                </div>
            </nav>

            <motion.div
                key={1}
                variants={item}
            >
                <h1 className="text-3xl md:text-4xl font-bold mt-5 mb-10 text-center bg-white">{ locales[locale].our_story.components.AboutUsSegment.h1 }</h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-10 text-justify md:text-center font-italic bg-white">
                    { locales[locale].our_story.components.AboutUsSegment.h2 }
                </h2>

                {/* make two column grid on ms screens and larger, one column on mobile. Two paragraphs per column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].our_story.components.AboutUsSegment.p1 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].our_story.components.AboutUsSegment.p2 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].our_story.components.AboutUsSegment.p3 }
                    </p>
                    <p className="mb-5 text-justify  text-xl bg-white">
                        { locales[locale].our_story.components.AboutUsSegment.p4 }
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}