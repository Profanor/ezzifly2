"use client";

import { useState } from "react";
import Image from "next/image";

export default function VerifyEmailPage() {
  const [code, setCode] = useState("");

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
        <h2 className="text-2xl font-bold mb-2">Verify Your Email</h2>
        <p className="text-gray-500 mb-6 text-sm">
          We’ve sent a verification code to{" "}
          <span className="text-red-500 font-medium">omoezzy@gmail.com</span>.
          Please enter this code to continue.
        </p>

        {/* CODE INPUT */}
        <div className="mb-3">
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Code
          </label>

          <input
            type="text"
            placeholder="Enter Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-red-400 outline-none"
          />
        </div>

        {/* Request new code */}
        <button className="text-sm text-blue-600 font-medium mb-4">
          Request New Code
        </button>

        {/* Verify */}
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all mb-4">
          Verify
        </button>

        {/* OR */}
        <div className="text-center text-gray-500 text-sm mb-3">OR</div>

        {/* Login */}
        <p className="text-center text-sm">
          Already Have an Account?{" "}
          <a href="/login" className="text-blue-700 font-medium">
            Login
          </a>
        </p>

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
