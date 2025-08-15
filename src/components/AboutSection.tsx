export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Learn more about my journey and passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              My Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate Software Engineer with professional experience
              building modern web applications. I enjoy working across the full
              stack to create products that deliver exceptional user
              experiences.
            </p>

            {/* Personal Interests */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Personal Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">
                  ⚽ Football
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full text-sm font-medium">
                  🏸 Badminton
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium">
                  💪 Gym
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full text-sm font-medium">
                  ♟️ Chess
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300 rounded-full text-sm font-medium">
                  🏮 Chinese Chess
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300 rounded-full text-sm font-medium">
                  📱 Arena of Valor
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 rounded-full text-sm font-medium">
                  🖥️ League of Legends
                </span>
              </div>
            </div>

            {/* Personality Traits */}
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[var(--primary)] text-white rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-[var(--secondary)] text-white rounded-full text-sm">
                Creative Thinker
              </span>
              <span className="px-4 py-2 bg-[var(--accent)] text-white rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full text-sm">
                Strategic Mind
              </span>
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 glass rounded-xl">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                  50+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 glass rounded-xl">
                <div className="text-3xl font-bold text-[var(--secondary)] mb-2">
                  1+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Years Experience
                </div>
              </div>
              <div className="text-center p-6 glass rounded-xl">
                <div className="text-3xl font-bold text-[var(--accent)] mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center p-6 glass rounded-xl">
                <div className="text-3xl font-bold text-[var(--primary)] mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
