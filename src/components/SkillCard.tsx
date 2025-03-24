
import { motion } from "framer-motion";

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: number;
  delay?: number;
}

const SkillCard = ({ icon, name, level, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div
      className="glass-card rounded-lg p-6  flex flex-col items-center space-y-4"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-4 text-neon-purple">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <div className="w-full bg-border/50 rounded-full h-2 mb-1">
        <motion.div 
          className="bg-neon-purple h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3 }}
        />
      </div>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </motion.div>
  );
};

export default SkillCard;
