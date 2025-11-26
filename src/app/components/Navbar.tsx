"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Image
            src="/assets/icons/logo.svg"
            alt="Ezzifly Logo"
            width={90}
            height={30}
            className="md:w-[120px] md:h-10"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-light text-#1E1E1E">
            <a href="#" className="hover:text-black-50">
              Flights
            </a>
            <a href="#" className="hover:text-black-50">
              About Us
            </a>
            <a href="#" className="hover:text-black-50">
              Blogs
            </a>
            <a href="#" className="hover:text-black-50">
              Contact Us
            </a>
          </nav>
        </div>

        {/* DESKTOP RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language / Currency */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <div className="cursor-pointer px-2 py-2 border border-[#C3C3C3] rounded-sm text-sm font-medium flex items-center gap-1">
              <span>EN</span>
              <Image
                src="/assets/chevron_down.svg"
                alt="Chevron Down"
                width={12}
                height={12}
              />
            </div>

            {/* Flag + Currency */}
            <div className="cursor-pointer flex items-center border border-[#C3C3C3] rounded-sm px-2 py-2 gap-2">
              <Image
                src="/assets/ng.svg"
                alt="NG Flag"
                width={20}
                height={20}
              />
              <span className="text-sm font-medium flex items-center gap-1">
                NGN
                <Image
                  src="/assets/chevron_down.svg"
                  alt="Chevron Down"
                  width={12}
                  height={12}
                />
              </span>
            </div>
          </div>

          {/* Sign in/Register */}
          <button
            type="button"
            className="cursor-pointer px-4 py-2 rounded-sm text-white font-medium"
            style={{ backgroundColor: "#295B86" }}
          >
            Sign In or Register
          </button>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden block text-3xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE SLIDE-IN MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button className="text-3xl" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-6">
          <button className="flex items-center gap-3">
            <Image
              src="/assets/icons/cart.svg"
              width={24}
              height={24}
              alt="Cart"
            />
            <span className="text-base font-medium">Cart</span>
          </button>

          <div className="flex items-center gap-3">
            <Image src="/assets/ng.svg" width={20} height={20} alt="NG Flag" />
            <span className="text-base font-medium">English (NG)</span>
          </div>

          <button
            type="button"
            className="px-4 py-2 rounded-sm text-white font-medium md:hidden mr-2"
            style={{ backgroundColor: "#295B86" }}
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
