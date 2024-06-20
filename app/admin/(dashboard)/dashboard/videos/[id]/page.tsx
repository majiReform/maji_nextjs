'use client'
import { useEffect, useState } from 'react';
import { add, edit, selectStatus, selectValue } from '@/lib/features/videos/videosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { SpinLoaderTwo } from '../../../../../../components/LoadingAnimation/spinLoader';
import { AddAreaHeader } from '../../../../../../components/admindashboard/AddAreaHeader';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { singleVideo } from '@/lib/features/videos/videosAPI';

export default function Page() {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);
    const params = useParams();
    const router = useRouter();

    const maxwords = 2500;

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [youtube, setYoutube] = useState("");

    const hasReachedLimit = () => {
        if (description.length > maxwords) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (description != "" && youtube != "" && title != "") {
            if (hasReachedLimit()) {
                setButtonDisabled(true);
            } else {
                setButtonDisabled(false);
            }
        } else {
            setButtonDisabled(true);
        }

    }, [youtube, description, title]);

    const submitHandler = () => {
        dispatch(edit({
            _id: params.id as string,
            title,
            details: description,
            youtubeURL: youtube.split("/")[youtube.split("/").length - 1]
        })).then(() => {
            setTitle("");
            setDescription("");
            setYoutube("");
            toast.success("Edit successful");
            setTimeout(() => {
                router.push("/admin/dashboard/videos");
            }, 4000);
        });
    }

    const fetchValues = async () => {
        const response = await singleVideo(params!!.id as string);
        console.log(response.response.video);
        const { title, details, youtubeURL } = response.response.video;
        setTitle(title);
        setDescription(details);
        setYoutube("https://youtu.be/" + youtubeURL);
    }

    useEffect(() => {
        fetchValues();
    }, []);

    // useEffect(() => {
    //     if (status == "success") {
    //         toast.success("Video edited successfully");
    //     }

    // }, [status]);

    const inputClass = "p-3 rounded-[5px] border border-[0.5px] bg-adminbg border-[#878787]";

    return (
        <div>
            <div className='flex flex-col w-full xl:w-[800px] mx-auto py-20 gap-6'>

                <AddAreaHeader
                    title='Upload Video'
                    key="upload-video-header"
                />

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Video Title</label>
                    <input type="text" className={inputClass} value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter a title' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Video Description</label>
                    <textarea className={inputClass} name="" id="" rows={12} placeholder='Type text here' value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    <div className='text-right'>
                        <small>{description.length}/{maxwords}</small>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Youtube URL</label>
                    <input type="text" className={inputClass} value={youtube} onChange={(e) => { setYoutube(e.target.value) }} placeholder='Enter the yourube url' />
                </div>

                <div>
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled || status == "loading"} onClick={submitHandler}>{status == "loading" ? <SpinLoaderTwo /> : "Edit"}</button>
                </div>

            </div>
        </div>
    );
}