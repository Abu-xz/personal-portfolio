import { motion } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack, feature-rich e-commerce platform focused on men's fashion. It features a well-structured user interface and an intuitive admin dashboard for seamless order and inventory management.",
      image:
        "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MongoDB", "Express", "Node.js", "EJS", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Abu-xz/",
    },
    {
      title: "Marvel Customs Design",
      description:
        "Freelance startup providing a range of digital services, including web design, web development, 3D modeling, FiveM server scripting, digital marketing, and poster design.",
      image: "/image/marvel-customs.png",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide-React",
      ],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Abu-xz/",
    },
    {
      title: "OLX Clone",
      description:
        "A fully functional OLX-style marketplace, enabling users to list, search, and buy/sell products seamlessly.",
      image: "/image/olx-clone.png",
      technologies: ["React", "Context API", "Firebase", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Abu-xz/",
    },
    {
      title: "Netflix Clone",
      description:
        "A sleek Netflix-inspired streaming platform with user authentication, dynamic content fetching, and smooth UI transitions.",
      image: "/image/netflix-clone.png",
      technologies: ["React", "Firebase", "TMDB API", "Tailwind CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Abu-xz/",
    },
    {
      title: "ChatHive - Simple Chat App",
      description:
        "A lightweight, real-time chat application using WebSockets for instant messaging and a responsive UI.",
      image: "/image/chat-hive.png",
      technologies: ["Express", "Socket.io", "HTML", "CSS"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/Abu-xz/",
    },
    {
      title: "Vertex-Studys",
      description: "A professional and responsive static website built for a tuition center, featuring an intuitive layout, engaging design, and seamless contact form integration using Web3Forms API.",
      image: "/image/vertex-studys.png",
      technologies: ["HTML", "CSS", "JavaScript", "Web3Forms API"],
      demoUrl: "https://vertexstudys.com/",
      githubUrl: "https://github.com/Abu-xz/vertex-studyes",
  },
  ];

  // {
  //   title: "Task Management App",
  //   description: "A real-time task management application with drag-and-drop functionality, team collaboration features, and notifications.",
  //   image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A showcase of my work, ranging from web applications to innovative
            solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a
            href="https://github.com/Abu-xz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
