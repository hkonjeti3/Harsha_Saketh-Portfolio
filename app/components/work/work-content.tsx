import { WorkContainer } from "./work-container";
import { WorkLeft } from "./work-left";
import { WorkRight } from "./work-right";
import { WorkTile } from "./workTiles";

interface WorkContentProps {
  work: WorkTile;
  progress?: number;
}

export default function WorkContent({ work, progress = 0 }: WorkContentProps) {
  const { title, description, skills, experience, duration } = work;

  return (
    <WorkContainer>
      {/* Left Side */}
      <WorkLeft progress={progress}>
        <div className="text-2xl font-medium md:text-3xl xl:text-4xl">{description}</div>
        <span className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">{title}</span>
        {duration && <div className="text-sm text-gray-400 mt-2">{duration}</div>}
      </WorkLeft>

      {/* Right Side */}
      <WorkRight progress={progress}>
        {/* Skills Section */}
        {skills && (
          <div className="flex flex-wrap gap-4 text-lg text-black dark:text-white justify-start">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Experience Section with Increased Font Size */}
        {experience && (
          <div className="w-full max-w-2xl px-6 py-4">
            <ul className="list-none space-y-4 text-xl text-black "> {/* Increased font size */}
              {experience.points.map((point, index) => (
                <li key={index} className="flex items-center gap-4 leading-relaxed">
                  {/* <FaAngleDoubleRight className="text-pink-500 text-2xl" /> Pink arrow */}
                  <span className="text-lg md:text-xl">{point}</span> {/* Increased text size */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </WorkRight>
    </WorkContainer>
  );
}
