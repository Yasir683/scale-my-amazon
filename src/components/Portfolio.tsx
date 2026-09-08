"use client";

import FadeIn from "@/components/animations/FadeIn";

interface PortfolioItem {
  title: string;
  description?: string;
  video?: string;
  image?: string;
  tag?: string;
  year?: string;
  result?: string;
  revenue?: string;
}

interface PortfolioProps {
  cases: {
    title: string;
    marketplace?: string;
    challenge?: string;
    strategy?: string;
    result?: string;
    revenue?: string;
    image?: {
      asset?: {
        url?: string;
      };
    };
  }[];
}

export default function Portfolio({ cases }: PortfolioProps) {
  const oldCases: PortfolioItem[] = [
    {
      title: "Live Sales Performance Walkthrough",
      description:
        "A real-time walkthrough of Amazon account management, sales performance, and growth strategies in action.",
      video: "/case-study.mp4",
      image: "/case-5.jpg",
      tag: "Live Demo",
      revenue: "£105,548.50",
    },

    {
      title: "Strategic Growth Initiative",
      description:
        "Multi-month campaign resulting in strong revenue growth through listing optimization and strategic scaling.",
      image: "/case-1.png",
      year: "2024",
      revenue: "$237,880.67",
    },

    {
      title: "Top Sales Products Campaign",
      description:
        "Scaling high-performing ASINs through Amazon SEO, conversion optimization, and targeted PPC campaigns.",
      image: "/case-2.png",
      year: "2026",
      revenue: "$98,308.99",
    },

    {
      title: "Year-to-Date Performance",
      description:
        "Sales dashboard analysis with data-driven decisions to maintain consistent growth and profitability.",
      image: "/case-3.png",
      year: "2026",
      revenue: "$114,903.05",
    },

    {
      title: "Advertising ROAS Optimization",
      description:
        "PPC campaign management focused on improving ROAS and increasing profitable advertising sales.",
      image: "/case-4.png",
      year: "2025",
      revenue: "$471,962",
    },
  ];

  const newCases: PortfolioItem[] = cases.map((item) => ({
    title: item.title,
    description: item.challenge || item.strategy || "",
    image: item.image?.asset?.url || "/case-default.jpg",
    revenue: item.revenue || "",
  }));

  const allCases = [...oldCases, ...newCases];

  return (
    <section
      id="portfolio"
      className="bg-gradient-to-b from-[#030508] via-[#0D111A] to-[#070A10]"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">

        {/* Heading Animation - KEEP */}
        <FadeIn direction="up">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Case Studies & Portfolio
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-slate-400">
              Real results from actual Amazon seller optimization projects.
              Each case showcases measurable revenue growth and performance
              improvements.
            </p>
          </div>
        </FadeIn>

        {/* Cards - NO FadeIn Animation */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allCases.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#FF9900]/30 hover:shadow-2xl"
            >
              {/* Professional Media / Screenshot Frame */}
              <div className="relative h-[260px] w-full overflow-hidden bg-[#080C14] p-3 sm:h-[270px]">

                {/* Inner Screenshot Frame */}
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#0D131F]">

                  {item.video ? (
                    <video
                      src={item.video}
                      poster={item.image}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain p-1 transition duration-700 group-hover:scale-[1.02]"
                    />
                  )}

                  {/* Subtle Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Tag */}
                {item.tag && (
                  <span className="absolute left-6 top-6 rounded-full border border-[#FF9900]/30 bg-[#FF9900] px-3 py-1 text-xs font-semibold text-black shadow-lg">
                    {item.tag}
                  </span>
                )}

                {/* Year */}
                {item.year && (
                  <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {item.year}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>

                {/* Revenue */}
                <div className="mt-auto rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Total Revenue Generated
                  </p>

                  <div className="mt-2">
                    <span className="text-3xl font-extrabold tracking-tight text-[#FF9900]">
                      {item.revenue}
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Achieved through strategic Amazon growth
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}