import { uploadFileToCloudinary } from "@/lib/features/cloudinary/cloudinaryUtil";
import { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { SpinLoaderTwo } from "../LoadingAnimation/spinLoader";
import { MdClose } from "react-icons/md";

const labelStyleTwo = {
    // backgroundColor: "indigo",
    color: "black",
    border: "1px solid black",
    fontFamily: "sans-serif",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "1rem",
    padding: "10px 20px"
}

type fileTypesTypeTwo = ".jpg" | ".jpeg" | ".png" | ".txt" | ".pdf" | ".doc" | ".docx";

interface UploadFilePropsTwo {
    buttonTitle: string
    title: string
    body: string
    forId: string
    iconType: "picture" | "file" | "others"
    setFileUrlTwo: (arg: string) => any
    fileTypes?: fileTypesTypeTwo[]
}

function UploadFileTwo(props: UploadFilePropsTwo) {

    const [uploadFileTwo, setUploadFileTwo] = useState({
        fileUrlTwo: null,
        fileTwo: null
    });

    const [uploadFileStateTwo, setUploadFileStateTwo] = useState("idle"); // loading, idle

    const handleFileUpload = async (e: any) => {
        setUploadFileStateTwo("loading");
        const result = await uploadFileToCloudinary(e.target.files[0], props.iconType);
        props.setFileUrlTwo(result.secure_url);
        setUploadFileTwo({
            fileUrlTwo: result.secure_url,
            fileTwo: e.target.files[0].name
        });

        setUploadFileStateTwo("idle");

    }

    const iconStyle = "mx-auto w-[60px] h-[60px]";

    return (
        <div>

            <div className='border border-dashed w-full rounded-[10px] flex flex-col justify-center items-center py-20 text-center'>
                <div className='flex flex-col gap-4'>

                    {props.iconType == "picture" ? <AiOutlinePicture className={iconStyle} /> : ""}
                    {props.iconType == "file" ? <CiFileOn className={iconStyle} /> : ""}
                    {props.iconType == "others" ? <IoMdCloudUpload className={iconStyle} /> : ""}

                    <div className='font-bold'>{props.title}</div>
                    <div>{props.body}</div>
                    <div>
                        <input
                            type="file"
                            id={props.forId}
                            // accept=".jpg,.jpeg,.png"
                            accept={`${props.iconType == "picture" ? [".jpeg", ".png", ".jpg"].join(",") : ""}${props.iconType == "file" ? [".pdf", ".txt", ".doc", ".docx"].join(",") : ""}${props.iconType == "others" ? props.fileTypes?.join(",") : ""}`}
                            className='hidden'
                            onChange={handleFileUpload}
                        />
                        <label style={labelStyleTwo} htmlFor={props.forId} className="upload-button-label">
                            {props.buttonTitle}
                        </label>
                    </div>
                </div>

            </div>

            {uploadFileStateTwo == "idle" ? (
            <div className={`${uploadFileTwo.fileUrlTwo == null && uploadFileTwo.fileTwo == null ? "hidden" : "flex justify-between py-4 mt-2"}`}>
                <div className="w-[90%]">{uploadFileTwo.fileTwo}</div>
                <MdClose className="w-[10%]" />
            </div>
        ) : ""}

        {uploadFileStateTwo == "loading" ? (<div className="flex justify-center text-center py-2"><SpinLoaderTwo /></div>) : ""}

            

        </div>
    );
}


export {
    UploadFileTwo
}
