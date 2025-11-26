import Image from "next/image";

const features = [
  {
    icon: "/assets/icons/tags.svg",
    title: "Best Flight Deals",
    description:
      "Get unbeatable prices on domestic and international flights no hidden fees, just transparent fares.",
  },
  {
    icon: "/assets/icons/clock.svg",
    title: "Real-Time Availability",
    description:
      "Search, compare, and book flights in real time with live seat and fare updates.",
  },
  {
    icon: "/assets/icons/zap.svg",
    title: "Simple & Fast Booking",
    description:
      "Book your flight in just a few clicks with our smooth, intuitive interface.",
  },
];

export default function About() {
  return (
    <section className="w-full bg-background">
      {/* hero image */}
      <div className="px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl">
          <Image
            src="/assets/about.jpg"
            alt="Traveler exploring with map overlooking coastal city"
            width={1200}
            height={400}
            className="h-130 w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* content */}
      <div className="px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-lg font-bold text-foreground mb-2">
            About Ezzifly
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Making Flight Booking Simple and Stress-Free
          </h2>

          <div className="space-y-6 text-foreground leading-relaxed">
            <p>
              Ezzifly is a modern flight booking platform designed to make
              travel easier, faster, and more affordable. We connect travelers
              with top airlines worldwide, giving you the power to search,
              compare, and book flights with just a few clicks. Our goal is
              simple — to help you reach your destination without the stress of
              complicated booking processes.
            </p>
            <p>
              Founded with a vision to transform how people travel, Ezzifly was
              built on the belief that booking a flight should be as effortless
              as choosing your destination. We leverage cutting-edge technology
              and smart design to give every traveler a smooth, transparent, and
              enjoyable experience.
            </p>
          </div>

          <button className="cursor-pointer mt-8 text-sm font-medium text-red-500 hover:text-red-600 transition-colors">
            Read More
          </button>
        </div>
      </div>

      {/* features */}
      <div className="px-4 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-6 justify-start">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border border-border bg-card p-8 text-center w-full sm:w-[48%] md:w-[30%]"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="mb-4"
                  />
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
