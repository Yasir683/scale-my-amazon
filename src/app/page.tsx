import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import About from "@/components/About";
import AmazonServices from "@/components/AmazonServices";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";
import SalesResults from "@/components/SalesResults";

import { client } from "@/sanity/client";
import { salesQuery, caseStudyQuery } from "@/sanity/queries";


export default async function Home() {


  const sales = await client.fetch(salesQuery);


  const caseStudies = await client.fetch(caseStudyQuery);



  return (

    <main>


      <Navbar />



      <MotionWrapper>
        <Hero />
      </MotionWrapper>



      <MotionWrapper>
        <Banner />
      </MotionWrapper>



      <MotionWrapper>
        <About />
      </MotionWrapper>



      <MotionWrapper>
        <AmazonServices />
      </MotionWrapper>



      <SalesResults sales={sales} />



      <MotionWrapper>
        <Portfolio cases={caseStudies} />
      </MotionWrapper>



      <MotionWrapper>
        <Reviews />
      </MotionWrapper>



      <MotionWrapper>
        <Contact />
      </MotionWrapper>



      <Footer />


    </main>

  );

}