import MotionWrapper from "@/components/MotionWrapper";
import Image from "next/image";
import Link from "next/link";

export default function LandingSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/landing-bg4.jpeg"
        alt="Amazon Growth Background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content — navbar ke niche se shuru */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center">
        {/* H4 */}
        <MotionWrapper delay={0.2}>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-[#FF9900] sm:text-base">
            Your Trusted Growth Partner
          </h4>
        </MotionWrapper>

        {/* H1 */}
        <MotionWrapper delay={0.4}>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            The Amazon Expert
            <br />
            That Gets You Seen & Sold.
          </h1>
        </MotionWrapper>

        {/* Paragraph */}
        <MotionWrapper delay={0.6}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            From the warehouse floor to the top of search results, we help brands
            dominate Amazon with data-backed PPC, sharp listing optimization, and
            round-the-clock account management built to maximize your ROI.
          </p>
        </MotionWrapper>

        {/* Button */}
        <MotionWrapper delay={0.8}>
          <Link
            href="#services"
            className="mt-8 inline-block rounded-xl bg-[#FF9900] px-8 py-4 text-base font-bold text-black transition hover:opacity-90 sm:text-lg"
          >
            Get Started
          </Link>
        </MotionWrapper>
      </div>
    </section>
  );
}