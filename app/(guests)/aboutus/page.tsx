import { AboutOurMethodology } from "@/components/guests/AboutUs/AboutOurMethodology";
import { GuestAboutHeader } from "@/components/guests/AboutUs/Header";
import { HistoryAndBackground } from "@/components/guests/AboutUs/HistoryBackground";
import { AboutWhereWeWork } from "@/components/guests/AboutUs/WhereWeWork";
import { AboutWhoWeAre } from "@/components/guests/AboutUs/WhoWeAre";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header";

export default function AboutUsPage() {
    return (
        <div style={{overflow: "auto", height: "100vh"}}>
            <GuestHeader />
            <GuestAboutHeader />
            <AboutWhoWeAre />
            <AboutWhereWeWork />
            <HistoryAndBackground />
            <AboutOurMethodology />
            <GuestFooter />
        </div>
    );
}