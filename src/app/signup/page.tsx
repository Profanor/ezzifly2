"use client";

import { useState } from "react";
import Image from "next/image";

export default function SignupPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/new-bg.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-3xl shadow-xl border">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Sign In or Register</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Manage Your Bookings Easily and Start Your Travels
        </p>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Continue button */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mb-4">
          Continue
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <span className="flex-1 h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Sign-in */}
        <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all">
          <Image
            src="/assets/icons/google.svg"
            alt="google"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium">Continue with Google</span>
        </button>

        {/* Legal */}
        <p className="text-center text-gray-500 text-xs mt-6 leading-relaxed">
          By Signing In Or Registering, I Confirm That I Have Read And Agreed To
          Ezzifly{" "}
          <a href="#" className="text-blue-600 underline">
            Terms And Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
