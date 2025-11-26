"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Destination {
  id: number;
  name: string;
  flag: string;
  image: string;
}

const destinations: Destination[] = [
  { id: 1, name: "United Kingdom", flag: "🇬🇧", image: "/assets/uk.jpg" },
  { id: 2, name: "Germany", flag: "🇩🇪", image: "/assets/germany.jpg" },
  { id: 3, name: "Turkey", flag: "🇹🇷", image: "/assets/turkey.jpg" },
  {
    id: 4,
    name: "Ghana",
    flag: "🇬🇭",
    image: "/assets/ghana.jpg",
  },
];

export default function TrendingDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? destinations.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === destinations.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-foreground">
              Trending Destinations
            </h2>
            <p className="text-sm text-black mt-1">
              Find the hottest places travelers are exploring right now
            </p>
          </div>

          <div className="flex gap-2 mt-1">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* carousel container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="shrink-0 w-full md:w-1/2 lg:w-1/4 p-2"
              >
                <div className="group cursor-pointer relative rounded-lg overflow-hidden h-64">
                  <Image
                    width={200}
                    height={200}
                    src={dest.image || "/placeholder.svg"}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{dest.flag}</span>
                      <span className="text-lg font-semibold">{dest.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
