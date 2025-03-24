
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full flex items-center justify-center bg-background border-3 border-border transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ rotate: -45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 45, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-5 w-5 text-teal-400" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 45, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: -45, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-5 w-5 text-neon-purple" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
