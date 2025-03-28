import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";

export function Projects() {
  const { t } = useTranslation();

  const ConstructionIssueManagerTechs = [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Git",
    "GitHub",
  ];

  const SocialMediaTechs = [
    "React",
    "Tailwind CSS",
    "Supabase",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent text-center">
            {t("projects.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Construction Issue Manager project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#209d7d]/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                {t("projects.project1.title")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.project1.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {ConstructionIssueManagerTechs.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-[#24b2c2] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center ">
                <a
                  href="https://github.com/stars/Chaim-Pollak/lists/constructionissuesmanager"
                  target="_blank"
                  className="text-[#24b2c2] hover:text-blue-300 transition-colors my-4"
                >
                  {t("projects.project1.viewProject")}
                </a>
              </div>
            </div>

            {/* Social media project */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#209d7d]/30 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-4">
                {t("projects.project2.title")}
              </h3>
              <p className="text-gray-400 mb-4">
                {t("projects.project2.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {SocialMediaTechs.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-[#24b2c2] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center ">
                <a
                  href="https://social-media-app-woad-three.vercel.app/"
                  target="_blank"
                  className="text-[#24b2c2] hover:text-blue-300 transition-colors my-4"
                >
                  {t("projects.project2.viewProject")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
