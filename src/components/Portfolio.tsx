"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function Portfolio() {
  const cases = [
    {
      title: "Live Sales Performance Walkthrough",
      description:
        "A real-time walkthrough of Amazon account management, sales performance, and growth strategies in action.",
      video: "/case-study.mp4",
      image: "/case-5.jpg",
      tag: "Live Demo",
      result: "£105,548.50 Revenue | 12,098 Units",
    },
    {
      title: "Strategic Growth Initiative",
      description:
        "Multi-month campaign resulting in strong revenue growth through listing optimization and strategic scaling.",
      image: "/case-1.png",
      year: "2024",
      result: "$237,880.67 Revenue | 6,243 Orders",
    },
    {
      title: "Top Sales Products Campaign",
      description:
        "Scaling high-performing ASINs through Amazon SEO, conversion optimization, and targeted PPC campaigns.",
      image: "/case-2.png",
      year: "2026",
      result: "$98,308.99 Revenue | 3,291 Orders",
    },
    {
      title: "Year-to-Date Performance",
      description:
        "Sales dashboard analysis with data-driven decisions to maintain consistent growth and profitability.",
      image: "/case-3.png",
      year: "2026",
      result: "$114,903.05 Revenue | 10,428 Orders",
    },
    {
      title: "Advertising ROAS Optimization",
      description:
        "PPC campaign management focused on improving ROAS and increasing profitable advertising sales.",
      image: "/case-4.png",
      year: "2025",
      result: "$471,962 Ad Sales | 6.50 ROAS",
    },
  ];


  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]"
    >

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">


        {/* Heading */}

        <FadeIn direction="up">

          <div className="text-center">

            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Case Studies & Portfolio
            </h2>


            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              Real results from actual Amazon seller optimization projects.
              Each case showcases measurable revenue growth and performance improvements.
            </p>

          </div>

        </FadeIn>



        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {cases.map((item, index) => (

            <FadeIn
              key={item.title}
              direction="up"
              delay={index * 0.12}
            >

              <article
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >


                {/* Media */}

                <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">


                  {item.video ? (

                    <video
                      src={item.video}
                      poster={item.image}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                  ) : (

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                  )}



                  {item.tag && (

                    <span className="absolute left-4 top-4 rounded-full bg-[#FF9900] px-3 py-1 text-xs font-semibold text-black shadow-lg">
                      {item.tag}
                    </span>

                  )}



                  {item.year && (

                    <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                      {item.year}
                    </span>

                  )}


                </div>



                {/* Content */}


                <div className="p-6">


                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>



                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>



                  <div className="mt-5 rounded-xl bg-[#FF9900]/10 px-4 py-3 text-sm font-semibold text-[#FF9900] transition group-hover:bg-[#FF9900]/20">
                    {item.result}
                  </div>



                  <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Proven Results
                  </p>


                </div>


              </article>


            </FadeIn>

          ))}


        </div>


      </div>

    </section>
  );
}