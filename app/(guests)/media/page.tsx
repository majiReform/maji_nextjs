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
import { useRouter } from "next/navigation";

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
    const [galleryPage, setGalleryPage] = useState(1);
    const [moreGalleryLoading, setMoreGalleryLoading] = useState(false);
    const [moreGallery, setMoreGallery] = useState(false);

    
    const [videolist, setVideoList] = useState<VideoInterface[]>([]);
    const [videostatus, setVideoStatus] = useState("loading");
    const [videoPage, setVideoPage] = useState(1);
    const [moreVideosLoading, setMoreVideosLoading] = useState(false);
    const [moreVideos, setMoreVideos] = useState(false);
    
    const router = useRouter();

    const [status, setStatus] = useState("loading");

    const fetchGallery = async () => {
        setGalleryPage(1);
        const result = await guestGalleryList(1, 10);
        console.log(result.response.pictures);
        setgalleryList(result.response.pictures.results);
        setGalleryStatus("idle");
        if(result.response.pictures.currentPage < result.response.pictures.totalPages) {
            setMoreGallery(true);
        } else {
            setMoreGallery(false);
        }
    }

    const fetchGalleryByPage = async (page: number) => {
        setMoreGalleryLoading(true);
        setGalleryPage(page);
        const result = await guestGalleryList(page, 10);
        // setList(result.response.videos.results[0]);
        // console.log(result.response.videos);
        setgalleryList(galleryList.concat(result.response.pictures.results));
        if(result.response.pictures.currentPage < result.response.pictures.totalPages) {
            setMoreGallery(true);
        } else {
            setMoreGallery(false);
        }
        setMoreGalleryLoading(false);
    }

    const fetchHero = async () => {
        setVideoPage(1);
        const result = await guestVideosList(1, 10);
        // setList(result.response.videos.results[0]);
        // console.log(result.response.videos);
        setVideoList(result.response.videos.results);
        setStatus("idle");
        setVideoStatus("idle");
        if(result.response.videos.currentPage < result.response.videos.totalPages) {
            setMoreVideos(true);
        } else {
            setMoreVideos(false);
        }
    }

    const fetchHeroByPage = async (page: number) => {
        setMoreVideosLoading(true);
        setVideoPage(page);
        const result = await guestVideosList(page, 10);
        // setList(result.response.videos.results[0]);
        setVideoList(videolist.concat(result.response.videos.results));
        setStatus("idle");
        setVideoStatus("idle");
        setMoreVideosLoading(false);
        if(result.response.videos.currentPage < result.response.videos.totalPages) {
            setMoreVideos(true);
        } else {
            setMoreVideos(false);
        }
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
            {/* <div className="mx-8 xl:mx-20 h-fit my-8">
                <YouTubeEmbed videoid={list.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" />
            </div>
            <div className="mx-8 xl:mx-20 text center font-bold text-[16px] xl:text-[40px]">{list.title}</div>
            <div className="mx-8 xl:mx-20">{list.details}</div> */}

            {/* <div className="mx-8 xl:mx-20 my-10">
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
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 xl:py-10 mx-8 xl:mx-20'>
            {videolist.map((record) => {
                return (
                    <div className="w-full bg-white relative rounded-[10px] overflow-hidden">
                        <div className="w-full h-[240px] relative z-10 rounded-t-[10px]" style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", overflow: "hidden" }}>
                            {/* <Image src={record.picture} fill={true} alt="Thematic picture list" className="z-10" /> */}
                            <YouTubeEmbed videoid={record.youtubeURL!!} params="controls=controls-1" style="width: 100%; height: 100%; background-size: cover; margin: 0 auto;" />
                        </div>
                        <div>
                            <div className="pt-4 flex justify-between w-full">
                                <div className="font-bold" style={{ textWrap: "wrap" }}>{record.title!!.length > 100 ? record.title?.slice(0, 100) + "..." : record.title}</div>
                            </div>
                            <button className='bg-yellow text-black w-full py-2 my-4 font-bold rounded-[10px]' onClick={() => {router.push(`/media/videos/${record._id}`)}}>Watch</button>
                        </div>
                    </div>
                );
            })}
        </div>
        {moreVideosLoading && <SpinLoaderTwo />}
            <div className="mx-8 xl:mx-20 text-right">
                {moreVideos ? (<button onClick={() => {fetchHeroByPage(videoPage + 1)}}>See More Videos</button>) : (<button onClick={() => {fetchHero()}}>See Less Videos</button>)}
            

            </div>
            <section className="mx-8 xl:mx-20 my-10" id="gallery">
                <div className="text-[32px] font-bold mb-2 text-center">Gallery</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-4">
                    {galleryList.map((picture, index) => {

                        return (
                            <div className="relative h-[140px] md:h-[180px] xl:h-[200px] w-full rounded-[10px] overflow-hidden my-auto" key={index}>
                                <div onClick={() => { handleOpen(index) }} style={{ width: "100%", height: "100%" }}>
                                    <img src={picture.picture!!} style={{ width: "100%", height: "100%", backgroundSize: "cover", backgroundPosition: "center" }} alt="Gallery image" />
                                </div>
                                <Modal
                                    open={open == index}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    style={{ margin: "auto" }}
                                >
                                    <Box sx={style}>
                                        {/* <Image src={picture.picture!!} fill={true} alt="Gallery image" style={{backgroundSize: "contain!important"}} /> */}
                                        <div style={{ backgroundImage: `url("${picture.picture!!}")`, backgroundSize: "contain", width: "100%", height: "100%", margin: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                                        <div className="absolute top-[20px] right-[20px]" onClick={handleClose}><MdClose /></div>
                                    </Box>
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </section>
            {moreGalleryLoading&& <SpinLoaderTwo />}
            <div className="mx-8 xl:mx-20 text-right">
                {moreGallery ? (<button onClick={() => {fetchGalleryByPage(galleryPage + 1)}}>See More Pictures</button>) : (<button onClick={() => {fetchGallery()}}>See Less Pictures</button>)}
            

            </div>
            <GuestFooter />
        </div>
    );
}

