"use client"
import { guestThematicAreaList } from '@/lib/features/guestAPI/homePage';
import { ThematicAreaInterface } from '@/lib/features/thematic/thematicSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

function HeroSection() {

    const [list, setList] = useState<ThematicAreaInterface[]>([]);
    const [status, setStatus] = useState("loading");

    const fetchHero = async () => {
        const result = await guestThematicAreaList(1, 3);
        // console.log(result.response.thematicAreas.results);
        setList(result.response.thematicAreas.results);
        setStatus("idle");
    }

    useEffect(() => {
        fetchHero();
    }, []);


    return (
        <div style={{zIndex: "900"}}>
            <AliceCarousel
                autoHeight
                autoPlay
                // autoPlayControls
                disableDotsControls
                disableButtonsControls
                infinite
                autoPlayInterval={2000}
            >
                {list.map((value, index) => {
                    return (
                <div key={index} className='relative h-[400px] md:h-[90vh] w-full'>
                    <Image src={value.picture!!} className='w-full h-screen' fill={true} alt="Hero section" style={{zIndex: "200"}} />
                    <div className='bg-white bottom-0 mx-[20px] md:bottom-0 md:right-[40px] w-[90%] absolute md:w-1/2 p-4' style={{zIndex: "900"}}>
                        <div className='font-bold text-[20px]'>{value.title}</div>
                        <div className='text-[16px]'>{value.details?.slice(0, 100)}...</div>
                    </div>
                </div>
                    );
                })}
                {/* <div className='h-screen w-full'>
                    <Image src="/maij_logo.png" fill={true} role="presentation" alt="Hero section" />
                </div> */}
                
            </AliceCarousel>
        </div>
    );
}


export {
    HeroSection
}
