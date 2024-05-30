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

export default function GuestThematicAreaPage({params}: {params: {id: string}}) {

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

    if(listState == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[20px] md:text-[32px] font-bold">
                Thematic Areas
            </div>
            <div className="mx-8 md:mx-20">
                <div className="relative h-[190px] md:h-[400px] mt-8">
                    <Image src={record.picture!!} fill={true} alt="Header Image" />
                </div>
                    <div className="py-4 text-[16px]">{moment(record.createdAt).format("LLLL")}</div>
                <div>
                    <hr />
                    <div className="py-4 text-left md:text-center font-bold text-[24px] md:text-[40px]">
                        {record.title}
                    </div>
                    <hr />
                    <div className="my-4 text-[16px]">
                    {record.details}
                    </div>
                </div>
            </div>
            <ThematicAreaRecentPosts />
            <GuestFooter />
        </div>
    );
}