
// import Image from "next/image";

import Footer from "@/shared/Footer";
import About from "@/components/homeComponents/About";
import SpecialOffer from "@/components/homeComponents/SpecialOffer";
import Testimonial from "@/components/homeComponents/Testimonial";
import BlogSection from "@/components/homeComponents/BlogSection";


export default function Home() {
  return (
    <div className="">
      <div>
        <About />
        <SpecialOffer />

        <Testimonial />

        <BlogSection />

        <Footer />
      </div>
    </div>
  );
}
