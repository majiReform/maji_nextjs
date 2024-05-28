"use client"
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';

function AboutUsSection() {



    return (
        <div className='w-full flex gap-8 items-center px-20 my-12'>
            <div className='w-1/2 flex flex-col gap-12'>
                <div className='text-[32px] font-bold'>
                <div className='w-[200px] h-[10px] bg-yellow mb-2 rounded-[8px]'></div>
                    About Us
                    </div>
                <div className='text-[20px]'> Registered under the Corporate Affairs Commission of Nigeria (CAC) with registration number (CAC/IT/NO 109270), The Media Awareness and Justice Initiative (MAJI), is a culmination of several years of disparate participatory trainings and capacity building for young people, stakeholders and marginalized communities across Nigeria. </div>
                <div className='text-[20px]'>Using "human centered" methodologies and technologies, we democratize information, increase awareness, build capacity and works towards providing sustainable development. </div>
                <div className='text-[20px]'>By the adoption of human centered methodologies, we are referring to a vertical process that supports the sustained interaction between marginalized groups, local communities, and government with a view to sustainably impacting them. </div>
                <button className='w-fit px-8 py-2 border border-[2px] rounded-[8px] font-bold'>More About Maji</button>
            </div>
            <div className='w-1/2 h-full'>
                <div className=' relative h-[540px] w-full'>
                    <Image src="/about_us_image.png" fill={true} alt='Abut us image' />
                </div>
            </div>
        </div>
    );
}


export {
    AboutUsSection
}
