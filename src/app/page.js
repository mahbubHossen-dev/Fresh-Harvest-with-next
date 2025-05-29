import About from "@/components/homeComponents/About";
import Image from "next/image";
import SpecialOffer from "./Home/components/SpecialOffer";
import Testimonial from "./Home/components/Testimonial";
import BlogSection from "./Home/components/BlogSection";
import Footer from "@/shared/Footer";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
