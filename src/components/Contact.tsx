"use client";

import MotionWrapper from "@/components/MotionWrapper";
import FadeIn from "@/components/animations/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-[#F1F5F9] to-[#DCE8FF]"
    >

      <MotionWrapper>

        <div className="mx-auto max-w-3xl px-6 py-20 text-center lg:py-24">

          <FadeIn>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0B1F3A] sm:text-5xl">
              Ready to Scale Your Amazon Business?
            </h2>

          </FadeIn>


          <FadeIn delay={0.2}>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-slate-600">
              Transform your Amazon business with proven strategies and expert
              guidance. Let's discuss how I can help you achieve your growth
              goals.
            </p>

          </FadeIn>


          <FadeIn delay={0.3}>

            <p className="mt-3 text-sm text-slate-500">
              Available for consultations 7 days a week. Quick response
              guaranteed within 2 hours.
            </p>

          </FadeIn>



          <FadeIn delay={0.4}>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="https://wa.me/923097697339"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
              >
                WhatsApp
              </a>


              <a
                href="mailto:chaudharyyasirbwn@email.com"
                className="rounded-xl bg-[#0B1F3A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#162B4D]"
              >
                Email
              </a>

            </div>

          </FadeIn>



          <FadeIn delay={0.5}>

            <div className="mx-auto mt-10 max-w-md rounded-2xl bg-[#0B1F3A] p-6 shadow-xl">

              <p className="text-sm text-slate-400">
                Direct Line:
              </p>


              <a
                href="tel:+923097697339"
                className="mt-2 block text-2xl font-extrabold text-[#FF9900] sm:text-3xl"
              >
                +92 309-7697339
              </a>


              <p className="mt-2 text-xs text-slate-400">
                Call or WhatsApp for immediate consultation
              </p>

            </div>

          </FadeIn>


        </div>

      </MotionWrapper>

    </section>
  );
}