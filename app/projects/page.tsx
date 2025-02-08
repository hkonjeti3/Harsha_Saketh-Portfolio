import MainLayout from 'app/components/layouts/main-layout';
import Projects from 'app/projects/projects';

export const metadata = {
  title: 'Work & Achievements',
  description: 'Projects, Certifications, and Publications - Harsha Saketh Konjeti',
};

export default function Page() {
  return (
    <MainLayout>
      {/* Main Heading */}
      <div className="space-y-4 pt-8 pb-10 md:space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
          Work & Achievements
        </h1>
        <p className="text-md leading-6 text-gray-400 dark:text-gray-300 sm:text-lg md:text-xl">
          A collection of my projects, professional certifications, and academic publications.
        </p>
      </div>

      {/* Projects Section */}
      <div className="space-y-6 pt-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <Projects type="projects" />
      </div>

      {/* Certifications Section */}
      <div className="space-y-6 pt-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
          Certifications
        </h2>
        <Projects type="certifications" />
      </div>

      {/* Publications Section */}
      <div className="space-y-6 pt-8 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
          Publications
        </h2>
        <Projects type="publications" />
      </div>
    </MainLayout>
  );
}
