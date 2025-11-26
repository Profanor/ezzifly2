"use client";
import Link from "next/link";
import NewsletterForm from "./NewsLetterForm";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Blog", href: "#" },
    ],
    policy: [
      { label: "Terms and Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
    account: [
      { label: "Register", href: "#" },
      { label: "Sign In", href: "#" },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* logo - appears first on mobile, moves to far right on desktop */}
          <div className="lg:col-start-5 lg:col-end-6 order-first lg:order-last">
            <div className="mb-6">
              <Image
                src="/assets/icons/white-logo.png"
                alt="Ezzifly Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mb-4">
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308L5.283 3.75H3.372L16.5 20.91z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.894 12.797c0 .164.002.328.002.493 0 5.054-3.85 10.886-10.886 10.886-2.165 0-4.18-.634-5.876-1.726.3.037.605.057.914.057 1.797 0 3.451-.612 4.766-1.639-1.681-.031-3.092-1.142-3.577-2.666.235.036.476.055.722.055.35 0 .688-.047 1.012-.136-1.757-.353-3.078-1.903-3.078-3.763v-.05c.517.286 1.108.458 1.74.479-.1.689-.358 1.312-.756 1.753 1.048-1.249 2.621-2.067 4.414-2.151-.065-.279-.1-.568-.1-.865 0-2.096 1.701-3.797 3.797-3.797 1.092 0 2.078.461 2.771 1.199.864-.17 1.677-.484 2.41-.918-.283.884-.886 1.627-1.67 2.097.765-.092 1.499-.294 2.18-.595-.507.754-1.148 1.416-1.884 1.949" />
                </svg>
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-slate-400 text-sm">Copyrights © 2025 Ezzifly</p>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Policy</h3>
            <ul className="space-y-3">
              {footerLinks.policy.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Account</h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-slate-700 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              Want Insights from Ezzifly sent to your Inbox?
            </h3>
            <p className="text-slate-300 mb-8">
              Get notified when flight prices drop and when the best deals
              become available for your travels
            </p>
          </div>

          {/* Newsletter Form */}
          <div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </footer>
  );
}
