// components/Hero.tsx

"use client";

import Image from "next/image";
import { Mail, ChevronDown } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";


export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#0B1F3A] via-[#0B1F3A] to-[#1a3a5c]"
    >

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">


        {/* Left Content */}

        <FadeIn direction="left">


          <div>


            <FadeIn delay={0.1}>
              <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Yasir <span className="text-[#FF9900]">Aslam</span>
              </h1>
            </FadeIn>



            <FadeIn delay={0.2}>

              <p className="mt-4 text-xl font-semibold text-[#FF9900] sm:text-2xl">
                Amazon Virtual Assistant & E-commerce Expert
              </p>

            </FadeIn>




            <FadeIn delay={0.3}>

              <p className="mt-5 max-w-xl text-pretty leading-relaxed text-slate-300">
                6+ Years of Strategic Excellence in scaling Amazon businesses.
                Specializing in revenue optimization, market expansion, and
                data-driven growth strategies that transform struggling sellers
                into market leaders.
              </p>

            </FadeIn>




            <FadeIn delay={0.4}>

              <blockquote className="mt-6 max-w-xl border-l-4 border-[#FF9900] pl-4 text-sm italic leading-relaxed text-slate-400">

                Trusted by businesses worldwide to generate strong Amazon
                growth through expert optimization and proven strategies.

              </blockquote>

            </FadeIn>




            <FadeIn delay={0.5}>

              <div className="mt-6 flex flex-wrap gap-3">

                <span className="rounded-lg bg-[#FF9900] px-4 py-2 text-sm font-semibold text-[#0B1F3A]">
                  Amazon Seller Central Expert
                </span>


                <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                  PPC Strategy
                </span>


                <span className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                  Listing Optimization
                </span>

              </div>

            </FadeIn>





            <FadeIn delay={0.6}>

              <div className="mt-8 flex flex-wrap gap-4">


                <a
                  href="https://wa.me/923097697339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1da851]"
                >

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >

                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>

                  </svg>

                  WhatsApp

                </a>




                <a
                  href="mailto:yasirchaudharybwn@email.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >

                  <Mail className="h-4 w-4" />

                  Email

                </a>


              </div>


            </FadeIn>


          </div>


        </FadeIn>






        {/* Right Image */}


        <FadeIn direction="right" delay={0.3}>


          <div className="relative mx-auto w-full max-w-md">


            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">


              <Image
                alt="Portrait of Yasir Aslam"
                width={1024}
                height={1536}
                className="h-auto w-full object-cover"
                src="/yasir-profile.png"
                priority
              />



              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-transparent px-6 pb-5 pt-16 text-center">


                <p className="text-lg font-bold text-white">
                  Yasir Aslam
                </p>


                <p className="text-sm font-medium text-[#FF9900]">
                  Manager, Scale My Amazon
                </p>


              </div>


            </div>


          </div>


        </FadeIn>



      </div>





      {/* Scroll Down */}

      <FadeIn delay={0.8}>

        <div className="flex justify-center pb-8">

          <a
            href="#about"
            aria-label="Scroll to next section"
          >

            <ChevronDown className="h-7 w-7 animate-bounce text-[#FF9900]" />

          </a>

        </div>


      </FadeIn>



    </section>
  );
}