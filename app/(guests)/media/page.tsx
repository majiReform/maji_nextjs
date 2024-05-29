"use client"
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header";
import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { guestGalleryList, guestVideosList } from "@/lib/features/guestAPI/homePage";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Media() {

    const [galleryList, setgalleryList] = useState<GalleryInterface[]>([]);
    const [galleryStatus, setGalleryStatus] = useState("loading");

    const [list, setList] = useState<VideoInterface>({});
    const [status, setStatus] = useState("loading");

    const fetchGallery = async () => {
        const result = await guestGalleryList(1, 8);
        console.log(result.response.pictures.results);
        setgalleryList(result.response.pictures.results);
        setGalleryStatus("idle");
    }

    const fetchHero = async () => {
        const result = await guestVideosList(1, 1);
        // console.log(result.response.videos.results[0]);
        setList(result.response.videos.results[0]);
        setStatus("idle");
    }

    useEffect(() => {
        fetchHero();
        fetchGallery();
    }, []);

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
            <div className="mx-8 md:mx-20 h-fit my-8">
                <YouTubeEmbed videoid={list.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" />
            </div>
            <div className="mx-8 md:mx-20 text center font-bold text-[16px] md:text-[40px]">{list.title}</div>

            <div className="mx-8 md:mx-20 my-10">
                <div className="text-[16px] md:text-[32px] font-bold mb-2">Recent Videos</div>
                {posts.map((post, index) => {
                    return (
                        <div className="mb-2" key={index}>
                            <div className="flex justify-between py-2">
                                <div>
                                    <div className="font-bold text-[14px]">Amnesty International Launches Global Campaign Against Torture</div>
                                    <div className="text-[#737373] text-[14px]">{post.category} | {post.date}</div>
                                </div>
                                <div className="relative h-[50px] w-[100px] rounded-[10px] overflow-hidden"><Image src={post.picture} fill={true} alt="Img" /></div>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>
            <section className="mx-8 md:mx-20 my-10">
                <div className="text-[32px] font-bold mb-2 text-center">Gallery</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                    {galleryList.map((picture, index) => {
                        return (
                            <div className="relative h-[140px] md:h-[200px] w-full rounded-[10px] overflow-hidden" key={index}>
                                <Image src={picture.picture!!} fill={true} alt="Gallery image" />
                            </div>
                        );
                    })}
                </div>
            </section>
            <GuestFooter />
        </div>
    );
}

