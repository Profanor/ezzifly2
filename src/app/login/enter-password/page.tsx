"use client";

import { useState } from "react";
import Image from "next/image";

export default function EnterPasswordPage() {
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
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Enter Password</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Please fill in the information below to login to your account
        </p>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Forgot password (moved here) */}
        <p className="text-left text-sm text-blue-600 underline cursor-pointer mb-5">
          Forgot password?
        </p>

        {/* Sign In */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mb-4">
          Sign In
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
