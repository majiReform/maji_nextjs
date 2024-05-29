import Image from "next/image";

function GuestAboutHeader() {
    return (
        <div className="px-8 py-20 md:px-20 md:py-40 relative flex justify-center items-center" style={{zIndex: "10"}}>
            <Image src="/image 14.png" fill={true} alt="Im" className="absolute left-0 top-0" style={{zIndex: "10", position: "absolute"}} />
            <div style={{zIndex: "50"}} className="absolute top-[50%] left-8 md:left-20 text-white font-bold">About Us</div>
        </div>
    );
}

export {
    GuestAboutHeader
}
