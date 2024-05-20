'use client'
import {
    Select,
    selectClasses,
    SelectListboxSlotProps,
    SelectProps,
    SelectRootSlotProps,
} from '@mui/base/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const labelStyle = {
    backgroundColor: "indigo",
    color: "white",
    padding: "0.5rem",
    fontFamily: "sans-serif",
    borderRadius: "0.3rem",
    cursor: "pointer",
    marginTop: "1rem"
}

import { useEffect, useState } from 'react';
import { add, selectStatus, selectValue } from '@/lib/features/gallery/gallerySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { UploadFile } from '@/components/admindashboard/UploadFile';
import { AddAreaHeader } from '@/components/admindashboard/AddAreaHeader';
import { SpinLoaderTwo } from '@/components/LoadingAnimation/spinLoader';
import { toast } from 'react-toastify';

export default function Page() {

    const dispatch = useAppDispatch();
    const thematicarea = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    const maxwords = 250;

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [pictureUrl, setPictureUrl] = useState("");


    useEffect(() => {
        if (pictureUrl == "") {
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }

    }, [pictureUrl]);

    const submitHandler = () => {
        dispatch(add({
            picture: pictureUrl
        }))
    }

    if(status == "failed") {
        toast.error("An error occurred");
    }

    if(status == "success") {
        toast.success("An error occurred");
    }

    return (
        <div>
            <div className='flex flex-col w-[800px] mx-auto py-20 gap-6'>

                <AddAreaHeader
                    title='Upload Image'
                    key="upload-image-header"
                />

                <UploadFile
                    title='Drop your image file here or open gallery'
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    iconType="picture"
                    setFileUrl={setPictureUrl}
                    key={"picture_upoload"}
                />

                <div>
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled} onClick={submitHandler}>{status == "idle" || status == "failed" ? "Upload Image": (<SpinLoaderTwo />)}</button>
                </div>

            </div>
        </div>
    );
}