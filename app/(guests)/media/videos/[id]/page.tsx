"use client"
import { SpinLoader, SpinLoaderTwo } from "@/components/LoadingAnimation/spinLoader";
import { GuestFooter } from "@/components/guests/Footer";
import { GuestHeader } from "@/components/guests/Header";
import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { guestGalleryList, guestVideosList } from "@/lib/features/guestAPI/homePage";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { YouTubeEmbed } from "@next/third-parties/google";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdClose } from "react-icons/md";
import { useParams, useRouter } from "next/navigation";
import { singleVideo } from "@/lib/features/videos/videosAPI";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "90%",
    height: "90%",
    margin: "auto auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Media() {
    const [list, setList] = useState<VideoInterface>({
        youtubeURL: "",
        title: "",
        details: ""
    });
    const [status, setStatus] = useState("loading");

    const [videolist, setVideoList] = useState<VideoInterface[]>([]);
    const [videostatus, setVideoStatus] = useState("loading");
    const [videoPage, setVideoPage] = useState(1);
    const [moreVideosLoading, setMoreVideosLoading] = useState(false);
    const [moreVideos, setMoreVideos] = useState(false);

    const router = useRouter();
    const params = useParams();


    const fetchHero = async () => {
        setVideoPage(1);
        const result = await singleVideo(params.id as string);
        // setList(result.response.videos.results[0]);
        console.log(result.response.video);
        setList(result.response.video);
        setStatus("idle");
    }

    const recentVideos = async () => {
        setMoreVideosLoading(true);
        setVideoPage(1);
        const result = await guestVideosList(1, 3);
        // setList(result.response.videos.results[0]);
        setVideoList(result.response.videos.results);
    }

    useEffect(() => {
        fetchHero();
        recentVideos();
    }, []);

    if (status == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    return (
        <div style={{ overflow: "auto", height: "100vh" }}>
            <GuestHeader />
            <div className="px-20 py-16 bg-black text-white text-center text-[32px] font-bold">
                Media
            </div>
            <div className="mx-8 xl:mx-20 h-fit my-8">
                <YouTubeEmbed videoid={list.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" />
            </div>
            <div className="mx-8 xl:mx-20 text center font-bold text-[16px] xl:text-[40px] w-full">{list.title}</div>
            <div className="mx-8 xl:mx-20"><pre>{list.details}</pre></div>

            <div className="mx-8 xl:mx-20 my-10">
                <div className="text-[16px] xl:text-[32px] font-bold mb-2">Recent Videos</div>
                {videolist.map((post, index) => {
                    return (
                        <div className="mb-2" key={index}>
                            <div className="flex justify-between py-2">
                                <div>
                                    <div className="font-bold text-[14px] cursor-pointer" onClick={() => {router.push(`/media/videos/${post._id}`)}}>{post.title}</div>
                                    <div className="text-[#737373] text-[14px]">{moment(post.createdAt).format("LLLL")}</div>
                                </div>
                                <div className="relative h-[80px] w-[140px] rounded-[10px] overflow-hidden"><YouTubeEmbed videoid={post.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" /></div>
                            </div>
                            <hr />
                        </div>
                    );
                })}
            </div>

            
            <GuestFooter />
        </div>
    );
}

