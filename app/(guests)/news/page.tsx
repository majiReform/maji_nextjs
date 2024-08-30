"use client"
import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { NewsAreaList } from "@/components/guests/NewsList";
import { GuestPaginateNumbers } from '@/components/guests/GuestPaginateNumbers';
import { useEffect, useState } from "react";
import { NewsInterface } from "@/lib/features/news/newsSlice";
import { newsList } from "@/lib/features/news/newsAPI";
import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";

export default function GuestThematicAreaPage() {

    const [list, setList] = useState<NewsInterface[]>([]);
    const [listState, setListState] = useState("loading");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const fetchIt = async () => {
        const result = await newsList(1, 10);
        console.log("Result::::::", result);
        setList(result.response.news.results);
        setCurrentPage(result.response.news.currentPage);
        setTotalPages(result.response.news.totalPages);
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
            <div className="px-20 py-16 bg-black text-white text-center text-[32px] font-bold">
                News
            </div>
            <NewsAreaList list={list} />
            <GuestPaginateNumbers
                currentPage={currentPage}
                totalPages={totalPages}
                setPageAndMove={gotoPage}
            />
            <GuestFooter />
        </div>
    );
}