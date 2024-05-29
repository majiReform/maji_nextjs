"use client"
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';

function HeroSection() {



    return (
        <div>
            <AliceCarousel
                autoHeight
                autoPlay
                // autoPlayControls
                disableDotsControls
                disableButtonsControls
                infinite
                autoPlayInterval={2000}
            >
                {["", "", ""].map((value, index) => {
                    return (
                <div key={index} className='relative h-[400px] md:h-[90vh] w-full'>
                    <Image src="/hero_image.png" className='w-full h-screen' fill={true} alt="Hero section" style={{zIndex: "20"}} />
                    <div className='bg-white bottom-0 mx-[20px] md:bottom-0 md:right-[40px] absolute md:w-1/2 p-4' style={{zIndex: "500"}}>
                        <div className='font-bold text-[20px]'>Amnesty International Report Exposes Widespread Gender-Based Violence in Conflict Zones</div>
                        <div className='text-[16px]'>A new report sheds light on the alarming prevalence of gender-based violence in conflict-affected areas around the world. The report documents cases of sexual violence, forced marriage, and other forms of abuse targeting women and girls.</div>
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
