import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";

export function Home() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#209d7d] to-[#3be9cf] bg-clip-text text-transparent leading-right">
            {t("home.greeting")}
          </h1>

          <p className="text-gray-40 text-lg mb-8 max-w-lg mx-auto">
            {t("home.intro")}
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#209d7d] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {t("home.viewProjects")}
            </a>
            <a
              href="#contact"
              className=" border border-[#209d7d]/60 text-[#209d7d] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-[#209d7d]/10"
            >
              {t("home.contactMe")}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
