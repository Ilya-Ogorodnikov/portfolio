import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from '../../shared/utils/motion';
import { FC } from "react";

interface IServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

export const ServiceCard: FC<IServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[290px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);