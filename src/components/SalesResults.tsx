"use client";

import FadeIn from "@/components/animations/FadeIn";

interface SalesItem {
  title: string;
  marketplace: string;
  sales: string;
  orders: string;
  units: string;
  date: string;
}

export default function SalesResults({ sales }: { sales: SalesItem[] }) {
  return (
    <section className="bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <FadeIn direction="up">

          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Sales Results
            </h2>

            <p className="mt-4 text-slate-400">
              Real Amazon performance results from managed accounts.
            </p>
          </div>

        </FadeIn>


        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {sales.map((item, index) => (

            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.12}
            >

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">


                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>


                <p className="mt-2 text-sm text-[#FF9900]">
                  {item.marketplace}
                </p>


                <div className="mt-6 space-y-4">


                  <div className="rounded-xl bg-[#FF9900]/10 p-4">
                    <p className="text-sm text-slate-400">
                      Total Sales
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {item.sales}
                    </p>
                  </div>


                  <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-400">
                        Orders
                      </p>
                      <p className="text-lg font-bold text-white">
                        {item.orders}
                      </p>
                    </div>


                    <div className="rounded-xl bg-white/5 p-4">
                      <p className="text-xs text-slate-400">
                        Units
                      </p>
                      <p className="text-lg font-bold text-white">
                        {item.units}
                      </p>
                    </div>

                  </div>


                </div>


                <p className="mt-5 text-xs uppercase tracking-wider text-slate-500">
                  {item.date}
                </p>


              </div>

            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}