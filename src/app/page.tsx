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


export default function Home() {

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


      <MotionWrapper>
        <Portfolio />
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