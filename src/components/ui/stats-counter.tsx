import React, { useEffect, useState } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ 
  value, 
  suffix = '', 
  duration = 2000,
  className = '' 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * easeOutCubic));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default StatsCounter;