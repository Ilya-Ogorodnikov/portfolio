import { FC } from "react";
import { motion } from "framer-motion";

import { FeedbackCard } from './FeedbackCard';

import { SectionWrapper } from "../../shared/hoc";
import { textVariant } from "../../shared/utils/motion";
import { testimonials } from "../../shared/constants";
import { styles } from "../../styles";

const Feedbacks: FC = () => (
  <div className={`mt-12 bg-black-100 rounded-[20px]`}>
    <div
      className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>
    <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export const FeedbacksSection = SectionWrapper(Feedbacks, "feedbacks");