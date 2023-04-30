import { FC } from "react";
//@ts-ignore либа не дает типы
import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import { ExperienceCard } from './ExperienceCard';

import { styles } from '../../styles';
import { experiences } from '../../shared/constants';
import { SectionWrapper } from '../../shared/hoc';
import { textVariant } from "../../shared/utils/motion";

import 'react-vertical-timeline-component/style.min.css';

const Experience: FC = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map(experience => (
          <ExperienceCard
            key={experience.title}
            experience={experience}
          />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export const ExperienceSection = SectionWrapper(Experience, 'work');