"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface QuickNavProps {
  active: string;
  setActive: (value: string) => void;
}

const items = [
  { name: "Flights", icon: "/assets/icons/airplane-white.svg" },
  { name: "Hotels", icon: "/assets/icons/hotel.svg" },
  { name: "Cars", icon: "/assets/icons/car.svg" },
  { name: "Tours", icon: "/assets/icons/tours.svg" },
];

export default function QuickNav({ active, setActive }: QuickNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);
  const [highlightStyle, setHighlightStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const index = items.findIndex((i) => i.name === active);
    if (!buttonsRef.current[index]) return;

    const button = buttonsRef.current[index];
    const container = containerRef.current;

    if (button && container) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setHighlightStyle({
        width: buttonRect.width,
        left: buttonRect.left - containerRect.left,
      });
    }
  }, [active]);

  return (
    <div className="flex justify-center mt-6">
      <div className="px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full inline-block">
        <div
          ref={containerRef}
          className="relative flex bg-transparent rounded-full overflow-hidden"
        >
          {/* sliding highlight */}
          <div
            className="absolute top-0 bottom-0 bg-[#295B86] rounded-full transition-all duration-300"
            style={{
              width: highlightStyle.width,
              left: highlightStyle.left,
            }}
          />

          {items.map((item, idx) => (
            <button
              key={item.name}
              ref={(el) => {
                if (el) buttonsRef.current[idx] = el;
              }}
              onClick={() => setActive(item.name)}
              className="cursor-pointer relative z-10 flex items-center gap-2 px-5 py-3 font-medium text-white"
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
