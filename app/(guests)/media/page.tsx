import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

export default function Media() {

    const posts = [
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Human Rght",
            date: "7th May, 2024"
        },
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Gender Right",
            date: "7th May, 2024"
        },
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Technology",
            date: "7th May, 2024"
        }
    ];


    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[32px] font-bold">
                Media
            </div>
            <div className="mx-20 h-fit my-8">
                <YouTubeEmbed videoid="NChNaQV4rXc" params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" />
            </div>
            <div className="mx-20 text center font-bold text-[40px]">Amnesty International Report Exposes Widespread Gender-Based Violence in Conflict Zone</div>

            <div className="mx-20 my-10">
            <div className="text-[32px] font-bold mb-2">Recent Videos</div>
            {posts.map((post, index) => {
                return (
                    <div className="mb-2" key={index}>
                        <div className="flex justify-between py-2">
                            <div>
                                <div className="font-bold">Amnesty International Launches Global Campaign Against Torture</div>
                                <div>{post.category} | {post.date}</div>
                            </div>
                            <div className="relative h-[50px] w-[100px] rounded-[10px] overflow-hidden"><Image src={post.picture} fill={true} alt="Img" /></div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
        <section className="mx-20 my-10">
            <div className="text-[32px] font-bold mb-2 text-center">Gallery</div>
            <div className="grid grid-cols-4 gap-4">
                {["", "", "", "", "", "", "", ""].map((picture, index) => {
                    return (
                        <div className="relative h-[200px] w-full rounded-[10px] overflow-hidden">
                            <Image src="/auth_pic.jpeg" fill={true} alt="Gallery image" />
                        </div>
                    );
                })}
            </div>
        </section>
        <GuestFooter />
        </div>
    );
}

