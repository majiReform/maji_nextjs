"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AliceCarousel from 'react-alice-carousel';

function AboutUsSection() {

    const router = useRouter();

    return (
        <div className='px-8 md:px-20 my-12' style={{zIndex: "100"}}>
            <div className='text-left text-[20px] md:text-[32px] font-bold mb-4'>
                <div className='w-[80px] md:w-[200px] h-[10px] bg-yellow mb-2 rounded-[8px]'></div>
                About Us
            </div>
            <div className='w-full flex flex-col-reverse md:flex-row gap-8 items-center'>
            <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-12'>
                <div className='text-[16px] md:text-[20px]'> Registered under the Corporate Affairs Commission of Nigeria (CAC) with registration number (CAC/IT/NO 109270), The Media Awareness and Justice Initiative (MAJI), is a culmination of several years of disparate participatory trainings and capacity building for young people, stakeholders and marginalized communities across Nigeria. </div>
                <div className='text-[16px] md:text-[20px]'>Using "human centered" methodologies and technologies, we democratize information, increase awareness, build capacity and works towards providing sustainable development. </div>
                <div className='text-[16px] md:text-[20px]'>By the adoption of human centered methodologies, we are referring to a vertical process that supports the sustained interaction between marginalized groups, local communities, and government with a view to sustainably impacting them. </div>
                <div className='text-center md:text-left'>
                    <button className='w-fit px-8 py-2 border border-[2px] rounded-[8px] font-bold' onClick={() => {router.push("/aboutus")}}>More About Maji</button>
                </div>
            </div>
            <div className='w-full md:w-1/2 h-full'>
                <div className=' relative h-[280px] md:h-[540px] w-full'>
                    <Image src="/about_us_image.png" fill={true} alt='About us image' />
                </div>
            </div>
            </div>
        </div>
    );
}


export {
    AboutUsSection
}
