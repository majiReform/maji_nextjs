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
import { add, selectStatus, selectValue } from '@/lib/features/thematic/thematicSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

export default function Page() {

    const dispatch = useAppDispatch();
    const thematicarea = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    const maxwords = 250;

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [semanticText, setSemanticText] = useState("");
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");

    const hasReachedLimit = () => {
        console.log(semanticText.length, "of", maxwords);
        if (semanticText.length > maxwords) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (semanticText != "" && category != "" && title != "") {
            if (hasReachedLimit()) {
                setButtonDisabled(true);
            } else {
                setButtonDisabled(false);
            }
        } else {
            setButtonDisabled(true);
        }

        console.log(buttonDisabled);

    }, [semanticText, category, title]);

    const submitHandler = () => {
        dispatch(add({
            _id: (Math.round(1000000000 + Math.random() * 1000000000)).toString(),
            category,
            title,
            picture: "/auth_pic.jpeg",
            details: semanticText,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }))
    }

    const inputClass = "p-3 rounded-[5px] border border-[0.5px] bg-adminbg border-[#878787]";

    return (
        <div>
            <div className='flex flex-col w-[800px] mx-auto py-20 gap-6'>

                    <div>Upload Thematic Area</div>

                <div>
                    <div>
                        <input
                            type="file"
                            id="upload-file"
                            accept=".jpg,.jpeg,.png"
                            className='hidden'
                            // onChange={handleFileUpload}
                        />
                        <label style={labelStyle} htmlFor="upload-file" className="upload-button-label">
                            Choose File
                        </label>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="select-category">Select category</label>
                    <select className={inputClass} onChange={(e) => { setCategory(e.target.value) }}>
                        <option>Select a category for your thematic area</option>
                        <option value="Human Rights">Human Rights</option>
                        <option value="Human Liberty">Human Liberty</option>
                    </select>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Semantic title area</label>
                    <input type="text" className={inputClass} onChange={(e) => { setTitle(e.target.value) }} placeholder='Enter a semantic title' />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="area-title">Semantic title details</label>
                    <textarea className={inputClass} name="" id="" rows={12} placeholder='Type text here' value={semanticText} onChange={(e) => { setSemanticText(e.target.value) }}></textarea>
                    <div className='text-right'>
                        <small>{semanticText.length}/{maxwords}</small>
                    </div>
                </div>

                <div>
                    <button className={`${buttonDisabled ? "bg-[#E6E6E6] text-[#595959]" : "bg-yellow text-[#1A1A1A]"} w-full p-3 rounded-[5px]`} disabled={buttonDisabled} onClick={submitHandler}>Upload thematic area</button>
                </div>

            </div>
        </div>
    );
}