
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();
  
  const createParticles = useCallback(() => {
    const count = Math.min(window.innerWidth, window.innerHeight) * 0.05;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < count; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
    
    setParticles(newParticles);
  }, []);
  
  useEffect(() => {
    createParticles();
    window.addEventListener("resize", createParticles);
    
    return () => {
      window.removeEventListener("resize", createParticles);
    };
  }, [createParticles]);
  
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          // Update position
          let x = particle.x + particle.speedX;
          let y = particle.y + particle.speedY;
          
          // Boundary check and position reset
          if (x < 0) x = window.innerWidth;
          if (x > window.innerWidth) x = 0;
          if (y < 0) y = window.innerHeight;
          if (y > window.innerHeight) y = 0;
          
          return {
            ...particle,
            x,
            y,
          };
        })
      );
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <svg width="100%" height="100%">
        {particles.map((particle, index) => (
          <circle
            key={index}
            cx={particle.x}
            cy={particle.y}
            r={particle.size}
            fill={theme === 'dark' ? 'rgba(157, 78, 221, ' + particle.alpha + ')' : 'rgba(67, 97, 238, ' + particle.alpha + ')'}
          />
        ))}
      </svg>
    </div>
  );
};

export default Particles;
