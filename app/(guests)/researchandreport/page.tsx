"use client"
import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestPaginateNumbers } from "@/components/guests/GuestPaginateNumbers";
import { GuestHeader } from "@/components/guests/Header"
import { GuestResearchAdReportList } from "@/components/guests/ResearchAndReportList";
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";
import { guestResearchList } from "@/lib/features/guestAPI/homePage";
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";
import { useEffect, useState } from "react";

export default function GuestThematicAreaPage() {

    const [list, setList] = useState<ResearchAndReportInterface[]>([]);
    const [listState, setListState] = useState("loading");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchIt = async () => {
        const result = await guestResearchList(currentPage, 10);
        setList(result.response.details.results);
        setCurrentPage(result.response.details.currentPage);
        setTotalPages(result.response.details.totalPages);
        setListState("idle");
    }

    useEffect(() => {
        fetchIt();
    }, []);

    const gotoPage = (page:number, _limit: number) => {
        setCurrentPage(page);
        fetchIt();
    }

    if(listState == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    return (
        <div style={{overflow: "auto", height: "100vh"}}>
            <GuestHeader />
            <div className="px-8 xl:px-20 py-16 bg-black text-white text-center text-[20px] xl:text-[32px] font-bold">
                Research and Report
            </div>
            <GuestResearchAdReportList list={list} />
            <GuestPaginateNumbers
                currentPage={currentPage}
                totalPages={totalPages}
                setPageAndMove={gotoPage}
            />
            <GuestFooter />
        </div>
    );
}