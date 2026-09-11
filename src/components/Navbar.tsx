"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const menuItems = [
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Reviews", link: "#reviews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 transition-all duration-300">
      <div className="mx-auto w-full max-w-6xl px-4 transition-all duration-300">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${
            isTransparent
              ? "bg-transparent border-transparent"
              : "border border-white/10 bg-[#0B1F3A]/90 shadow-lg backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-14 w-14 shrink-0">
              <Image
                src="/logo.png"
                alt="Scale My Amazon"
                fill
                sizes="64px"
                className="object-contain scale-[1.6] origin-left"
                priority
              />
            </div>
            <div className="ml-6 flex flex-col">
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
          <div className="mt-2 rounded-2xl border border-white/10 bg-[#0B1F3A]/95 px-6 py-6 backdrop-blur-md md:hidden">
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
      </div>
    </header>
  );
}