import SectionHeader from '../../shared/SectionHeader';
import Image from 'next/image';

const BlogSection = () => {
  return (
    <div className="w-full px-5 lg:px-8 xl:px-[8%] mt-24 p-4 md:p-0">
      <SectionHeader
        subheader={'Our Blog'}
        header={'Fresh Harvest Blog'}
        description={
          "Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."
        }
      />

      <div className="md:flex justify-between gap-6 space-y-4 md:space-y-0 pt-[40px]">
        <div className="text-[18px]">
          <div className="relative w-full h-[270px] pb-[15px]">
            <Image
              src="/pic1.PNG"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full  rounded-3xl"
            />
          </div>
          <p className="text-[#4A4A52]">May 23, 2024</p>
          <h4 className="text-[#393c5a] font-medium">
            Exploring Seasonal Delights: A Guide to What’s Fresh Right Now
          </h4>
          <button className="text-[#FF6A1A] font-medium">Read More →</button>
        </div>
        <div className="text-[18px] ">
          <div className="relative w-full h-[270px] pb-[15px]">
            <Image
              src="/pic2.PNG"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full mb-4 rounded-3xl" 
            />
          </div>
          <p className="text-[#4A4A52]">May 23, 2024</p>
          <h4 className="text-[#212337] font-medium">
            Exploring Seasonal Delights: A Guide to What’s Fresh Right Now
          </h4>
          <button className="text-[#FF6A1A] font-medium">Read More →</button>
        </div>
        <div className="text-[18px] ">
          <div className="relative w-full h-[270px] pb-[15px]">
            <Image
              src="/pic3.PNG"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full mb-4 rounded-3xl"
            />
          </div>
          <p className="text-[#4A4A52]">May 23, 2024</p>
          <h4 className="text-[#212337] font-medium">
            Exploring Seasonal Delights: A Guide to What’s Fresh Right Now
          </h4>
          <button className="text-[#FF6A1A] font-medium">Read More →</button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;