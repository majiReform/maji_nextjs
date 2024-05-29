import Image from "next/image";

function AboutWhereWeWork() {
    return (
        <div className="ml-20 relative flex items-center justify-between my-10" style={{zIndex: "500"}}>
            <div className="w-[60%] bg-white mr-[-100px] rounded-[10px] px-12 py-10" style={{zIndex: "50", boxShadow: "0px 0px 10px 0px #2222221A"}}>
                <div className="text-[32px] font-bold mb-4">Where We Work</div>
                <div className="text-[20px]">
                    The Organization is an independent media initiative that supports independent media projects, development of innovative ICT technologies for community use, promotes participatory citizen journalism initiatives to increase transparency and accountability. We also work in areas with unbalanced news outlets, supports individuals and groups to produce media in various accessible forms on relevant issues and topics that fit in with our priorities and ongoing campaigns. We also work with local groups providing support for strategy planning and media production.
                </div>
            </div>
            <div className="relative h-[65vh] w-[60%]" style={{zIndex: "20"}}>
                <Image src="/image_17.png" fill={true} alt="Image 17" />
            </div>
        </div>
    );
}

export {
    AboutWhereWeWork
}
