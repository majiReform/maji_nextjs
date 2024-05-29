import Image from "next/image";
import AliceCarousel from "react-alice-carousel";


interface PartnersListInterface {
    pictureURL: string
    title: string
}

const partnersList: PartnersListInterface[] = [
    {
        pictureURL: "/Association_For_Progressive_Communications_1.png",
        title: "Association For Progressive Communications"
    },
    {
        pictureURL: "/Leighday_and_Co_Solicitors_UK_1.png",
        title: "Leighday and Co Solicitors UK"
    },
    {
        pictureURL: "/French_Embassy_in_Nigeria_1.png",
        title: "French Embassy In Nigeria"
    },
    {
        pictureURL: "/United_States_Consulate_General_Lagos_1.png",
        title: "United State Consulate Lagos"
    },
    {
        pictureURL: "/Mozilla_Foundation _1.png",
        title: "Mozilla Foundation"
    },
    {
        pictureURL: "/Meliore_Foundation_logo_1.png",
        title: "The Meliore Foundation"
    }
];

function PartnersAndDonorsSection () {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
        1025: { items: 4 },
        1026: { items: 5 },
    };

    return (
        <div className="bg-black px-20 py-8">
            <div className="text-center">Our Partners and Donors</div>
            <div className="flex justify-between">
            <AliceCarousel
                autoHeight
                autoPlay
                responsive={responsive}
                // autoPlayControls
                disableDotsControls
                disableButtonsControls
                mouseTracking
                infinite
                autoPlayInterval={2000}
            >
                {partnersList.map((partner, index) => {
                return (
                    <div key={index} className="px-8">
                        <div className={`relative ${partner.pictureURL == "/United_States_Consulate_General_Lagos_1.png" ? "w-[120px]" : ""} h-[120px] mx-auto`}>
                        <Image src={partner.pictureURL} fill={true} alt="Partner list" style={{backgroundSize: "contain", width: "100%"}} />
                        </div>
                        <div className="text-white text-center text-[14px] mt-4">{partner.title}</div>
                    </div>
                );
            })}
            </AliceCarousel>
            
            </div>
        </div>
    );
}



export {
    PartnersAndDonorsSection
}
