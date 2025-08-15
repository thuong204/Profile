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
          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>

              {/* Experience item */}
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
                      12/2024 - Present
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">
                    CRB Group
                  </p>

                  <p className="text-emerald-700 dark:text-emerald-300 mb-4 leading-relaxed">
                    Developing modern web applications using cutting-edge
                    technologies. Working on frontend and backend development
                    with GraphQL, Next.js, NestJS, Docker, CI/CD, Nginx, and VPS
                    deployment. Collaborating with cross-functional teams to
                    deliver high-quality software solutions.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-200/80 text-pink-900 dark:bg-pink-800/60 dark:text-pink-200 rounded-full text-sm font-medium shadow-sm">
                      GraphQL
                    </span>
                    <span className="px-3 py-1 bg-purple-200/80 text-purple-900 dark:bg-purple-800/60 dark:text-purple-200 rounded-full text-sm font-medium shadow-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-red-200/80 text-red-900 dark:bg-red-800/60 dark:text-red-200 rounded-full text-sm font-medium shadow-sm">
                      NestJS
                    </span>
                    <span className="px-3 py-1 bg-blue-200/80 text-blue-900 dark:bg-blue-800/60 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm">
                      Docker
                    </span>
                    <span className="px-3 py-1 bg-indigo-200/80 text-indigo-900 dark:bg-indigo-800/60 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm">
                      CI/CD
                    </span>
                    <span className="px-3 py-1 bg-green-200/80 text-green-900 dark:bg-green-800/60 dark:text-green-200 rounded-full text-sm font-medium shadow-sm">
                      Nginx
                    </span>
                    <span className="px-3 py-1 bg-yellow-200/80 text-yellow-900 dark:bg-yellow-800/60 dark:text-yellow-200 rounded-full text-sm font-medium shadow-sm">
                      VPS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>

              {/* Education item */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">VKU</span>
                </div>

                <div className="ml-6 flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Bachelor of Software Engineering
                    </h4>
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full mt-2 md:mt-0">
                      2022 - 2027
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Vietnam Korea University of Information and Communication
                    Technology
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    Specialized in Software Engineering with focus on software
                    development methodologies, system design, and modern
                    programming technologies.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm font-medium">
                      Computer Science
                    </span>
                    <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300 rounded-full text-sm font-medium">
                      Web Development
                    </span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300 rounded-full text-sm font-medium">
                      Software Engineering
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
