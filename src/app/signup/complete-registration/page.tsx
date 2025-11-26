"use client";

import { useState } from "react";
import Image from "next/image";

export default function CompleteSignupPage() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      {/* Background */}
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

      {/* Card */}
      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-3xl shadow-xl border">
        <h2 className="text-2xl font-bold mb-2">Personal Information</h2>

        <p className="text-gray-500 mb-6 text-sm">
          Please fill in the information below to complete your Sign Up process
        </p>

        {/* First + Last Name */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter"
              value={last}
              onChange={(e) => setLast(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Create Password
          </label>

          <div className="relative">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none pr-10"
            />

            <Image
              src="/assets/icons/eye.svg"
              alt="toggle"
              width={20}
              height={20}
              className="absolute right-3 top-3 opacity-70 cursor-pointer"
            />
          </div>
        </div>

        {/* Register */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mb-4">
          Register
        </button>

        {/* Legal */}
        <p className="text-center text-gray-500 text-xs leading-relaxed">
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
