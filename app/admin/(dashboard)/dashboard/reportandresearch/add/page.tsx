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

import { Option, optionClasses } from '@mui/base/Option';
import { useEffect, useState } from 'react';
import { add, selectStatus, selectValue } from '@/lib/features/research/researchSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { UploadFile } from '@/components/admindashboard/UploadFile';
import { AddAreaHeader } from '@/components/admindashboard/AddAreaHeader';

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
    const [pictureUrl, setPictureUrl] = useState("");

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

    const inputClass = "p-3 rounded-[5px] border border-[0.5px] bg-adminbg border-[#878787]";

    return (
        <div>
            <div className='flex flex-col w-[800px] mx-auto py-20 gap-6'>

                <AddAreaHeader
                    title='Upload Report and Research'
                    key='report-and-research-upload-header'
                />

                <UploadFile
                    title='Drop your image file here or open gallery'
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    iconType="picture"
                    setFileUrl={setPictureUrl}
                    key={"picture_upoload"}
                />

                <UploadFile
                    title='Drop your document file here or browse files '
                    body='Maximum upload files less than 30mb'
                    buttonTitle='Browse file'
                    setFileUrl={setFileUrl}
                    iconType="file"
                    key={"file_upoload"}
                />

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
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled} onClick={submitHandler}>Upload thematic area</button>
                </div>

            </div>
        </div>
    );
}