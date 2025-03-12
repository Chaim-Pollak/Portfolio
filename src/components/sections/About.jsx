import { RevealOnScroll } from "../RevealOnScroll";

export function About() {
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
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              As a dedicated full-stack developer, I specialize in building
              robust and efficient web applications using React, Node.js, and
              MongoDB. My passion lies in crafting seamless user experiences and
              optimizing performance on both the front-end and back-end. With a
              problem-solving mindset and a keen eye for detail, I strive to
              develop innovative solutions that make a real impact.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
                <h3 className="text-xl font-bold mb-4">Backend</h3>
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
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Software Development Certificate</strong> , MeGo
                  (2023-2025)
                </li>
                <li>
                  Relevant Coursework: Full-Stack Development, Database
                  Management, Web Development, API Integration
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Ready to contribute and grow professionally.
                  </h4>
                  <p>Created and optimized web applications and services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
