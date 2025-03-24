
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { Atom, Code, Database, FileCode, FileText, Leaf, Package, Server } from "lucide-react";

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const frontendSkills = [
    { name: "HTML & CSS", level: 95, icon: <FileCode /> },
    { name: "React", level: 95, icon: <Atom /> },
    { name: "JavaScript", level: 85, icon: <Code /> },
    { name: "TypeScript", level: 80, icon: <FileText /> },
  ];
  
  const backendSkills = [
    { name: "REST API", level: 80, icon: <Server /> },
    { name: "Express", level: 85, icon: <Package /> },
    { name: "MongoDB", level: 95, icon: <Leaf /> },
    { name: "SQL", level: 90, icon: <Database />},
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical expertise and proficiency.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="text-2xl font-bold mb-8 border-l-4 border-neon-purple pl-4"
            >
              Frontend Development
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold mb-8 border-l-4 border-neon-blue pl-4"
            >
              Backend Development
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            >
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  delay={0.2 + index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;
