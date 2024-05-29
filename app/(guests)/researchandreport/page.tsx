import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { GuestResearchAdReportList } from "@/components/guests/ResearchAndReportList";
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";

export default function GuestThematicAreaPage() {
    return (
        <div style={{overflow: "auto", height: "100vh"}}>
            <GuestHeader />
            <div className="px-8 md:px-20 py-16 bg-black text-white text-center text-[20px] md:text-[32px] font-bold">
                Research and Report
            </div>
            <GuestResearchAdReportList />
            <PaginateNumbers />
            <GuestFooter />
        </div>
    );
}