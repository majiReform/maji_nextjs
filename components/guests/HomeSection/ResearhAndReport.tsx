import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
import { guestResearchList } from "@/lib/features/guestAPI/homePage";
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCaretRight } from "react-icons/bs";

function GuestResearchAndReport() {


    const [list, setList] = useState<ResearchAndReportInterface[]>([]);
    const [status, setStatus] = useState("loading");

    const router = useRouter();

    const fetchHero = async () => {
        const result = await guestResearchList(1, 3);
        setList(result.response.details.results);
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
        }
    ];

    return (
        <div className="py-10 pl-8 xl:px-20 bg-[#F6F4F4]">
            <div className="text-center mb-10 pr-8 xl:pr-0 flex justify-between items-center">
                <div>
                    <div className="w-[80px] xl:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] xl:text-[32px] font-bold font-bold">Research and Report</div>
                </div>
                <button className="flex gap-2 items-center" onClick={() => {router.push("/researchandreport")}}>See More <BsCaretRight /></button>
            </div>
            <div className="flex gap-8 w-full overflow-x-auto">
                {list.map((record) => {
                    return (
                        <div className="w-[80%] xl:w-full shrink-0 xl:shrink bg-white relative border border-[#E6E6E6] rounded-[10px] overflow-hidden">
                            <div className="w-full h-[300px] relative z-10" style={{ backgroundImage: `url("${record.pictureURL}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", backgroundPosition: "center" }}>
                                {/* <Image src={record.picture} fill={true} alt="Thematic picture list" className="z-10" /> */}
                                <div className="top-[20px] left-[20px] absolute z-40 bg-black text-white rounded-[30px] font-bold w-fit px-4 py-[2px]">{record.category?.split("-").map(v => v[0].toLocaleUpperCase() + v.slice(1)).join(" ")}</div>
                            </div>
                            <div className="pt-4 flex flex-col justify-between w-full p-4 gap-4">
                                <div className="font-bold" style={{ textWrap: "wrap" }}>{record.title!!.length > 100 ? record.title?.slice(0, 100) + "..." : record.title}</div>
                                <div className="flex gap-2">
                                <button className="bg-yellow w-full text-black rounded-[10px] py-2 font-bold" onClick={() => {router.push(`/researchandreport/${record._id}`)}}>Read</button>
                                <button className="block xl:hidden border border-[2px] w-full text-black rounded-[10px] py-2 font-bold" onClick={() => {router.push(record.document!!)}}>Download PDF</button>
                                </div>
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

