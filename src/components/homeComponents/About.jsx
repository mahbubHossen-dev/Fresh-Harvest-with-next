import React from 'react';
import Image from 'next/image';
import aboutVegetable from '../../../public/about_vegetable.webp'
import customer from '../../../public/customer.jpg'

export default function About() {
  return (
    <div>
            <div className='w-full px-5 lg:px-8 xl:px-[8%]'>
                {/* <SectionHeader subheader={'Testimonial'} header={'What Our Customer Say'} description={"Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest!"} /> */}
                {/* /Image */}
                <div className=' grid md:grid-cols-2 items-center space-x-10 p-4 md:p-0'>
                    <div className='relative mx-auto mb-24 md:mb-0'>
                        <div className='text-center'>
                            <Image width={400} height={400} className='mx-auto' src={customer} alt='image' />
                        </div>
                        <div className='rounded px-[7px] py-[4px] md:px-[13px] absolute right-32 bg-[#f1eeee] bottom-28'> 
                            <h6 className='font-medium'>Fresh Harvest</h6>
                        </div>

                        <div className='px-[7px] py-[4px] md:px-[13px] absolute right-16 bg-[#f1eeee] -bottom-12 rounded-lg flex flex-col justify-center items-center space-y-1'>
                            <Image width={80} height={80} className='mx-auto' src={aboutVegetable} alt='image' />
                            <h6 className='font-medium'>Mashrum</h6>
                            <p className='font-medium'>$2.3kg/</p>
                            <button className='border py-[6px] px-[34px]'>Add to cart</button>
                        </div>
                    </div>

                    {/* content */}
                    <div className='space-y-4'>
                        <h4 className='text-[14px] md:text-xl'>About Us</h4>
                        <h2 className='text-3xl md:text-5xl'>About Fresh Harvest</h2>

                        <p className='text-[#4a4a52]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo praesentium temporibus excepturi impedit quaerat sequi maiores voluptatem beatae laborum fugit culpa ex eos, hic ullam iusto consectetur dolorum laudantium, quae non ea perferendis aperiam dolor. Optio, deserunt. Nisi, magni facilis, neque non sapiente recusandae unde dolorem quae reiciendis, voluptas qui.</p>
                        <button className='border border-[#FF6a1a] text-[#FF6a1a] p-4'>Read More</button>
                    </div>
                </div>

            </div>
        </div>
  )
}

