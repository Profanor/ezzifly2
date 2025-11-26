"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Flight {
  id: number;
  from: string;
  to: string;
  price: number;
  type: "Round Trip" | "One Way";
  image: string;
}

const flights: Flight[] = [
  {
    id: 1,
    from: "Lagos",
    to: "London",
    price: 300,
    type: "Round Trip",
    image: "/assets/first.png",
  },
  {
    id: 2,
    from: "Lagos",
    to: "Dubai",
    price: 250,
    type: "One Way",
    image: "/assets/sec.png",
  },
  {
    id: 3,
    from: "Lagos",
    to: "Paris",
    price: 300,
    type: "One Way",
    image: "/assets/third.png",
  },
  {
    id: 5,
    from: "Lagos",
    to: "Spain",
    price: 300,
    type: "Round Trip",
    image: "/assets/fifth.png",
  },
];

export default function PopularRoutes() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "right" ? width : -width,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-foreground">
              Popular Routes
            </h2>
            <p className="hidden md:block text-sm text-black mt-1">
              Explore top travel routes chosen by thousands of trusted travelers
              everyday
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("left")}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleScroll("right")}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* single row carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="min-w-[200px] shrink-0 group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden h-48 mb-4">
                {" "}
                {/* reduced from h-64 */}
                <Image
                  width={200}
                  height={192}
                  src={flight.image || "/placeholder.svg"}
                  alt={`${flight.from} to ${flight.to}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">
                      {flight.from}
                    </span>
                    <Image
                      src="/assets/icons/airplane.svg"
                      alt="Airplane"
                      width={16}
                      height={16}
                      className="text-muted-foreground"
                    />
                    <span className="font-semibold text-foreground">
                      {flight.to}
                    </span>
                  </div>

                  <span className="text-xl font-bold text-red-500">
                    ${flight.price}
                  </span>
                </div>

                <div className="text-sm text-muted-foreground">
                  {flight.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
