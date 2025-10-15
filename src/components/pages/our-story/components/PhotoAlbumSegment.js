import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';
import container from "@components/shared/MotionContainer";
import item from "@components/shared/MotionItem";
import { useRouter } from 'next/router';
import { useLocales } from '@components/hooks/useLocales';

const images = [
    "/assets/images/team/271320940_216268384030310_7574279993870886393_n.jpg",
    "/assets/images/team/472854418_907201771603631_7846606760671888800_n.jpg",
    "/assets/images/team/473785699_911935471130261_7930744259815660623_n.jpg",
    "/assets/images/team/473827252_913923077598167_6854558647904744990_n.jpg",
    "/assets/images/team/473830692_913925327597942_7200871566735558232_n.jpg",
    "/assets/images/team/474076236_913922317598243_7066227179784908746_n.jpg",
    "/assets/images/team/474102530_911937331130075_6218670754637931029_n.jpg",
    "/assets/images/team/474187556_913270557663419_8634686522112193964_n.jpg",
    "/assets/images/team/474200461_913925297597945_4959367417502590941_n.jpg",
    "/assets/images/team/474743537_917069923950149_5326844373437376252_n.jpg",
    "/assets/images/team/474839101_917064703950671_7890360416961252650_n.jpg",
    "/assets/images/team/474848589_917063427284132_6677838867187520471_n.jpg",
    "/assets/images/team/474848589_917064450617363_8652054819307302733_n.jpg",
    "/assets/images/team/475014456_918274763829665_1832375321642508183_n.jpg",
    "/assets/images/team/475020855_917063243950817_685033283842699995_n.jpg",
    "/assets/images/team/475165750_918307070493101_8852064783053605151_n.jpg",
    "/assets/images/team/475186311_917739020549906_6360469510207479429_n.jpg"
];

export default function PhotoAlbumSegment() {

    const { locale } = useRouter ();
    const locales = useLocales();

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);
    const prevImage = () => selectedIndex > 0 && setSelectedIndex(selectedIndex - 1);
    const nextImage = () => selectedIndex < images.length - 1 && setSelectedIndex(selectedIndex + 1);

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return(
        <>
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                className="pt-10 pb-10 px-2 md:px-0"
            >
                <motion.div
                    key={0}
                    variants={item}
                >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
                        { locales[locale].our_story.components.PhotoAlbumSegment.h2 }
                    </h2>
                </motion.div>
                <div
                    className={`mx-auto px-2 md:px-0 max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 auto-rows-[150px] `}
                >
                    {images.map((src, i) => (
                        <motion.div
                            key={i + 1}
                            variants={item}
                            className={
                                [
                                    "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
                                    // Desktop grid classes based on index (copy from your original code)
                                    i === 0 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 1 ? "lg:col-span-1 lg:row-span-2" :
                                    i === 2 ? "lg:col-span-3 lg:row-span-1" :
                                    i === 3 ? "lg:col-span-2 lg:row-span-1" :
                                    i === 4 ? "lg:col-span-1 lg:row-span-1" :
                                    i === 5 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 6 ? "lg:col-span-3 lg:row-span-2" :
                                    i === 7 ? "lg:col-span-1 lg:row-span-2" :
                                    i === 8 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 9 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 10 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 11 ? "lg:col-span-3 lg:row-span-1" :
                                    i === 12 ? "lg:col-span-1 lg:row-span-2" :
                                    i === 13 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 14 ? "lg:col-span-2 lg:row-span-2" :
                                    i === 15 ? "lg:col-span-1 lg:row-span-1" :
                                    i === 16 ? "lg:col-span-4 lg:row-span-1" :
                                    ""
                                ].join(" ") + " overflow-hidden group relative cursor-pointer"
                            }
                            onClick={() => openModal(i)}
                        >
                            <Image 
                                src={images[i]} 
                                fill
                                alt={`Photo ${i + 1}`}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {selectedIndex !== null && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
                    onClick={closeModal}
                >
                    <div
                    className="relative w-[90vw] h-[90vh] flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()}
                    >
                    <Image
                        src={images[selectedIndex]}
                        fill
                        alt="Fullscreen image"
                        className="object-contain"
                    />

                    {/* Prev Button */}
                    {selectedIndex > 0 && (
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--color)]/70 hover:bg-[var(--color-darker)]/70 text-white w-8 h-8 flex items-center justify-center text-xl rounded-full backdrop-blur-sm transition-all duration-300 shadow-md cursor-pointer"
                        >
                        &#10094;
                        </button>
                    )}

                    {/* Next Button */}
                    {selectedIndex < images.length - 1 && (
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--color)]/70 hover:bg-[var(--color-darker)]/70 text-white w-8 h-8 flex items-center justify-center text-xl rounded-full backdrop-blur-sm transition-all duration-300 shadow-md cursor-pointer"
                        >
                        &#10095;
                        </button>
                    )}

                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-2 bg-[var(--color)]/70 hover:bg-[var(--color-darker)]/70 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl backdrop-blur-sm transition-all duration-300 shadow-md"
                    >
                        &times;
                    </button>
                    </div>
                </motion.div>
            )}


        </>
    )
}
