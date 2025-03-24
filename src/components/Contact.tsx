
import { useState } from "react";
import { motion } from "framer-motion";
import { icons, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };
  
  const socialLinks = [
    {
      name: "Email",
      icon: <icons.Mail className="h-5 w-5" />,
      link: "mailto:mhdabbasfirdous@gmail.com",
    },
    {
      name: "Phone",
      icon: <icons.Phone className="h-5 w-5" />,
      link: "tel:+91 8590358670",
    },
    {
      name: "GitHub",
      icon: <icons.Github className="h-5 w-5" />,
      link: "https://github.com/Abu-xz",
    },
    {
      name: "LinkedIn",
      icon: <icons.Linkedin className="h-5 w-5" />,
      link: "https://www.instagram.com/_abu._.zx_/",
    },
  ];
  
  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-dark/10 pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center mr-4 group-hover:bg-neon-purple group-hover:text-white transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{link.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {link.link.replace("mailto:", "").replace("tel:", "")}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all"
                        placeholder="example@mail.com"
                      />
                    </motion.div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <motion.div variants={inputVariants} whileFocus="focus">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                          rows={5}
                        className="w-full p-3 rounded-lg bg-secondary/50 border border-border focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all resize-none"
                        placeholder="Hello, I'd like to talk about..."
                      ></textarea>
                    </motion.div>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                        <span>Sending...</span>
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <span>Message Sent!</span>
                        <Send className="h-5 w-5" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
