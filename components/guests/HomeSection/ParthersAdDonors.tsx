import Image from "next/image";
import Slider from "react-slick";


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

    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5
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
        <div className="bg-black px-20 py-8">
            <div className="text-center text-white mb-4 font-bold">Our Partners and Donors</div>
            <Slider
                {...settings}
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
            </Slider>
            {/* <div className="flex justify-between">
            </div> */}
        </div>
    );
}



export {
    PartnersAndDonorsSection
}
