import { useState } from 'react';

interface ProjectProps {
  index: number;
  title: string;
  url: string;
  role: string;
  timeline: string;
  techStack: string[];
  description: string[];
  setModal: (modal: { active: boolean; index: number }) => void;
}

export default function ProjectItem({ index, title, url, role, timeline, techStack, description, setModal }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex w-full flex-col border-b px-4 py-8 sm:px-10 sm:py-12 transition-all duration-300"
      onMouseEnter={() => {
        setIsHovered(true);
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setModal({ active: false, index });
      }}
    >
      {/* Title, Tech Stack & Timeline Container */}
      <div className="flex items-start justify-between">
        <div className="max-w-[70%]">
        <h2 className="text-lg font-semibold break-words transition-all group-hover:text-pink-500 sm:text-3xl leading-snug">
  {title}
</h2>

          {/* Tech Stack */}
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 sm:text-sm">
            {techStack.join(' • ')}
          </p>
        </div>

        {/* Role & Timeline Container */}
        <div className="flex flex-col items-end text-right min-w-[30%]">
          <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            {timeline}
          </p>
          <p className="text-sm font-medium sm:text-lg leading-snug transition-all group-hover:text-pink-500">
  {role}
</p>
        </div>
      </div>

      {/* Dropdown Description */}
      {isHovered && (
  <div className="mt-4 space-y-2 text-sm sm:text-lg font-medium text-gray-900 dark:text-gray-100 transition-all duration-300">
    {description.map((point, i) => (
      <div key={i} className="flex items-start space-x-2">
        <span className="text-pink-500 dark:text-pink-400">➤</span>
        <p className="opacity-90">{point}</p>
      </div>
    ))}
  </div>
)}
    </a>
  );
}
