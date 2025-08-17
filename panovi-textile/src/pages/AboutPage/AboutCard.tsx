import React from "react"; 
import { FiCheckCircle } from "react-icons/fi";
import type { IconType } from "react-icons";

type AboutCardProps = {
  text: string;
  icon?: IconType;
  className?: string;
};

const AboutCard: React.FC<AboutCardProps> = ({
  text,
  icon: Icon = FiCheckCircle,
}) => {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm `}
    >
      <Icon className="mt-0.5 h-6 w-6 flex-none text-emerald-600" />
      <p className="text-sm leading-snug text-neutral-700">{text}</p>
    </div>
  );
};

export default AboutCard;
