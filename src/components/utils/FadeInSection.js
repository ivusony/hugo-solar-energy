import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function FadeInSection({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.7, ease: "easeOut" }}
                variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
