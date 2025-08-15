export default function SkillsSection() {
  const technologies = {
    languages: [
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Java",
        icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "C++",
        icon: "https://cdn.simpleicons.org/cplusplus",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Python",
        icon: "https://cdn.simpleicons.org/python",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Kotlin",
        icon: "https://cdn.simpleicons.org/kotlin",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "PHP",
        icon: "https://cdn.simpleicons.org/php",
        width: "w-8",
        height: "h-8",
      },
    ],
    frameworks: [
      {
        name: "NestJS",
        icon: "https://cdn.simpleicons.org/nestjs",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "Next.js",
        icon: "https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "Express.js",
        icon: "https://www.manektech.com/storage/developer/1646733543.webp",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "ReactJS",
        icon: "https://cdn.simpleicons.org/react",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "TailwindCSS",
        icon: "https://cdn.simpleicons.org/tailwindcss",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.simpleicons.org/springboot",
        width: "w-6",
        height: "h-6",
      },
      {
        name: "Laravel",
        icon: "https://cdn.simpleicons.org/laravel",
        width: "w-6",
        height: "h-6",
      },
    ],
    apis: [
      {
        name: "GraphQL",
        icon: "https://cdn.simpleicons.org/graphql",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "RESTful API",
        icon: "https://media.lordicon.com/icons/wired/gradient/1330-rest-api.svg",
        width: "w-8",
        height: "h-8",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        icon: "https://cdn.simpleicons.org/postgresql",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Hasura",
        icon: "https://cdn.simpleicons.org/hasura",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "MySQL",
        icon: "https://cdn.simpleicons.org/mysql",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Redis",
        icon: "https://cdn.simpleicons.org/redis",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.simpleicons.org/mongodb",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "SQL Server",
        icon: "https://img.icons8.com/color/512w/microsoft-sql-server.png",
        width: "w-8",
        height: "h-8",
      },
    ],
    cloud: [
      {
        name: "AWS",
        icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/aws-color.png",
        width: "w-12",
        height: "h-12",
      },
      {
        name: "Cloudinary",
        icon: "https://cdn.simpleicons.org/cloudinary",
        width: "w-8",
        height: "h-8",
      },
    ],
    devops: [
      {
        name: "Git",
        icon: "https://cdn.simpleicons.org/git",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Docker",
        icon: "https://cdn.simpleicons.org/docker",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "VPS",
        icon: "https://cdn.simpleicons.org/apache",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Postman",
        icon: "https://cdn.simpleicons.org/postman",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "Cursor",
        icon: "https://img.icons8.com/color/512/cursor-ai.png",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "GitHub Actions",
        icon: "https://cdn.simpleicons.org/githubactions",
        width: "w-8",
        height: "h-8",
      },
    ],
    protocols: [
      {
        name: "MCP",
        icon: "https://cdn.simpleicons.org/protocolsio",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "TCP",
        icon: "https://cdn.simpleicons.org/wireshark",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "UDP",
        icon: "https://cdn.simpleicons.org/wireshark",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "HTTP/HTTPS",
        icon: "https://cdn.simpleicons.org/httpie",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "SMTP",
        icon: "https://cdn.simpleicons.org/minutemailer",
        width: "w-8",
        height: "h-8",
      },
      {
        name: "FTP",
        icon: "https://cdn.simpleicons.org/filezilla",
        width: "w-8",
        height: "h-8",
      },
    ],
    automation: [
      {
        name: "n8n",
        icon: "https://cdn.simpleicons.org/n8n",
        width: "w-8",
        height: "h-8",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="py-20  from-purple-900/20 via-indigo-900/10 to-purple-800/20 relative overflow-hidden"
    >
      {/* Background effects for dark theme */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-6 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Tech particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            🛠️ Technologies & Tools
          </h2>
          <p className="text-lg text-purple-100">
            My comprehensive tech stack and expertise
          </p>
        </div>

        <div className="space-y-16">
          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent text-center">
              💻 Languages
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {technologies.languages.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent text-center">
              🚀 Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {technologies.frameworks.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* APIs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent text-center">
              🔗 APIs
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {technologies.apis.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 4.24 2 7v10c0 2.76 4.48 5 10 5s10-2.24 10-5V7c0-2.76-4.48-5-10-5zm0 2c4.42 0 8 .9 8 2s-3.58 2-8 2-8-.9-8-2 3.58-2 8-2zm0 14c-4.42 0-8-.9-8-2V9.92c2.11 1.02 5 1.58 8 1.58s5.89-.56 8-1.58V16c0 1.1-3.58 2-8 2z" />
              </svg>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Databases
              </span>
            </h3>

            <div className="flex flex-wrap justify-center gap-10">
              {technologies.databases.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* Cloud */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center">
              ☁️ Cloud
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {technologies.cloud.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent text-center">
              🛠️ DevOps & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-10">
              {technologies.devops.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>

          {/* Automation Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent text-center">
              ⚙️ Automation Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.automation.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 bg-transparent"
                >
                  <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
