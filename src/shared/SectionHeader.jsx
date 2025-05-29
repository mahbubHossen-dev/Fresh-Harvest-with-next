import React from 'react';

const SectionHeader = ({subheader, header, description}) => {
    return (
        <div className='text-center'>
            <h5 className='text-[14px] md:text-[20px] text-[#749B3F] font-medium'>{subheader}</h5>
            <p className=' text-[32px] md:text-[48px] font-medium my-[16px]'>{header}</p>
            <p className='w-[342px] md:w-[551px] mx-auto'>{description}</p>
        </div>
    );
};

export default SectionHeader;