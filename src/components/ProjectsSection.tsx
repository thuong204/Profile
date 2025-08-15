interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-slate-600 to-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-slate-400 rounded-full animate-ping opacity-40"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-slate-300 bg-clip-text text-transparent">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-slate-200">
            Advanced technology projects I have implemented
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-102 transition-all duration-500 border border-white/20 shadow-2xl hover:shadow-blue-500/15 h-full flex flex-col"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-slate-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative">
                <div className="h-48 relative overflow-hidden">
                  {/* Project demo image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-indigo-300 group-hover:bg-clip-text transition-all duration-300 h-12 flex items-center">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 mb-4 leading-relaxed h-20 overflow-hidden">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-4 h-16 overflow-hidden">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-slate-200 rounded-full text-xs font-medium border border-blue-400/30 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transform hover:scale-102 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 h-10">
                    ✨ View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
