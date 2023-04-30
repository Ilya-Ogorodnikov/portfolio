import { BrowserRouter } from 'react-router-dom';

import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FeedbacksSection,
  TechSection,
  WorksSection
} from './modules';

import { Navbar, Hero } from './shared/components';

import { StarsCanvas } from './shared/canvas';

export const App = () => (
  <BrowserRouter>
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover, bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <AboutSection />
      <ExperienceSection />
      <TechSection />
      {/* <WorksSection /> */}
      <FeedbacksSection />

      <div className='relative z-0'>
        <ContactSection />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
);
