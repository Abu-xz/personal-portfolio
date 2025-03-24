
import { motion } from "framer-motion";
import { Code, Eye, icons } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="glass-card rounded-lg overflow-hidden h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark-light/40 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-neon-purple hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Eye className="h-5 w-5" />
          </motion.a>
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-neon-purple hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <icons.Github className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Code className="h-5 w-5 text-neon-purple mr-2" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-neon-purple/10 text-neon-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
