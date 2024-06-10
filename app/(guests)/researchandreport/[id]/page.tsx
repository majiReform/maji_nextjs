"use client"
import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { ResearchAndReportRecentPosts } from "@/components/guests/ResearchAndReportRecentPost";
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";
import { ThematicAreaRecentPosts } from "@/components/guests/ThematicAreaRecentPost";
import { guestSingleResearch } from "@/lib/features/guestAPI/homePage";
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuestThematicAreaPage({params}: {params: {id: string}}) {

    const [record, setRecord] = useState<ResearchAndReportInterface>({});
    const [listState, setListState] = useState("loading");

    const fetchIt = async () => {
        const result = await guestSingleResearch(params.id);
        setRecord(result.response.researchandreport);
    }

    useEffect(() => {
        fetchIt();
    }, []);

    const router = useRouter();

    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-8 xl:px-20 py-16 bg-black text-white text-center text-[20px] xl:text-[32px] font-bold">
                Reseach and Report
            </div>
            <div className="mx-8 xl:mx-20">
                <div className="relative h-[140px] xl:h-[400px] mt-8">
                    <Image src={record.pictureURL!!} fill={true} alt="Header Image" />
                </div>
                    <div className="py-4 flex justify-between items-center">
                        <div className="text-[14px] xl:text-[16px]">{moment(record.createdAt).format("LLLL")}</div>
                        <button className="border border-[2px] py-1 px-6 xl:py-2 xl:px-4 rounded-[10px] font-bold" onClick={() => {router.push(record.document!!)}}>Dowload PDF</button>
                    </div>
                <div>
                    <hr />
                    <div className="py-4 text-left xl:text-center font-bold text-[24px] xl:text-[40px]">
                        {record.title}
                    </div>
                    <hr />
                    <div className="my-4 text-[16px] xl:text-[32px]">
                        {record.details}
                    </div>
                </div>
            </div>
            <ResearchAndReportRecentPosts />
            <GuestFooter />
        </div>
    );
}