'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';
import { projects, certifications, publications } from './constants';
import ProjectItem from './project-item';
import ProjectPreview from './project-preview';

const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

interface ProjectsProps {
  type?: 'projects' | 'certifications' | 'publications';
}

export default function Projects({ type = 'projects' }: ProjectsProps) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 });

  const data =
    type === 'certifications' ? certifications :
    type === 'publications' ? publications :
    projects;

  return (
    <>
      {data.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index / 10 }}
        >
          <ProjectItem
            index={index}
            title={item.title}
            url={item.url}
            timeline={item.timeline}
            role={item.role}
            techStack={item.techStack}
            description={item.description}
            setModal={setModal}
          />
        </motion.div>
      ))}

      {breakpoint === 'desktop' && <ProjectPreview modal={modal} projects={data} />}
    </>
  );
}
