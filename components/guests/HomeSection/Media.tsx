import { SpinLoader } from "@/components/LoadingAnimation/spinLoader";
import { GalleryInterface } from "@/lib/features/gallery/gallerySlice";
import { guestGalleryList, guestVideosList } from "@/lib/features/guestAPI/homePage";
import { VideoInterface } from "@/lib/features/videos/videosSlice";
import { YouTubeEmbed } from "@next/third-parties/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import Box from '@mui/material/Box';
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


function GuestMedia() {

    const [list, setList] = useState<VideoInterface[]>([]);
    const [status, setStatus] = useState("loading");

    const [galleryList, setgalleryList] = useState<GalleryInterface[]>([]);
    const [galleryStatus, setGalleryStatus] = useState("loading");

    const router = useRouter();

    const [open, setOpen] = useState(-1);
    const handleOpen = (index: number) => setOpen(index);
    const handleClose = () => setOpen(-1);

    const fetchHero = async () => {
        const result = await guestVideosList(1, 4);
        setList(result.response.videos.results);
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

    if (galleryStatus == "loading") {
        return (
            <div className="h-screen w-full flex justify-center items-center">
                <SpinLoader />
            </div>
        );
    }

    return (
        <div className="py-10 px-8 xl:py-10 xl:px-20 relative">
            <div className="text-center mb-10 flex justify-between items-center">
                <div>
                    <div className="w-[80px] xl:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] xl:text-[32px] font-bold font-bold text-left">Media</div>
                </div>
                <button className="flex gap-2 items-center" onClick={() => { router.push("/media") }}>See More <BsCaretRight /></button>
            </div>
            <section>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8 xl:py-10 mx-8 xl:mx-20'>
                    {list.map((record) => {
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
                                    <button className='bg-yellow text-black w-full py-2 my-4 font-bold rounded-[10px]' onClick={() => { router.push(`/media/videos/${record._id}`) }}>Watch</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section>
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
                                        
                                        <div style={{ backgroundImage: `url("${picture.picture!!}")`, backgroundSize: "contain", width: "100%", height: "100%", margin: "auto", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}></div>
                                        <div className="absolute top-[20px] right-[20px]" onClick={handleClose}><MdClose /></div>
                                    </Box>
                                </Modal>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}


export {
    GuestMedia
}

