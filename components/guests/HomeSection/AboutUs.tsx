"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function AboutUsSection() {

    const router = useRouter();

    return (
        <div className='px-8 xl:px-20 my-12' style={{zIndex: "100"}}>
            <div className='text-left text-[20px] xl:text-[32px] font-bold mb-4'>
                <div className='w-[80px] xl:w-[200px] h-[10px] bg-yellow mb-2 rounded-[8px]'></div>
                About Us
            </div>
            <div className='w-full flex flex-col-reverse xl:flex-row gap-8 items-center'>
            <div className='w-full xl:w-1/2 flex flex-col gap-4 xl:gap-12'>
                <div className='text-[16px] xl:text-[20px]'> Registered under the Corporate Affairs Commission of Nigeria (CAC) with registration number (CAC/IT/NO 109270), The Media Awareness and Justice Initiative (MAJI), is a culmination of several years of disparate participatory trainings and capacity building for young people, stakeholders and marginalized communities across Nigeria. </div>
                <div className='text-[16px] xl:text-[20px]'>Using "human centered" methodologies and technologies, we democratize information, increase awareness, build capacity and works towards providing sustainable development. </div>
                <div className='text-[16px] xl:text-[20px]'>By the adoption of human centered methodologies, we are referring to a vertical process that supports the sustained interaction between marginalized groups, local communities, and government with a view to sustainably impacting them. </div>
                <div className='text-center xl:text-left'>
                    <button className='w-fit px-8 py-2 border border-[2px] rounded-[8px] font-bold' onClick={() => {router.push("/aboutus")}}>More About MAJI</button>
                </div>
            </div>
            <div className='w-full xl:w-1/2 gap-8 h-full'>
                <div className=' relative w-full mx-auto'>
                    <img src="/about_us_image.png" alt='About us image' className='my-auto rounded-lg' style={{backgroundSize: "contain", height: "auto", width: "100%"}} />
                </div>
            </div>
            </div>
        </div>
    );
}


export {
    AboutUsSection
}
