
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-background ${theme === 'dark' ? 'dark' : ''}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
        <Navbar />
        <main>{children}</main>
        <footer className="py-8 text-center text-sm text-muted-foreground">
          <div className="container mx-auto">
            <p>© {new Date().getFullYear()} Muhammed Abbas. All rights reserved.</p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Layout;
