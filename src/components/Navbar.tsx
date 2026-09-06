"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1F3A]/90 backdrop-blur-md">
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/20">
            <Image
              src="/logo.png"
              alt="Scale My Amazon"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>


          <div>
            <h1 className="text-lg font-bold leading-tight text-white">
              Yasir Aslam
            </h1>

            <p className="text-xs font-semibold text-[#FF9900]">
              Amazon PL Expert | 6+ Years Experience
            </p>
          </div>

        </Link>



        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-sm font-medium text-slate-200 transition hover:text-[#FF9900]"
            >
              {item.name}
            </Link>
          ))}


          <Link
            href="#contact"
            className="rounded-xl bg-[#FF9900] px-6 py-2.5 text-sm font-bold text-black transition hover:opacity-90"
          >
            Contact
          </Link>

        </nav>



        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label="Menu"
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

      </div>



      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B1F3A] px-6 py-6 md:hidden">

          <nav className="flex flex-col gap-5">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-slate-200 transition hover:text-[#FF9900]"
              >
                {item.name}
              </Link>
            ))}


            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-[#FF9900] px-5 py-3 text-center font-bold text-black"
            >
              Contact
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}