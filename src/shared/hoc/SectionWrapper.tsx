import { FC } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from '../utils/motion';
import { styles } from "../../styles";

type ISectionWrapperProps = (Component: FC, idName: string) => FC

export const SectionWrapper: ISectionWrapperProps = (Component, idName) => (
  () => (
    <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount: 0.25}}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span
        className="hash-span"
        id={idName}
      >
        &nbsp;
      </span>
      <Component />
    </motion.section>
  )
);
