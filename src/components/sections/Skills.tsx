import { skills } from "../../data/skills";
import { Card } from "../Card";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Expertise
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className={`animate-fade-in`}
              style={{ animationDelay: `${groupIndex * 100}ms` }}
            >
              <Card>
                <h3 className="text-xl font-bold text-white mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-5">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-blue-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-4 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  );
}
