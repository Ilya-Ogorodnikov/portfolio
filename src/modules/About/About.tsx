import { motion } from "framer-motion";

import { FC } from "react";

import { ServiceCard } from './ServiceCard';

import { services } from '../../shared/constants';
import { fadeIn, textVariant } from '../../shared/utils/motion';
import { SectionWrapper } from "../../shared/hoc";

import { styles } from "../../styles";

const About: FC = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a skilled software developer with experience in TypeScript and 
      JavaScripts, and expertise in library like React.
      I'm quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export const AboutSection =  SectionWrapper(About, 'about');