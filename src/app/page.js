
import SpecialOffer from "../components/homeComponents/SpecialOffer";
import Testimonial from '../components/homeComponents/Testimonial'
import FreshProductComponent from "../components/homeComponents/FreshProductComponent";
import AboutUs from "./aboutUs/page";


export default function Home() {
  return (
    <div className="">
      <div>
        <FreshProductComponent />
        <AboutUs />
        <SpecialOffer />

        <Testimonial />

        {/* <BlogSection /> */}

      </div>
    </div>
  );
}
