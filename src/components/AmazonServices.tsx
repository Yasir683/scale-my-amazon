"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function AmazonServices() {
  const services = [
    {
      title: "Product Research & Sourcing",
      description:
        "Finding profitable Amazon opportunities through advanced market research, competitor analysis, and reliable supplier sourcing.",
      icon: "📊",
    },
    {
      title: "Amazon Listing Optimization",
      description:
        "Creating high-converting listings with optimized titles, keywords, images, and A+ content to improve rankings and sales.",
      icon: "📝",
    },
    {
      title: "Amazon PPC Management",
      description:
        "Managing and optimizing PPC campaigns with data-driven strategies to reduce ACOS and increase ROI.",
      icon: "📈",
    },
    {
      title: "Amazon Store Design",
      description:
        "Building professional Amazon storefronts with brand-focused layouts to create a premium customer experience.",
      icon: "🏪",
    },
    {
      title: "Competitor Analysis",
      description:
        "Analyzing competitors, pricing strategies, keywords, and market trends to build winning strategies.",
      icon: "🎯",
    },
    {
      title: "Brand Registry Support",
      description:
        "Helping brands with Amazon Brand Registry, protection, and long-term growth strategies.",
      icon: "🛡️",
    },
  ];


  return (
    <section
      id="services"
      className="bg-gradient-to-b from-[#0B1F3A] via-[#071426] to-[#0B1F3A]"
    >

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">


        {/* Section Heading */}

        <FadeIn direction="up">

          <div className="text-center">

            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Amazon Services
            </h2>


            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Comprehensive Amazon solutions designed to scale your business,
              increase revenue, and build successful brands.
            </p>


          </div>

        </FadeIn>



        {/* Services Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {services.map((service, index) => (

            <FadeIn
              key={service.title}
              direction="up"
              delay={index * 0.12}
            >

              <div
                className="group rounded-2xl border border-white/10 border-l-4 border-l-[#FF9900] bg-[#10243F]/70 p-7 transition-all duration-300 hover:-translate-y-3 hover:bg-[#142B4B] hover:shadow-xl"
              >


                {/* Icon */}

                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF9900]/15 text-2xl transition-transform duration-300 group-hover:scale-110"
                >
                  {service.icon}
                </div>



                {/* Title */}

                <h3 className="mt-5 text-xl font-bold text-white">
                  {service.title}
                </h3>



                {/* Description */}

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>



                {/* Link */}

                <div
                  className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#FF9900] transition-all group-hover:gap-3"
                >
                  Learn more →
                </div>


              </div>


            </FadeIn>

          ))}


        </div>


      </div>


    </section>
  );
}