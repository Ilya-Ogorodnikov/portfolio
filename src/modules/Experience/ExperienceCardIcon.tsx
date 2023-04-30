import { FC } from "react";

interface IExperienceCardIconProps {
  icon: string;
  companyName: string;
}

export const ExperienceCardIcon: FC<IExperienceCardIconProps> = ({ icon, companyName }) => (
  <div className="flex justify-center items-center w-full h-full">
    <img
      src={icon}
      alt={companyName}
      className="w-[60%] h-[60%] object-contain "
    />
  </div>
);
