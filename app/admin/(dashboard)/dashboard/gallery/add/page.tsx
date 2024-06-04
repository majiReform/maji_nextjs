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
import { UploadFile } from '../../../../../../components/admindashboard/UploadFile';
import { AddAreaHeader } from '../../../../../../components/admindashboard/AddAreaHeader';
import { SpinLoaderTwo } from '../../../../../../components/LoadingAnimation/spinLoader';
import { toast } from 'react-toastify';
import { CldUploadButton, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from 'next-cloudinary';

export default function Page() {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectStatus);

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [pictureUrl, setPictureUrl] = useState("");
    const [originalPicture, setOriginalPicture] = useState("");


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
        })).then(() => {
            setOriginalPicture("");
            setPictureUrl("");
        });
    }

    useEffect(() => {
        if (status == "failed") {
            toast.error("An error occurred");
        }

        if (status == "success") {
            toast.success("Picture upload successfully");
        }
    }, [status]);

    const removeGalleryPic = () => {
        setPictureUrl("");
        setOriginalPicture("");
    }

    return (
        <div>
            <div className='flex flex-col w-full xl:w-[800px] mx-auto py-20 gap-6'>

                <AddAreaHeader
                    title='Upload Image'
                    key="upload-image-header"
                />

                <UploadFile
                    title='Drop your image file here or open gallery'
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    iconType='picture'
                    forId='research_upload_1'
                    fileUrl={originalPicture}
                    clearFile={removeGalleryPic}
                    key={"research_file_upoload_1"}
                >
                    <CldUploadButton

                        className="border rounded-[8px] py-3 px-8 w-fit mx-auto"
                        options={{
                            multiple: false,
                            sources: ["local", "dropbox", "google_drive"],
                            clientAllowedFormats: ["png", "jpg", "jpeg"]
                        }}
                        onSuccess={(result: any, widget) => {
                            if (result.event == "success") {
                                setPictureUrl(result?.info.secure_url);  // { public_id, secure_url, etc }
                                setOriginalPicture(result?.info.original_filename);
                            } else {
                                setPictureUrl("");  // { public_id, secure_url, etc }
                                setOriginalPicture("");
                                toast.error("File upload failed, kindly retry.");
                            }
                            widget.close();
                        }}

                        uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                    >
                        Upload picture
                    </CldUploadButton>
                </UploadFile>

                <div>
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled} onClick={submitHandler}>{status == "loading" ? (<SpinLoaderTwo />) : "Upload Image"}</button>
                </div>

            </div>
        </div>
    );
}