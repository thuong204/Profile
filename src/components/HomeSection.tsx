"use client";

interface HomeSectionProps {
  isVisible: boolean;
}

export default function HomeSection({ isVisible }: HomeSectionProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-25"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/10 to-purple-800/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      {/* Tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400 rounded-full animate-pulse opacity-80"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full animate-ping opacity-70"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
      >
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-700 p-1 animate-pulse-custom shadow-2xl">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <img
                src="/Thuong.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  // Fallback to text if image fails to load
                  e.currentTarget.style.display = "none";
                  const fallbackText = document.createElement("span");
                  fallbackText.textContent = "JT";
                  fallbackText.className =
                    "text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent";
                  e.currentTarget.parentNode?.appendChild(fallbackText);
                }}
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hello, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Joyce Tran
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-purple-200 max-w-3xl mx-auto">
          Software Engineer
        </p>

        <p className="text-lg mb-8 text-purple-300 max-w-2xl mx-auto">
          I craft elegant solutions with cutting-edge technology and create
          mystical digital experiences that push the boundaries of innovation
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">1+</div>
            <div className="text-sm text-purple-300">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-indigo-400 mb-1">50+</div>
            <div className="text-sm text-purple-300">Projects Done</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-sm text-purple-300">Client Satisfaction</div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mb-10">
          <p className="text-sm text-purple-400 mb-4 font-semibold uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-purple-300/20 rounded-full text-sm text-purple-200 hover:bg-purple-500/20 transition-all">
              React
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-indigo-300/20 rounded-full text-sm text-purple-200 hover:bg-indigo-500/20 transition-all">
              Next.js
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-cyan-300/20 rounded-full text-sm text-purple-200 hover:bg-cyan-500/20 transition-all">
              TypeScript
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-green-300/20 rounded-full text-sm text-purple-200 hover:bg-green-500/20 transition-all">
              Node.js
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-yellow-300/20 rounded-full text-sm text-purple-200 hover:bg-yellow-500/20 transition-all">
              Python
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
