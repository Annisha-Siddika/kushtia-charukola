"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function CourseSection() {
  const [cardCount, setCardCount] = useState(6);

  useEffect(() => {
    const updateCardCount = () => {
      const width = window.innerWidth;

      if (width >= 1536) {
        // 2xl
        setCardCount(8);
      } else if (width >= 768) {
        // md
        setCardCount(6);
      } else {
        // small screens
        setCardCount(4);
      }
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);
  return (
    <section
      className="bg-[#f5f5f5] py-20 px-4 text-[#1e1e1e] bg-contain bg-no-repeat bg-center relative w-full overflow-hidden"
      style={{ backgroundImage: "url('/images/coursebg.png')" }}>
      <div className="relative z-10 max-w-7xl mx-auto flex gap-10">
        {/* Left - Character and Title */}
        <div className="flex flex-col items-center md:items-start justify-center w-1/3">
          <div className="relative w-48 md:w-96 2xl:w-[400px] h-[500px] 2xl:h-[600px] 2xl:-translate-x-28">
            <Image
              src="/images/dami.png"
              alt="Character pointing"
              fill
              className="object-contain"
              priority
            />
            <h2 className="absolute top-1/3 left-1/2 text-2xl md:text-3xl font-bold text-kc-text mt-4 text-shadow-xs text-shadow-amber-950 text-center md:text-left">
              আমাদের <br /> কোর্সসমূহ →
            </h2>
          </div>
        </div>

        {/* Right - Tilted Grid */}
        <div className="w-2/3 overflow-hidden">
          <div
            className="relative"
            style={{
              transform: "perspective(1200px) rotateY(-22deg) scale(0.85) ",
              transformOrigin: "left center",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {Array.from({ length: cardCount }).map((_, i) => (
        <div
          key={i}
          className="h-52 w-full flex items-end justify-center relative bg-amber-100 rounded-lg shadow-md"
        >
          <button className="bg-white text-kc-text font-semibold px-4 py-1 mb-3 rounded shadow hover:bg-kc-orange hover:text-white transition-colors">
            Apply now
          </button>
        </div>
      ))}
    </div>
          </div>

          {/* View More Button */}
          <div className="text-right mt-6">
            <button className="text-kc-text font-semibold hover:text-kc-green text-lg flex items-center justify-end gap-2">
              আরো দেখুন <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
