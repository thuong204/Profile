export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey and education background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Work Experience
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-white font-bold text-sm">FII</span>
                </div>
                <div className="ml-6 flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 shadow-lg border border-emerald-200/50 dark:border-emerald-700/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">
                      Frontend Developer
                    </h4>
                    <span className="text-sm font-medium text-emerald-700 bg-emerald-200/80 dark:bg-emerald-800/80 dark:text-emerald-300 px-3 py-1 rounded-full mt-2 md:mt-0 shadow-sm">
                      May 2025 – Apr 2026
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">
                    Fiiway (Shopify Partner)
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-300 mb-4 leading-relaxed">
                    Developed and maintained frontend features from UI designs and
                    client requirements; supported clients with implementations and
                    issue resolution; built responsive UI with Polaris, SCSS,
                    Handlebars, and JavaScript; collaborated with designers and
                    backend teams on new features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "Polaris UI",
                      "SCSS",
                      "Handlebars",
                      "JavaScript",
                      "REST API",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-pink-200/80 text-pink-900 dark:bg-pink-800/60 dark:text-pink-200 rounded-full text-sm font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <span className="text-white font-bold text-sm">FL</span>
                </div>
                <div className="ml-6 flex-1 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl p-6 shadow-lg border border-cyan-200/50 dark:border-cyan-700/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100">
                      Frontend Developer
                    </h4>
                    <span className="text-sm font-medium text-cyan-700 bg-cyan-200/80 dark:bg-cyan-800/80 dark:text-cyan-300 px-3 py-1 rounded-full mt-2 md:mt-0 shadow-sm">
                      Mar 2025 – Oct 2025
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
                    Freelancer
                  </p>
                  <p className="text-cyan-700 dark:text-cyan-300 mb-4 leading-relaxed">
                    Built and maintained web features with a focus on performance
                    and security; proposed improvements for product quality and UX;
                    delivered web and mobile apps with MUI, Tailwind CSS, and React
                    Native; optimized SEO and site performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "React",
                      "Tailwind CSS",
                      "React Native",
                      "REST API",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-indigo-200/80 text-indigo-900 dark:bg-indigo-800/60 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <span className="text-white font-bold text-lg">CRB</span>
                </div>
                <div className="ml-6 flex-1 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 shadow-lg border border-emerald-200/50 dark:border-emerald-700/50 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">
                      Software Engineer
                    </h4>
                    <span className="text-sm font-medium text-emerald-700 bg-emerald-200/80 dark:bg-emerald-800/80 dark:text-emerald-300 px-3 py-1 rounded-full mt-2 md:mt-0 shadow-sm">
                      Jul 2024 – Apr 2025
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">
                    CRB Group
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-300 mb-4 leading-relaxed">
                    Full-stack development, database design, and clarifying business
                    requirements; built Shopee scraping extensions and automated
                    content workflows; improved blog SEO and performance; deployed
                    and maintained apps on AWS with Nginx for scalability and
                    security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "React",
                      "Tailwind CSS",
                      "NestJS",
                      "Docker",
                      "Hasura",
                      "PostgreSQL",
                      "AWS",
                    ].map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-purple-200/80 text-purple-900 dark:bg-purple-800/60 dark:text-purple-200 rounded-full text-sm font-medium shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h3>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">VKU</span>
                </div>

                <div className="ml-6 flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Bachelor of Technology in Computer Science
                    </h4>
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full mt-2 md:mt-0">
                      2022 – 2026
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Vietnam–Korea University of Information and Communication
                    Technology
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Undergraduate program in computer science, covering software
                    development, systems, and modern programming practices.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm font-medium">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-full text-sm font-medium">
                      B.Tech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
