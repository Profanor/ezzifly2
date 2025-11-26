"use client";

import Image from "next/image";
import QuickNav from "./QuickNav";
import FlightSearch from "./FlightSearchForm";
import { useState } from "react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Flights");

  return (
    <section className="relative w-full min-h-[500px] md:min-h-[500px] flex flex-col items-center pt-6 md:pt-12 pb-16">
      {/* bg image */}
      <Image
        src="/assets/bg3.jpg"
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* headline */}
      <div className="relative z-10 w-full max-w-4xl text-center px-4 md:px-6 mt-6 md:mt-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
          Fly Smart. Travel Easier
        </h1>
        <p className="text-white text-base sm:text-lg mt-2 leading-snug px-2">
          Book reliable flights in seconds and move with confidence anywhere you
          go
        </p>
      </div>

      {/* quickNav and content */}
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-5xl mt-3 px-4 text-center">
        <QuickNav active={activeTab} setActive={setActiveTab} />

        {activeTab === "Flights" ? (
          <FlightSearch />
        ) : (
          <div className="text-white text-xl font-semibold mt-10">
            Coming Soon !!!
          </div>
        )}
      </div>
    </section>
  );
}
