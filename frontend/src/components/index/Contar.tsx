"use client";
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  endDate?: Date;
  duration?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Countdown: React.FC<CountdownProps> = ({ endDate, duration }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      let difference: number;
      
      if (endDate) {
        difference = endDate.getTime() - new Date().getTime();
      } else if (duration) {
        const totalSeconds = 
          (duration.days * 24 * 60 * 60) +
          (duration.hours * 60 * 60) +
          (duration.minutes * 60) +
          duration.seconds;
        difference = totalSeconds * 1000;
      } else {
        return;
      }

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [endDate, duration]);

  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center justify-center border border-[#F0EFF1] p-2 rounded w-20">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <span className="text-sm">Days</span>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#F0EFF1] p-2 rounded w-20">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#F0EFF1] p-2 rounded w-20">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center justify-center border border-[#F0EFF1] p-2 rounded w-20">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
