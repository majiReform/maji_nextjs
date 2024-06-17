import Image from "next/image";

function GuestAboutHeader() {
    return (
        <div className="relative flex justify-center items-center bg-black" style={{zIndex: "10"}}>
            {/* <Image src="/image 14.png" fill={true} alt="Im" className="absolute left-0 top-0" style={{zIndex: "10", position: "absolute"}} /> */}
            <img src="/image 14.png" style={{ zIndex: "20", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%" }} alt="Image 17" />
            <div style={{ zIndex: "30", backgroundColor: "rgba(0,0,0,0.5)", width: "100%", height: "100%", position: "absolute"}}></div>
            <div style={{zIndex: "50"}} className="absolute my-auto text-left left-16 md:left-24 xl:left-30 font-bold text-white text-[16px] md:text-[24px]">About Us</div>
        </div>
    );
}

export {
    GuestAboutHeader
}
