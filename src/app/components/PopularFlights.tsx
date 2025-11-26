"use client";

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
    id: 4,
    from: "Lagos",
    to: "Canada",
    price: 500,
    type: "Round Trip",
    image: "/assets/fourth.jpg",
  },
  {
    id: 5,
    from: "Lagos",
    to: "Spain",
    price: 300,
    type: "Round Trip",
    image: "/assets/fifth.png",
  },
  {
    id: 6,
    from: "Lagos",
    to: "Turkey",
    price: 250,
    type: "One Way",
    image: "/assets/sixth.jpg",
  },
  {
    id: 7,
    from: "Lagos",
    to: "Ghana",
    price: 300,
    type: "One Way",
    image: "/assets/seventh.jpg",
  },
  {
    id: 8,
    from: "Lagos",
    to: "Germany",
    price: 500,
    type: "Round Trip",
    image: "/assets/eigth.png",
  },
];

export default function PopularFlights() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Popular Flights From Lagos
          </h2>
          <p className="hidden md:block text-[#1E1E1E] text-lg">
            Discover the most in-demand destinations flying out of Lagos
          </p>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4 flex gap-4 snap-x snap-mandatory">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="shrink-0 w-64 snap-start group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden h-64 mb-4">
                <Image
                  width={200}
                  height={200}
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
                    />
                    <span className="font-semibold text-foreground">
                      {flight.to}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-red-500">
                    ${flight.price}
                  </span>
                </div>
                <div className="text-sm text-[#1E1E1E]">{flight.type}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flights.map((flight) => (
            <div key={flight.id} className="group cursor-pointer">
              <div className="relative rounded-xl overflow-hidden h-64 mb-4">
                <Image
                  width={200}
                  height={200}
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
                    />
                    <span className="font-semibold text-foreground">
                      {flight.to}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-red-500">
                    ${flight.price}
                  </span>
                </div>
                <div className="text-sm text-[#1E1E1E]">{flight.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
