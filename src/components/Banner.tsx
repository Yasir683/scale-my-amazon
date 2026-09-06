"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";


export default function Banner() {
  return (
    <section id="banner" className="bg-[#FF9900]">

      <div className="mx-auto max-w-4xl px-6 py-14 text-center lg:py-16">


        {/* Logo Animation */}

        <FadeIn delay={0.1}>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">

            <Image
              src="/logo.png"
              alt="Scale My Amazon Logo"
              width={64}
              height={64}
              className="object-cover"
            />

          </div>

        </FadeIn>





        {/* Heading Animation */}

        <FadeIn delay={0.2}>

          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">

            Manager at{" "}

            <span className="text-white">
              Scale My Amazon
            </span>

          </h2>

        </FadeIn>






        {/* Description Animation */}

        <FadeIn delay={0.3}>

          <p className="mx-auto mt-4 max-w-2xl text-base font-medium leading-relaxed text-[#0B1F3A]/80 sm:text-lg">

            Professional Amazon VA services designed to scale your business to
            new heights. Proven strategies, real results, and unlimited growth
            potential.

          </p>

        </FadeIn>



      </div>

    </section>
  );
}