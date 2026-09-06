"use client";

import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";


export default function About() {
  return (
    <section id="about" className="bg-[#F8F5EF]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">


        {/* Heading */}

        <FadeIn>

          <div className="text-center">

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-800 sm:text-5xl">
              About Me
            </h2>


            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-500">
              Transforming Amazon sellers into industry leaders through strategic
              expertise and proven results
            </p>


          </div>

        </FadeIn>






        {/* Stats Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {[
            {
              number: "6+",
              title: "Years of Experience",
              desc: "Deep expertise in Amazon business growth, market expansion, and strategic optimization.",
            },
            {
              number: "100+",
              title: "Successful Brands",
              desc: "Helping businesses launch, scale, and grow profitable Amazon brands worldwide.",
            },
            {
              number: "$10M+",
              title: "Revenue Generated",
              desc: "Combined growth achieved across managed Amazon seller accounts.",
            },
          ].map((card, index) => (

            <FadeIn
              key={card.title}
              delay={index * 0.15}
            >

              <div className="rounded-3xl bg-[#0B1F3A] p-8 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">


                <p className="text-5xl font-extrabold text-[#FF9900]">
                  {card.number}
                </p>


                <p className="mt-3 text-lg font-bold text-white">
                  {card.title}
                </p>


                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {card.desc}
                </p>


              </div>


            </FadeIn>

          ))}


        </div>







        {/* Expertise */}


        <FadeIn delay={0.3}>


          <div className="mt-8 rounded-3xl bg-[#0B1F3A] p-8 shadow-lg sm:p-10">


            <h3 className="text-2xl font-bold text-white">
              My Expertise
            </h3>



            <div className="mt-6 grid gap-6 sm:grid-cols-2">


              {[
                {
                  title: "Amazon Seller Central Management",
                  desc: "Full account optimization and performance tracking",
                },
                {
                  title: "Data-Driven Strategy",
                  desc: "Leveraging analytics for maximum ROI",
                },
                {
                  title: "Competitive Analysis",
                  desc: "Market positioning and pricing strategy",
                },
                {
                  title: "24/7 Support",
                  desc: "Always available for your Amazon business needs",
                },
              ].map((item, index) => (


                <FadeIn
                  key={item.title}
                  delay={0.4 + index * 0.1}
                >


                  <div className="flex items-start gap-3">


                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#FF9900]" />


                    <div>


                      <p className="font-semibold text-white">
                        {item.title}
                      </p>


                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {item.desc}
                      </p>


                    </div>


                  </div>


                </FadeIn>


              ))}


            </div>


          </div>


        </FadeIn>



      </div>

    </section>
  );
}