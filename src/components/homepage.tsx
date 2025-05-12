import { Button } from "@/components/ui/button";
import { LuChevronRight } from "react-icons/lu";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: BiLogoTypescript },
  // Add more if needed
];

export default function HomePage() {
  return (
    <div className="px-10 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="container py-6 flex justify-between items-center">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-500">
          Sabah Hassan
        </div>
        <div className="flex gap-4">
          <Button
            asChild
            variant="ghost"
            className="transition-all duration-300 hover:scale-105"
          >
            <a href="#projects" aria-label="Go to Projects section">
              Projects
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="transition-all duration-300 hover:scale-105"
          >
            <a href="#contact" aria-label="Go to Contact section">
              Contact
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          {/* <img
            src="/profile.jpg" // Replace with your actual image path
            alt="Sabah Hassan"
            className="w-48 h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
          /> */}
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <div className="overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-[slideUp_1s_ease]">
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-rose-500 bg-clip-text text-transparent">
                Sabah Hassan
              </span>
            </h1>
            <p className="text-md text-gray-500 dark:text-gray-400 mt-2">
              Front-End Developer | UI/UX Enthusiast | Lifelong Learner
            </p>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg animate-[slideUp_1.2s_ease]">
            Specializing in{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              React
            </span>{" "}
            and{" "}
            <span className="font-semibold text-rose-500 dark:text-rose-400">
              Next.js
            </span>
            , I build performant web applications with intuitive interfaces.
          </p>

          <div className="flex gap-4 animate-[slideUp_1.4s_ease]">
            <Button
              className="group transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-indigo-600 to-rose-500 text-white"
              aria-label="View Projects"
              asChild
            >
              <a href="#projects">
                View Projects
                <LuChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6 hover:text-indigo-600 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6 hover:text-indigo-600 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="container py-12">
        <div className="overflow-hidden">
          <h2 className="text-2xl font-bold mb-8 animate-[slideUp_1s_ease]">
            My <span className="text-indigo-600">Technical</span> Toolkit
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-4 border rounded-lg flex flex-col items-center gap-2 transition-all duration-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:shadow-md hover:-translate-y-1"
            >
              <skill.icon className="h-6 w-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Placeholder */}
      <section id="projects" className="container py-20">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300">Coming soon...</p>
      </section>

      {/* Contact Placeholder */}
      <section id="contact" className="container py-20">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Email me at: sabah@example.com
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sabah Hassan. All rights reserved.
      </footer>
    </div>
  );
}
