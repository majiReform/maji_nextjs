import Image from "next/image";
import Slider from "react-slick";


interface PartnersListInterface {
    pictureURL: string
    title: string
}

const partnersList: PartnersListInterface[] = [
    {
        pictureURL: "/Association For Progressive Communications.jpg",
        title: "Association For Progressive Communications"
    },
    {
        pictureURL: "/Leighday and Co Solicitors UK.jpg",
        title: "Leighday and Co Solicitors UK"
    },
    {
        pictureURL: "/French Embassy in Nigeria.jpg",
        title: "French Embassy In Nigeria"
    },
    {
        pictureURL: "/United States Consulate General Lagos.png",
        title: "United State Consulate Lagos"
    },
    {
        pictureURL: "/Mozilla_Foundation _1.png",
        title: "Mozilla Foundation"
    },
    {
        pictureURL: "/Meliore Foundation logo.jpg",
        title: "The Meliore Foundation"
    },
    {
        pictureURL: "/New Media Advocacy Project.png",
        title: "New Media Advocacy Project"
    },
    {
        pictureURL: "/Open Culture Foundation.png",
        title: "Open Culture Foundation"
    },
    {
        pictureURL: "/National Democratic Institute.png",
        title: "National Democratic Institute"
    },
    {
        pictureURL: "/Stakeholder Democracy Network.png",
        title: "Stakeholder Democracy Network"
    },
    {
        pictureURL: "/Lush Charity.jpg",
        title: "Lush Charity"
    },
    {
        pictureURL: "/Collaborative Media Advocacy Platform.jpg",
        title: "Collaborative Media Advocacy Platform"
    },
    {
        pictureURL: "/Environmental Rights Action.png",
        title: "Environmental Rights Action"
    },
    {
        pictureURL: "/Home Of Mother Earth Foundation.jpg",
        title: "Home Of Mother Earth Foundation"
    },
    {
        pictureURL: "/National Endownment for Democracy.png",
        title: "National Endownment for Democracy"
    },
    {
        pictureURL: "/Global Green Grants Funds.jpg",
        title: "Global Green Grants Funds.jpg"
    }
];

function PartnersAndDonorsSection() {

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="bg-black px-8 md:px-20 py-8">
            <div className="text-center text-white mb-4 font-bold">Our Partners and Donors</div>
            <Slider
                {...settings}
            >
                {partnersList.map((partner, index) => {
                    return (
                        <div key={index} className="px-8">
                            <div className={`relative ${partner.pictureURL == "/United_States_Consulate_General_Lagos_1.png" ? "w-[120px]" : ""} h-[120px] mx-auto`}>
                                <img src={partner.pictureURL} alt="Partner list" className="mx-auto" style={{ backgroundSize: "contain", width: "auto", height: "100%" }} />
                            </div>
                            <div className="text-white text-center text-[14px] mt-4">{partner.title}</div>
                        </div>
                    );
                })}
            </Slider>
            {/* <div className="flex justify-between">
            </div> */}
        </div>
    );
}



export {
    PartnersAndDonorsSection
}
