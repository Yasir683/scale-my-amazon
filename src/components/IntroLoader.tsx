"use client";

import { useEffect, useState } from "react";

const animatedWords = [
  "THANK",
  "YOU",
  "FOR",
  "VISITING",
  "MY",
  "PORTFOLIO",
];

export default function IntroLoader() {
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration =600;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;

      const currentProgress = Math.min(
        (elapsed / duration) * 100,
        100
      );

      setProgress(currentProgress);

      const wordIndex = Math.min(
        Math.floor((currentProgress / 100) * animatedWords.length),
        animatedWords.length - 1
      );

      setActiveWord(wordIndex);

      if (currentProgress >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setShowIntro(false);
        }, 100);
      }
    }, 16);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!showIntro) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
      <div className="flex w-full max-w-2xl flex-col items-center px-6 text-center">

        {/* Animated Welcome Line */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
          {animatedWords.map((word, index) => {
            const isActive = index === activeWord;

            return (
              <span
                key={word}
                className={`
                  inline-block
                  transition-all duration-300 ease-out
                  ${
                    isActive
                      ? "scale-125 font-bold text-[#FF9900]"
                      : "scale-100 font-medium text-white/75"
                  }
                `}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Main Message - No Animation */}
        <div className="mt-6">
          <p className="text-lg font-semibold tracking-[0.08em] text-white sm:text-xl">
            LET&apos;S BUILD, GROW &amp; SCALE
          </p>

          <p className="mt-1 text-lg font-semibold tracking-[0.08em] text-[#FF9900] sm:text-xl">
            YOUR AMAZON BRAND
          </p>
        </div>

        {/* Progress */}
        <div className="mt-10 flex w-full max-w-md items-center gap-4">

          {/* Progress Bar */}
          <div className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-[#FF9900] shadow-[0_0_10px_rgba(255,153,0,0.6)] transition-[width] duration-75 ease-linear"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Percentage */}
          <span className="w-10 text-right text-xs font-medium tracking-wider text-white/50">
            {Math.round(progress)}%
          </span>
        </div>

      </div>
    </div>
  );
}