import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { guestGalleryList, guestVideosList } from "@/lib/features/guestAPI/homePage";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCaretRight } from "react-icons/bs";

function GuestMedia() {

    const [list, setList] = useState<VideoInterface>({});
    const [status, setStatus] = useState("loading");

    const [galleryList, setgalleryList] = useState<GalleryInterface[]>([]);
    const [galleryStatus, setGalleryStatus] = useState("loading");

    const router = useRouter();

    const fetchHero = async () => {
        const result = await guestVideosList(1, 1);
        setList(result.response.videos.results[0]);
        setStatus("idle");
    }

    const fetchGallery = async () => {
        const result = await guestGalleryList(1, 4);
        setgalleryList(result.response.pictures.results);
        setGalleryStatus("idle");
    }

    useEffect(() => {
        fetchHero();
        fetchGallery();
    }, []);

    if(galleryStatus == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    const thematicarea = [
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        }
    ];

    return (
        <div className="py-10 px-8 md:py-10 md:px-20">
            <div className="text-center mb-10 flex justify-between items-center">
                <div>
                    <div className="w-[80px] md:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] md:text-[32px] font-bold font-bold text-left">Media</div>
                </div>
                <button className="flex gap-2 items-center" onClick={() => {router.push("/media")}}>See More <BsCaretRight /></button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full h-[450px] md:h-[650px]">
                <div className="w-full h-full md:w-1/2">
                <YouTubeEmbed videoid={list.youtubeURL!! as string} params="controls=controls-1" style="width: 100%; height: 100%;" />
                </div>
                <div className="grid grid-cols-2 gap-4 h-full w-full md:w-1/2">
                    {galleryList.map((record) => {
                        return (
                            <div className="w-full bg-white relative border border-[#E6E6E6] rounded-[10px] overflow-hidden">
                                <div className="w-full h-full relative z-10" style={{ backgroundImage: `url("${record.picture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", backgroundPosition: "center" }}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


export {
    GuestMedia
}

