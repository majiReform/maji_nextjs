"use client"
import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header";
import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { guestGalleryList, guestVideosList } from "@/lib/features/guestAPI/homePage";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { YouTubeEmbed } from "@next/third-parties/google";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Media() {

    const [galleryList, setgalleryList] = useState<GalleryInterface[]>([]);
    const [galleryStatus, setGalleryStatus] = useState("loading");

    const [list, setList] = useState<VideoInterface>({});
    const [status, setStatus] = useState("loading");

    const [videolist, setVideoList] = useState<VideoInterface[]>([]);
    const [videostatus, setVideoStatus] = useState("loading");

    const fetchGallery = async () => {
        const result = await guestGalleryList(1, 8);
        setgalleryList(result.response.pictures.results);
        setGalleryStatus("idle");
    }

    const fetchHero = async () => {
        const result = await guestVideosList(1, 3);
        setList(result.response.videos.results[0]);
        setVideoList(result.response.videos.results);
        setStatus("idle");
        setVideoStatus("idle");
    }

    useEffect(() => {
        fetchHero();
        fetchGallery();
    }, []);

    if(status == "loading" || galleryStatus == "loading" || videostatus == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

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
                {videolist.map((post, index) => {
                    return (
                        <div className="mb-2" key={index}>
                            <div className="flex justify-between py-2">
                                <div>
                                    <div className="font-bold text-[14px]">{post.title}</div>
                                    <div className="text-[#737373] text-[14px]">{moment(post.createdAt).format("LLLL")}</div>
                                </div>
                                <div className="relative h-[80px] w-[140px] rounded-[10px] overflow-hidden"><YouTubeEmbed videoid={list.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" /></div>
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

