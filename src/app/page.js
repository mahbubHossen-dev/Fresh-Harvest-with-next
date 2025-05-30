
import SpecialOffer from "../components/homeComponents/SpecialOffer";
import Testimonial from '../components/homeComponents/Testimonial'
import FreshProductComponent from "../components/homeComponents/FreshProductComponent";
import BlogSection from "../components/homeComponents/BlogSection";
import About from "../components/homeComponents/About";
import Banner from "../components/homeComponents/Banner";


export default function Home() {
  return (
    <div className="">
      <div>
        <Banner />
        <FreshProductComponent />

        <About/>

        <SpecialOffer />

        <Testimonial />

        <BlogSection />

      </div>
    </div>
  );
}
