"use client";

import type React from "react";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubscribe} className="mb-4">
        <div className="flex gap-2 items-center">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </form>
      <p className="text-slate-400 text-sm">
        By clicking subscribe, you will receive updates from us. You always have
        the choice to unsubscribe.
      </p>
      {subscribed && (
        <p className="text-green-400 text-sm mt-2">
          Thank you for subscribing!
        </p>
      )}
    </div>
  );
}
