import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";
import { GuestPaginateNumbers } from '@/components/guests/GuestPaginateNumbers';

export default function GuestThematicAreaPage() {
    return (
        <div style={{overflow: "auto", height: "100vh"}}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[32px] font-bold">
                Thematic Areas
            </div>
            <ThematicAreaList />
            <GuestPaginateNumbers />
            <GuestFooter />
        </div>
    );
}