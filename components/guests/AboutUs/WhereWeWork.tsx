import Image from "next/image";

function AboutWhereWeWork() {
    return (
        <div className="my-16" id="aboutwherewework">
            <div className="text-[20px] xl:text-[32px] font-bold mb-20 text-center">Where We Work</div>
            <div className="block xl:hidden relative w-full h-[240px] xl:h-[65vh] xl:w-[60%]" style={{ zIndex: "20", backgroundImage: `url("/image_17.png")`, width: "100%", height: "auto", backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/* <Image src="/image_17.png" fill={true} alt="Image 17" /> */}
                </div>
            <div  className="mx-8 mt-[-50px] xl:ml-20 relative flex flex-col-reverse xl:flex-row items-center justify-between my-10" style={{ zIndex: "500" }}>
                <div className="w-full xl:w-[60%] bg-white xl:mr-[-100px] rounded-[10px] p-6 xl:px-12 xl:py-10" style={{ zIndex: "50", boxShadow: "0px 0px 10px 0px #2222221A" }}>
                    <div className="text-[16px] xl:text-[20px]">
                        The Organization is an independent media initiative that supports independent media projects, development of innovative ICT technologies for community use, promotes participatory citizen journalism initiatives to increase transparency and accountability. We also work in areas with unbalanced news outlets, supports individuals and groups to produce media in various accessible forms on relevant issues and topics that fit in with our priorities and ongoing campaigns. We also work with local groups providing support for strategy planning and media production.
                    </div>
                </div>
                <div className="hidden xl:block relative w-full h-[200px] xl:h-[65vh] xl:w-[60%]" style={{ zIndex: "20" }}>
                    <Image src="/image_17.png" fill={true} alt="Image 17" />
                </div>
            </div>
        </div>
    );
}

export {
    AboutWhereWeWork
}
