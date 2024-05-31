"use client"
import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
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
        setList(result.response.thematicAreas.results);
        setStatus("idle");
    }

    useEffect(() => {
        fetchHero();
    }, []);

    if(status == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

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
        <div className="py-8 mx-8 xl:py-10 xl:mx-20">
            <div className="font-bold text[20px] xl:text-[32px] text-center mb-10 w-full xl:w-[60%] xl:mx-auto">Using Technology to Empower Rural and urban last mile communities across Nigeria</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

