import { PaginateNumbers } from "@/components/admindashboard/PaginateNumbers";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header"
import { ThematicAreaList } from "@/components/guests/ThematicAreaList";
import { ThematicAreaRecentPosts } from "@/components/guests/ThematicAreaRecentPost";
import Image from "next/image";

export default function GuestThematicAreaPage() {
    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[32px] font-bold">
                Thematic Areas
            </div>
            <div className="mx-20">
                <div className="relative h-[400px] mt-8">
                    <Image src="/image 14.png" fill={true} alt="Header Image" />
                </div>
                    <div className="py-4 text-[16px]">8th May, 2024</div>
                <div>
                    <hr />
                    <div className="py-4 text-center font-bold text-[40px]">
                        Amnesty International Launches Global Campaign Against Torture
                    </div>
                    <hr />
                    <div className="my-4">
                    In an unprecedented move to confront one of the gravest violations of human rights, Amnesty International has launched the expansive and multifaceted global campaign "End Torture Now." With the alarming persistence of torture as a tool of repression and control in various corners of the globe, this initiative marks a watershed moment in the organization's storied history of defending human rights. The campaign, meticulously crafted over months of strategic planning and consultation, is designed to address the complex and multifaceted nature of torture while galvanizing international support for transformative change.
                    </div>
                </div>
            </div>
            <ThematicAreaRecentPosts />
            <GuestFooter />
        </div>
    );
}