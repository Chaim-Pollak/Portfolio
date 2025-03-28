import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";

export function About() {
  const { t } = useTranslation();
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
    backend: ["Node.js & Express.js", "Python", "MongoDB", "SQL"],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent text-center">
            {t("about.title")}
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{t("about.description")}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {t("about.frontend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-[#24b2c2] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  {t("about.backend")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-[#24b2c2] py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{t("about.education")}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>{t("about.certificate")}</strong>, MeGo (2023-2025)
                </li>
                <li>{t("about.courses")}</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                {t("about.experience")}
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">{t("about.internship")}</h4>
                  <p>{t("about.created")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
