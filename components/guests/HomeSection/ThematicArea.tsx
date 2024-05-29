"use client"
import { guestThematicAreaList } from "@/lib/features/guestAPI/homePage";
import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function GuestThematicArea () {

    const [list, setList] = useState<ThematicAreaInterface[]>([]);
    const [status, setStatus] = useState("loading");

    const router = useRouter();

    const fetchHero = async () => {
        const result = await guestThematicAreaList(1, 4);
        // console.log(result.response.thematicAreas.results);
        setList(result.response.thematicAreas.results);
        setStatus("idle");
    }

    useEffect(() => {
        fetchHero();
    }, []);

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
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        }
    ];

    return (
        <div className="py-8 mx-8 md:py-10 md:mx-20">
            <div className="font-bold text[20px] md:text-[32px] text-center mb-10 w-full md:w-[60%] md:mx-auto">Using Technology to Empower Rural and urban last mile communities across Nigeria</div>
            <div className="flex flex-col md:flex-row gap-6">
            {list.map((record) => {
                    return (
                        <div className="w-full bg-white relative border border-[#E6E6E6] rounded-[10px] overflow-hidden">
                            <div className="w-full h-[240px] relative z-10" style={{ backgroundImage: `url("${record.picture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                                {/* <Image src={record.picture} fill={true} alt="Thematic picture list" className="z-10" /> */}
                                <div className="top-[20px] left-[20px] absolute z-40 bg-black text-white rounded-[30px] font-bold w-fit px-4 py-[2px]">{record.category?.split("-").map(v => v[0].toLocaleUpperCase() + v.slice(1)).join(" ")}</div>
                            </div>
                            <div className="pt-4 flex flex-col justify-between w-full p-4 gap-4">
                                <div className="font-bold text-[16px]" style={{ textWrap: "wrap" }}>{record.title!!.length > 100 ? record.title?.slice(0, 100) + "..." : record.title}</div>
                                <button className="bg-yellow text-black rounded-[10px] py-2 font-bold" onClick={() => {router.push(`/thematicarea/${record._id}`)}}>Read</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export {
    GuestThematicArea
}

