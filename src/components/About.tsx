
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const timelineItems = [
    {
      year: "2021",
      title: "Started Journey with C Programming",
      description: "Began learning the fundamentals of programming with C, focusing on problem-solving and logic building."
    },
    {
      year: "2022",
      title: "Learned Java",
      description: "Expanded my programming knowledge by learning Java, understanding object-oriented programming and data structures."
    },
    {
      year: "2023",
      title: "Started Learning Web Development",
      description: "Dived into web development, learning HTML, CSS, and JavaScript to build interactive web applications."
    },
    {
      year: "2024",
      title: "Mastered the MERN Stack",
      description: "Became proficient in MongoDB, Express, React, and Node.js, building full-stack applications with modern technologies."
    },
    {
      year: "2025",
      title: "Freelance Developer",
      description: "Started working as a freelance developer, helping clients build scalable and high-quality web applications."
    }
];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-24 bg-background relative">
      <motion.div 
        className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My journey as a developer and the path that led me to where I am today.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="mb-4 text-muted-foreground">
                I'm Muhammed Abbas, a passionate MERN stack developer with a love for creating beautiful, functional, and user-friendly web applications.
              </p>
              <p className="mb-4 text-muted-foreground">
                With a strong foundation in MongoDB, Express.js, React, and Node.js, I specialize in building modern web applications that provide exceptional user experiences.
              </p>
              <p className="text-muted-foreground">
                I'm constantly learning and exploring new technologies to stay at the forefront of web development trends and deliver cutting-edge solutions.
              </p>
            </div>
          </motion.div>
          
          <div ref={ref}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-12 pb-12 last:pb-0"
                >
                  <div className="absolute left-[29px] top-1 transform -translate-x-1/2 w-4 h-4 rounded-full bg-neon-purple"></div>
                  <div className="glass-card rounded-lg p-6">
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-neon-purple/10 text-neon-purple mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
