"use client"
import { SpinLoader } from '@/components/LoadingAnimation/spinLoader';
import { guestThematicAreaList } from '@/lib/features/guestAPI/homePage';
import { ThematicAreaInterface } from '@/lib/features/thematic/thematicSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Slider from "react-slick";

function HeroSection() {

    const [list, setList] = useState<ThematicAreaInterface[]>([]);
    const [status, setStatus] = useState("loading");

    const fetchHero = async () => {
        const result = await guestThematicAreaList(1, 3);
        setList(result.response.thematicAreas.results);
        setStatus("idle");
    }

    useEffect(() => {
        fetchHero();
    }, []);

    if (status == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div style={{ zIndex: "200" }}>
            <Slider {...settings}
            >
                {list.map((value, index) => {
                    return (
                        <div key={index} className='relative h-[400px] md:h-[90vh] w-full'>
                            <img src={value.picture!!} style={{width: "auto", height: "100%", backgroundSize: "cover", backgroundPosition: "center", margin: "0 auto"}} />
                            {/* <Image src={value.picture!!} className='w-full h-screen' fill={true} alt="Hero section" style={{ zIndex: "200", backgroundRepeat: "no-repeat" }} /> */}
                            <div className='bg-white bottom-0 mx-[20px] md:bottom-0 md:right-[40px] w-[90%] absolute md:w-1/2 p-4 flex flex-col gap-4' style={{ zIndex: "900" }}>
                                <div className='flex justify-around md:justify-start md:gap-4 w-full'>
                                    <div className={`h-[10px] w-[100px] rounded-[10px] ${(index + 1) == 1 ? "bg-yellow" : "bg-greybg"}`}></div>
                                    <div className={`h-[10px] w-[100px] rounded-[10px] ${(index + 1) == 2 ? "bg-yellow" : "bg-greybg"}`}></div>
                                    <div className={`h-[10px] w-[100px] rounded-[10px] ${(index + 1) == 3 ? "bg-yellow" : "bg-greybg"}`}></div>
                                </div>
                                <div className='font-bold text-[20px]'>{value.title}</div>
                                <div className='text-[16px]'>{value.details?.slice(0, 100)}...</div>
                            </div>
                        </div>
                    );
                })}

            </Slider>
        </div>
    );
}


export {
    HeroSection
}
