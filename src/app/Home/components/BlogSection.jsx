import React from 'react';
import SectionHeader from '../../../shared/SectionHeader';
import mahbubImage from '../../../../public/mahbub.png'
import Image from 'next/image';

export default function BlogSection() {
  return (
    <div className='max-w-[1213px] mx-auto container mt-24'>
            <SectionHeader subheader={'Our Blog'} header={'Fresh Harvest Blog'} description={"Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration."} />

            <div className='flex justify-between gap-6 space-y-4 pt-[40px]'>
                <div className='text-[18px] bg-red-500'>
                    <Image width={50} height={50} className='mx-auto' src={mahbubImage} alt='image'/>
                    <p className='text-[#4A4A52] '>May 23, 2024</p>
                    <h4 className='text-[#212337] font-medium'>Exploring Seasonal Delights: A Guide to What’s Fresh Right Now</h4>
                    <button className='text-[#FF6A1A] font-medium'>READ MORE →</button>
                </div>
                <div className='text-[18px] bg-red-500'>
                    <Image width={50} height={50} className='mx-auto' src={mahbubImage} alt='image'/>
                    <p className='text-[#4A4A52] '>May 23, 2024</p>
                    <h4 className='text-[#212337] font-medium'>Exploring Seasonal Delights: A Guide to What’s Fresh Right Now</h4>
                    <button className='text-[#FF6A1A] font-medium'>READ MORE →</button>
                </div>
                <div className='text-[18px] bg-red-500'>
                    <Image width={50} height={50} className='mx-auto' src={mahbubImage} alt='image'/>
                    <p className='text-[#4A4A52] '>May 23, 2024</p>
                    <h4 className='text-[#212337] font-medium'>Exploring Seasonal Delights: A Guide to What’s Fresh Right Now</h4>
                    <button className='text-[#FF6A1A] font-medium'>READ MORE →</button>
                </div>
            </div>
        </div>
  )
}
