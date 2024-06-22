"use client"
import { SpinLoader, SpinLoaderTwo } from "@/components/LoadingAnimation/spinLoader";
import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";
import { ThematicAreaRecentPosts } from "@/components/guests/ThematicAreaRecentPost";
import { guestSingleThematicArea } from "@/lib/features/guestAPI/homePage";
import { ThematicAreaInterface } from "@/lib/features/thematic/thematicSlice";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuestThematicAreaPage({ params }: { params: { id: string } }) {

    const [record, setRecord] = useState<ThematicAreaInterface>({});
    const [listState, setListState] = useState("loading");

    const fetchIt = async () => {
        const result = await guestSingleThematicArea(params.id);
        setRecord(result.response.thematicArea);
        setListState("idle");
    }

    useEffect(() => {
        fetchIt();
    }, []);

    const router = useRouter();

    if (listState == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[20px] xl:text-[32px] font-bold">
                Thematic Areas
            </div>
            <div className="mx-8 xl:mx-20">
                <div className="relative h-[200px] md:h-[320px] xl:h-[600px] mt-8" style={{ backgroundImage: `url("${record.picture!!}")`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    {/* <Image src={record.picture!!} fill={true} alt="Header Image" /> */}
                </div>
                <div className="py-4 text-[16px]">{moment(record.createdAt).format("LLLL")}</div>
                <div>
                    <hr />
                    <div className="py-4 text-left xl:text-center font-bold text-[24px] xl:text-[40px]">
                        {record.title}
                    </div>
                    <hr />
                    <div className="my-4 text-[16px] w-full">
                        <pre>
                            {record.details}
                        </pre>
                    </div>
                </div>
            </div>
            <ThematicAreaRecentPosts />
            <GuestFooter />
        </div>
    );
}