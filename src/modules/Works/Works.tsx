import { FC } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from './ProjectCard';

import { styles } from '../../styles';
import { SectionWrapper } from '../../shared/hoc';
import { projects } from '../../shared/constants';
import { fadeIn, textVariant } from "../../shared/utils/motion";

const Works: FC = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills.
        Each project is briefly described with
        links to code repositories and live demos in it.
      </motion.p>
    </div>

    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard
          key={`project-${index}`}
          index={index}
          project={project}
        />
      ))}
    </div>
  </>
);

export const WorksSection = SectionWrapper(Works, '');