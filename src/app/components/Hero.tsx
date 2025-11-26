"use client";

import Image from "next/image";
import QuickNav from "./QuickNav";
import FlightSearch from "./FlightSearchForm";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FloatingSelect = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="relative border border-gray-300 rounded-lg px-4 pt-4 pb-1 bg-white">
    <span className="text-xs text-gray-500 absolute left-4 top-1.5">
      {label}
    </span>

    <select
      title="destination"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-3 w-full bg-transparent outline-none appearance-none pr-6"
    >
      <option value="">Select</option>
      <option value="Lagos">Lagos</option>
      <option value="London">London</option>
      <option value="Dubai">Dubai</option>
      <option value="Paris">Paris</option>
    </select>

    <ChevronDown className="absolute right-3 top-6 w-4 h-4 text-gray-500 pointer-events-none" />
  </div>
);

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Flights");

  // Mobile-specific state
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [cabin, setCabin] = useState<"economy" | "premium">("economy");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

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
        <p className="text-white text-base sm:text-lg mt-2 leading-snug px-2 hidden md:block">
          Book reliable flights in seconds and move with confidence anywhere you
          go
        </p>
      </div>

      {/* QuickNav + FlightSearch */}
      <div className="relative z-10 flex flex-col gap-6 w-full max-w-5xl mt-3 px-4 text-center">
        {/* Desktop view */}
        <div className="hidden md:flex flex-col gap-6">
          <QuickNav active={activeTab} setActive={setActiveTab} />

          {activeTab === "Flights" ? (
            <FlightSearch />
          ) : (
            <div className="text-white text-xl font-semibold mt-10">
              Coming Soon !!!
            </div>
          )}
        </div>

        {/* Mobile view */}
        <div className="md:hidden w-full max-w-md mx-auto">
          {/* Trip Type + Cabin toggles - on top */}
          <div className="flex justify-between mb-4 gap-2 px-1">
            <button
              className={`flex-1 py-2 rounded-lg border border-white text-white flex items-center justify-center gap-2 ${
                tripType === "one-way" ? "bg-white/5" : "bg-transparent"
              }`}
              onClick={() => setTripType("one-way")}
            >
              One Way
              <Image
                src="/assets/chevron-down_white.svg"
                alt="chevron"
                width={16}
                height={16}
              />
            </button>

            <button
              className={`flex-1 py-2 rounded-lg border border-white text-white flex items-center justify-center gap-2 ${
                cabin === "economy" ? "bg-white/5" : "bg-transparent"
              }`}
              onClick={() => setCabin("economy")}
            >
              Economy
              <Image
                src="/assets/chevron-down_white.svg"
                alt="chevron"
                width={16}
                height={16}
              />
            </button>
          </div>

          <div className="space-y-3 mb-4 px-1">
            <FloatingSelect label="From" value={from} onChange={setFrom} />
            <FloatingSelect label="To" value={to} onChange={setTo} />
            <FloatingSelect
              label="Travel Dates"
              value={dates}
              onChange={setDates}
            />
            <FloatingSelect
              label="Travelers"
              value={travelers}
              onChange={setTravelers}
            />
          </div>

          {/* search button */}
          <button
            className="w-full py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: "#295B86" }}
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}
