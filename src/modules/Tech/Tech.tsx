import { FC } from 'react';

import { BallCanvas } from '../../shared/canvas';
import { SectionWrapper } from '../../shared/hoc';
import { technologies } from '../../shared/constants';

const Tech: FC = () => (
  <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map(({ icon, name }) => (
      <div
        className='w-28 h-28'
        key={name}
      >
        <BallCanvas icon={icon} />
      </div>
    ))}
  </div>
);

export const TechSection = SectionWrapper(Tech, '');