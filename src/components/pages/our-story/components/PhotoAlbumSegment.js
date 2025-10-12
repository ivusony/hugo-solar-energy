import styles from '@styles/components/pages/our_story_partials/PhotoAlbumSegment.module.css'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';


export default function PhotoAlbumSegment() {

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

    return(
    <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className={`mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 pl-[var(--segment-padding-left)] pr-[var(--segment-padding-right)] mt-20 mb-20 auto-rows-[150px] `}
    >
        {/* Image 1: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={1}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image 
                src="/assets/images/team/271320940_216268384030310_7574279993870886393_n.jpg" 
                layout="fill"
                objectFit="cover"
                alt="Hugo solar energy logo" 
                // className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 2: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 1 col / 2 rows */}
        <motion.div
            key={2}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/472854418_907201771603631_7846606760671888800_n.jpg" fill alt="Construction site" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 3: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 3 col / 1 row */}
        <motion.div
            key={3}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-3 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/473785699_911935471130261_7930744259815660623_n.jpg" fill alt="Hugo solar energy team mate on the roof installing solar panel" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 4: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 1 row */}
        <motion.div
            key={4}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/473827252_913923077598167_6854558647904744990_n.jpg" fill alt="Construction site cabling" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 5: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 1 col / 1 row */}
        <motion.div
            key={5}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/473830692_913925327597942_7200871566735558232_n.jpg" fill alt="Solar energy indoor units" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 6: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={6}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474076236_913922317598243_7066227179784908746_n.jpg" fill alt="Solar energy outdoor units - convertors" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 7: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 3 col / 2 rows */}
        <motion.div
            key={7}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474102530_911937331130075_6218670754637931029_n.jpg" fill alt="Hugo solar energy team on the roof during panel install" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 8: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 1 col / 2 rows */}
        <motion.div
            key={8}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474187556_913270557663419_8634686522112193964_n.jpg" fill alt="Solar panels on the roof - roof solar plant" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 9: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={9}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474200461_913925297597945_4959367417502590941_n.jpg" fill alt="Hugo solar energy team mate working on indoor unit installment" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 10: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={10}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474743537_917069923950149_5326844373437376252_n.jpg" fill alt="Hugo solar energy teammates working on installing a new roof solar power plant" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 11: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={11}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474839101_917064703950671_7890360416961252650_n.jpg" fill alt="Hugo solar energy teammates working on installing a new roof solar power plant" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 12: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 3 col / 1 row */}
        <motion.div
            key={12}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-3 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474848589_917063427284132_6677838867187520471_n.jpg" fill alt="Hugo solar energy teammates working on installing another roof solar power plant" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 13: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 1 col / 2 rows */}
        <motion.div
            key={13}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/474848589_917064450617363_8652054819307302733_n.jpg" fill alt="Roof solar power plant installment" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 14: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={14}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/475014456_918274763829665_1832375321642508183_n.jpg" fill alt="Shipyard roof power plant" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 15: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 2 col / 2 rows */}
        <motion.div
            key={15}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/475020855_917063243950817_685033283842699995_n.jpg" fill alt="Shipyard roof power plant installation" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 16: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 1 col / 1 row */}
        <motion.div
            key={16}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-1 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/475165750_918307070493101_8852064783053605151_n.jpg" fill alt="Roof power plant installation" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>

        {/* Image 17: Mobile 1 col / 1 row, Medium 1 col / 2 rows, Desktop 4 col / 1 row */}
        <motion.div
            key={17}
            variants={item}
            className="col-span-1 row-span-1 sm:col-span-1 sm:row-span-2 lg:col-span-4 lg:row-span-1 overflow-hidden rounded-2xl group relative"
        >
            <Image src="/assets/images/team/475186311_917739020549906_6360469510207479429_n.jpg" fill alt="Roof power plant installation" className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
        </motion.div>
    </motion.div>
)
}