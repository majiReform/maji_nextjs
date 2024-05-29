'use client'

import { Option, optionClasses } from '@mui/base/Option';
import { useEffect, useState } from 'react';
import { add, selectStatus, selectValue } from '@/lib/features/research/researchSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { UploadFile } from '../../../../../../components/admindashboard/UploadFile';
import { AddAreaHeader } from '../../../../../../components/admindashboard/AddAreaHeader';
import { toast } from 'react-toastify';
import { UploadFileTwo } from '../../../../../../components/admindashboard/UploadFileTwo';
import { SpinLoaderTwo } from '../../../../../../components/LoadingAnimation/spinLoader';
import { CldUploadButton } from 'next-cloudinary';

export default function Page() {

    const dispatch = useAppDispatch();
    const thematicarea = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    const maxwords = 2500;

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [details, setDetails] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [fileUrl, setFileUrl] = useState("");
    const [originalFileNameTwo, setOriginalFileNameTwo] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [originalFileName, setOriginalFileName] = useState("");

    const hasReachedLimit = () => {
        console.log(details.length, "of", maxwords);
        if (details.length > maxwords) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (details != "" && category != "" && title != "" && fileUrl != "" && pictureUrl != "") {
            if (hasReachedLimit()) {
                setButtonDisabled(true);
            } else {
                setButtonDisabled(false);
            }
        } else {
            setButtonDisabled(true);
        }

        console.log(buttonDisabled);

    }, [details, category, title]);

    const submitHandler = () => {

        dispatch(add({
            title,
            category,
            pictureURL: pictureUrl,
            document: fileUrl,
            details,
        }))
    }

    useEffect(() => {
        if(status == "success") {
            toast.success("Report and research added successfully");
        }
    }, [status]);

    const inputClass = "p-3 rounded-[5px] border border-[0.5px] bg-adminbg border-[#878787]";

    return (
        <div>
            <div className='flex flex-col w-full md:w-[800px] mx-auto py-20 gap-6'>

                <AddAreaHeader
                    title='Upload Report and Research'
                    key='report-and-research-upload-header'
                />


                <UploadFile
                    title='Drop your image file here or open gallery'
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    iconType='picture'
                    forId='research_upload_1'
                    fileUrl={originalFileName}
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
                            console.log(result)
                            if (result.event == "success") {
                                setPictureUrl(result?.info.secure_url);  // { public_id, secure_url, etc }
                                setOriginalFileName(result?.info.original_filename);
                            } else {
                                toast.error("File upload failed, kindly retry.");
                            }
                            widget.close();
                        }}

                        uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                    >
                        Upload picture
                    </CldUploadButton>
                </UploadFile>

                <UploadFile
                    title='Drop your image file here or open gallery'
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    iconType='file'
                    forId='research_upload_2'
                    fileUrl={originalFileNameTwo}
                    key={"research_file_upoload_2"}
                >
                    <CldUploadButton
                        className="border rounded-[8px] py-3 px-8 w-fit mx-auto"
                        options={{
                            multiple: false,
                            sources: ["local", "dropbox", "google_drive"],
                            clientAllowedFormats: ["docx", "doc", "txt", "pdf"]
                        }}
                        onSuccess={(result: any, widget) => {
                            console.log(result)
                            if (result.event == "success") {
                                setFileUrl(result!!.info.secure_url);  // { public_id, secure_url, etc }
                                setOriginalFileNameTwo(result.info.original_filename);
                            } else {
                                toast.error("File upload failed, kindly retry.");
                            }
                            widget.close();
                        }}

                        uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                    >
                        Upload file
                    </CldUploadButton>
                </UploadFile>

                {/* <UploadFileTwo
                    title='Drop your document file here or browse files '
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    forId='research_doc_1'
                    setFileUrlTwo={setFileUrl}
                    iconType="file"
                    key={"research_file_upoload"}
                /> */}

                <div className='flex flex-col'>
                    <label htmlFor="select-category">Select category</label>
                    <select className={inputClass} onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Choose a category</option>
                        <option value="research">Research</option>
                        <option value="report">Report</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Title</label>
                    <input type="text" className={inputClass} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter a semantic title' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Details</label>
                    <textarea className={inputClass} name="" id="" rows={12} placeholder='Type text here' value={details} onChange={(e) => { setDetails(e.target.value) }}></textarea>
                    <div className='text-right'>
                        <small>{details.length}/{maxwords}</small>
                    </div>
                </div>

                <div>
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled} onClick={submitHandler}>{status == "loading" ? (<SpinLoaderTwo />) : "Upload thematic area"}</button>
                </div>

            </div>
        </div>
    );
}