
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { icons } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <icons.Github className="h-5 w-5" />,
      href: "https://github.com/Abu-xz",
    },
    {
      name: "LinkedIn",
      icon: <icons.Linkedin className="h-5 w-5" />,
      href: "www.linkedin.com/in/muhammed-abbas",
    },
    {
      name: "Email",
      icon: <icons.Mail className="h-5 w-5" />,
      href: "https://mail.google.com/mail/?view=cm&to=mhdabbasfirdous@gmail.com",      
    },
    {
      name: 'Instagram',
      icon: <icons.Instagram className="h-5 w-5"/>,
      href:'https://www.instagram.com/_abu._.zx_/'
    }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-neon-purple font-medium text-lg">
                Hello, my name is
              </span>
            </motion.div>
            
            <AnimatedText
              text="Muhammed Abbas"
              className="text-5xl md:text-7xl font-bold mb-4"
            />
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6"
            >
              MERN Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground mb-8 max-w-lg"
            >
              I build exceptional digital experiences with modern technologies.
              Specializing in creating robust web applications with the MERN stack.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-around space-x-2"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-neon-purple text-neon-purple hover:bg-neon-purple/10 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 flex justify-center space-x-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center group transition-colors hover:border-neon-purple"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-muted-foreground group-hover:text-neon-purple transition-colors">
                    {link.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
            <motion.div
              className="relative h-80 w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-blue opacity-20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-card rounded-full overflow-hidden p-2">
                <img
                  src="https://res.cloudinary.com/de5vavykz/image/upload/v1742718417/bemz1qf9stp4skfkcos0.jpg"
                  alt="Muhammed Abbas"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          className="absolute bottom-0  inset-x-0 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-muted-foreground hover:text-neon-purple transition-colors"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <icons.ArrowDown className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
