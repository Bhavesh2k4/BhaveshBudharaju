import React from "react";
import SectionTitle from "../../components/Sectiontitle";
import { useSelector } from "react-redux";
import { Element } from "react-scroll";

const SkillItem = ({ skill }) => (
  <div className="bg-gray-200 rounded-md px-3 py-1 text-gray-700 mb-2">
    {skill.name}
  </div>
);

const SkillSection = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const skills = portfolioData && portfolioData.skills && portfolioData.skills[0];

  return (
    <Element name="skill">
    <div className="py-24">
      <SectionTitle title="Skills ⎯⎯⎯⎯" />
      <div className="flex flex-col items-center my-10">
        {skills && skills.languages && Array.isArray(skills.languages) && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill) => (
                <SkillItem key={skill._id} skill={skill} />
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-10">
          {skills && skills.frontend && Array.isArray(skills.frontend) && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <SkillItem key={skill._id} skill={skill} />
                ))}
              </div>
            </div>
          )}
          {skills && skills.backend && Array.isArray(skills.backend) && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <SkillItem key={skill._id} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default SkillSection;