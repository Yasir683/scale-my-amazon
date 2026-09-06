"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function Reviews() {
  const reviews = [
    {
      text: "Yasir completely turned around our bleeding PPC campaigns. Our ACoS dropped from 42% down to 15.2% within just two months. His knowledge of Amazon keyword mapping is phenomenal.",
      name: "Thomas H.",
      role: "FBA Private Label Owner (UK Store)",
      image: "/review-1.png",
    },
    {
      text: "Incredible attention to detail. He discovered a low-competition product angle that generated over $60k in our very first quarter. Best VA decision we have ever made for our brand.",
      name: "Alaina M.",
      role: "CEO, Elevate Brands LLC (US Store)",
      image: "/review-2.png",
    },
    {
      text: "Managing an enterprise Seller Central account is stressful, but Yasir handles everything flawlessly from shipment mapping to listing audits. Highly reliable and great communication!",
      name: "David K.",
      role: "Operations Lead, Nexus Goods (Germany)",
      image: "/review-3.png",
    },
  ];


  return (
    <section id="reviews" className="bg-[#111827]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">


        <FadeIn direction="down">

          <div className="text-center">

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              What FBA Brand Owners Say
            </h2>

            <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#FF9900] to-orange-400" />

          </div>

        </FadeIn>



        <div className="mt-14 grid gap-6 lg:grid-cols-3">


          {reviews.map((review, index) => (

            <FadeIn
              key={review.name}
              direction="up"
              delay={index * 0.12}
            >

              <figure className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0B0F19] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#FF9900]/40 hover:shadow-xl">


                <blockquote className="flex-1 text-[15px] italic leading-relaxed text-slate-300">
                  "{review.text}"
                </blockquote>



                <hr className="my-6 border-white/10" />



                <figcaption className="flex items-center gap-4">


                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#FF9900] to-orange-400 p-[2px]">


                    <span className="block h-full w-full overflow-hidden rounded-full ring-2 ring-[#0B0F19]">


                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />


                    </span>


                  </span>



                  <div>

                    <p className="font-bold text-white">
                      {review.name}
                    </p>


                    <p className="text-sm text-[#FF9900]">
                      {review.role}
                    </p>


                  </div>


                </figcaption>


              </figure>


            </FadeIn>

          ))}


        </div>


      </div>

    </section>
  );
}