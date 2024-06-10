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
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdClose } from "react-icons/md";

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
        const result = await guestVideosList(1, 1);
        setList(result.response.videos.results[0]);
        setVideoList(result.response.videos.results);
        setStatus("idle");
        setVideoStatus("idle");
    }

    useEffect(() => {
        fetchHero();
        fetchGallery();
    }, []);

    const [open, setOpen] = useState(-1);
    const handleOpen = (index: number) => setOpen(index);
    const handleClose = () => setOpen(-1);

    if (status == "loading" || galleryStatus == "loading" || videostatus == "loading") {
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
            <div className="mx-8 xl:mx-20 text center font-bold text-[16px] xl:text-[40px]">{list.title}</div>

            <div className="mx-8 xl:mx-20 my-10">
                <div className="text-[16px] xl:text-[32px] font-bold mb-2">Recent Videos</div>
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
            <section className="mx-8 xl:mx-20 my-10">
                <div className="text-[32px] font-bold mb-2 text-center">Gallery</div>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 xl:gap-4">
                    {galleryList.map((picture, index) => {



                        return (
                            <div className="relative h-[140px] xl:h-[200px] w-full rounded-[10px] overflow-hidden my-auto" key={index}>
                                <div onClick={() => {handleOpen(index)}}><Image src={picture.picture!!} fill={true} alt="Gallery image" /></div>
                                <Modal
                                    open={open == index}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    style={{margin: "auto"}}
                                >
                                    <Box sx={style}>
                                    {/* <Image src={picture.picture!!} fill={true} alt="Gallery image" style={{backgroundSize: "contain!important"}} /> */}
                                    <div style={{backgroundImage: `url("${picture.picture!!}")`, backgroundSize: "contain", width: "100%", height: "100%", margin: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}></div>
                                    <div className="absolute top-[20px] right-[20px]" onClick={handleClose}><MdClose /></div>
                                    </Box>
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </section>
            <GuestFooter />
        </div>
    );
}

