import React from 'react';
import SectionHeader from '../../shared/SectionHeader';
import mahbubImage from '../../../public/mahbub.png'
import Image from 'next/image';

const Testimonial = () => {
    return (
        <div className='w-full px-5 lg:px-8 xl:px-[8%] mt-24 p-4 md:p-0'>
            <SectionHeader subheader={'Testimonial'} header={'What Our Customer Say'} description={"Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest!"} />

            <div className='md:flex items-center gap-[83px] pt-4'>
                {/* image */}
                <div>
                    <Image
                        src="/customer.jpg"
                        alt="image"
                        width={900}
                        height={1000}
                        className='rounded-4xl'
                    />
                </div>

                {/* content */}
                <div className='space-y-[32px]'>
                    <p className='text-[#4A4A52]'>I absolutely love Fresh Harvest! The quality of their produce is outstanding. It’s always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                    <p className='text-[18px]'><span className='font-medium'>— Jane Doe</span>, Professional Chef</p>
                </div>
            </div>

            <div className='mx-auto pt-8'>
                <div className='w-fit mx-auto space-x-1.5 flex'>
                    <div className='bg-[#749B3F] w-4 h-4 rounded-full'>
                    </div>
                    <div className='bg-[#D9D9D9] w-4 h-4 rounded-full'>
                    </div>
                    <div className='bg-[#D9D9D9] w-4 h-4 rounded-full'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;