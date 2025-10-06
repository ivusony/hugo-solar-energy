import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, Children, cloneElement } from "react";

export default function FadeInStagger({ children , className}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

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
        transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className={className}
    >
        {Children.map(children, (child, i) => (
            <motion.div
                key={i}
                variants={item}
                className="staggered-item"
            >
                {child}
            </motion.div>
        ))}
    </motion.div>
  );
}
