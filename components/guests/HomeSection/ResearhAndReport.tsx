import { BsCaretRight } from "react-icons/bs";

function GuestResearchAndReport() {

    const thematicarea = [
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        }
    ];

    return (
        <div className="py-10 pl-8 md:px-20 bg-[#F6F4F4]">
            <div className="text-center mb-10 pr-8 md:pr-0 flex justify-between items-center">
                <div>
                    <div className="w-[80px] md:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] md:text-[32px] font-bold font-bold">Research and Report</div>
                </div>
                <button className="flex gap-2 items-center">See More <BsCaretRight /></button>
            </div>
            <div className="flex gap-8 w-full overflow-x-auto">
                {thematicarea.map((record) => {
                    return (
                        <div className="w-[80%] md:w-full shrink-0 md:shrink bg-white relative border border-[#E6E6E6] rounded-[10px] overflow-hidden">
                            <div className="w-full h-[300px] relative z-10" style={{ backgroundImage: `url("${record.picture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", backgroundPosition: "center" }}>
                                {/* <Image src={record.picture} fill={true} alt="Thematic picture list" className="z-10" /> */}
                                <div className="top-[20px] left-[20px] absolute z-40 bg-black text-white rounded-[30px] font-bold w-fit px-4 py-[2px]">{record.category?.split("-").map(v => v[0].toLocaleUpperCase() + v.slice(1)).join(" ")}</div>
                            </div>
                            <div className="pt-4 flex flex-col justify-between w-full p-4 gap-4">
                                <div className="font-bold" style={{ textWrap: "wrap" }}>{record.title!!.length > 100 ? record.title?.slice(0, 100) + "..." : record.title}</div>
                                <button className="bg-yellow text-black rounded-[10px] py-2 font-bold">Read</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export {
    GuestResearchAndReport
}

