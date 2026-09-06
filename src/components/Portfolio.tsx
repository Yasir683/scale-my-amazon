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



  const newCases: PortfolioItem[] = cases.map((item) => ({

    title: item.title,

    description:
      item.challenge || item.strategy || "",

    image:
      item.image?.asset?.url || "/case-default.jpg",

    result:
      item.result || item.revenue || "",

  }));



  const allCases = [
    ...oldCases,
    ...newCases,
  ];



  return (

    <section
      id="portfolio"
      className="bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]"
    >


      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">



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





        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">



          {allCases.map((item,index)=>(


            <FadeIn
              key={item.title}
              direction="up"
              delay={index * 0.12}
            >


              <article
                className="
                group 
                flex 
                h-full 
                flex-col 
                overflow-hidden 
                rounded-2xl 
                border 
                border-white/10 
                bg-white/5 
                backdrop-blur-sm 
                transition-all 
                duration-300 
                hover:-translate-y-3 
                hover:shadow-2xl
                "
              >




                {/* Fixed Media Size */}

                <div className="relative h-[240px] w-full overflow-hidden bg-slate-900">



                  {item.video ? (


                    <video
                      src={item.video}
                      poster={item.image}
                      controls
                      muted
                      playsInline
                      preload="metadata"
                      className="
                      h-full 
                      w-full 
                      object-cover 
                      transition 
                      duration-700 
                      group-hover:scale-105
                      "
                    />


                  ) : (


                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                      h-full 
                      w-full 
                      object-cover 
                      transition 
                      duration-700 
                      group-hover:scale-110
                      "
                    />


                  )}




                  {item.tag && (

                    <span className="
                    absolute 
                    left-4 
                    top-4 
                    rounded-full 
                    bg-[#FF9900] 
                    px-3 
                    py-1 
                    text-xs 
                    font-semibold 
                    text-black
                    ">

                      {item.tag}

                    </span>

                  )}




                  {item.year && (

                    <span className="
                    absolute 
                    right-4 
                    top-4 
                    rounded-full 
                    bg-black/70 
                    px-3 
                    py-1 
                    text-xs 
                    font-semibold 
                    text-white
                    ">

                      {item.year}

                    </span>

                  )}



                </div>






                {/* Equal Content Height */}

                <div className="
                flex 
                flex-1 
                flex-col 
                p-6
                ">



                  <h3 className="text-lg font-bold text-white">

                    {item.title}

                  </h3>





                  <p className="
                  mt-3 
                  min-h-[72px]
                  text-sm 
                  leading-relaxed 
                  text-slate-400
                  ">

                    {item.description}

                  </p>






                  <div className="
                  mt-auto
                  rounded-xl 
                  bg-[#FF9900]/10 
                  px-4 
                  py-3 
                  text-sm 
                  font-semibold 
                  text-[#FF9900]
                  ">

                    {item.result}

                  </div>





                  <p className="
                  mt-4 
                  text-xs 
                  font-bold 
                  uppercase 
                  tracking-wider 
                  text-slate-500
                  ">

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