"use client";
import React, { useEffect, useState, useMemo } from "react";
import Button from "../reuseableComponent/Button";

const WeeklyDeal = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate the end date only once
  const endDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 7);
    return date;
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Run the countdown immediately on mount
    updateCountdown();

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="lg:p-20">
      <div
        className="relative w-full h-[400px] lg:h-[550px] bg-cover bg-center text-white flex items-center lg:p-10"
        style={{
          backgroundImage: "url('/images/time-bg.jpg')",
        }}
      >
        <div className="text-center p-6 rounded-md w-full lg:w-2/5 space-y-6">
          <h1 className="text-4xl font-medium mb-4 text-gray-900">
            Deal Of The Week
          </h1>
          <p className="mb-6 text-gray-500 text-sm font-light">
            Lorem ipsum dolor sit, amet Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam, sint.
          </p>
          <div className="flex justify-center gap-2 lg:gap-6 font-bold uppercase">
            <div className="flex flex-col items-center bg-white p-3 rounded">
              <span className="text-gold text-2xl lg:text-3xl">{timeLeft.days}</span>
              <span className="text-sm lg:text-base text-yellow-900 font-thin">Days</span>
            </div>
            <div className="flex flex-col items-center bg-white p-3 rounded">
              <span className="text-gold text-2xl lg:text-3xl">{timeLeft.hours}</span>
              <span className="text-sm lg:text-base text-yellow-900 font-thin">Hrs</span>
            </div>
            <div className="flex flex-col items-center bg-white p-3 rounded">
              <span className="text-gold text-2xl lg:text-3xl">{timeLeft.minutes}</span>
              <span className="text-sm lg:text-base text-yellow-900 font-thin">Mins</span>
            </div>
            <div className="flex flex-col items-center bg-white p-3 rounded">
              <span className="text-gold text-2xl lg:text-3xl">{timeLeft.seconds}</span>
              <span className="text-sm lg:text-base text-yellow-900 font-thin">Secs</span>
            </div>
          </div>
          <Button className={`bg-gold text-white`}>shop now</Button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyDeal;
