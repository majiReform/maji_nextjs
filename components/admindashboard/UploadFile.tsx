import { uploadFileToCloudinary } from "@/lib/features/cloudinary/cloudinaryUtil";
import { ReactNode, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { CiFileOn } from "react-icons/ci";
import { IoMdCloudUpload } from "react-icons/io";
import { SpinLoaderTwo } from "../LoadingAnimation/spinLoader";
import { MdClose } from "react-icons/md";

const labelStyle = {
    // backgroundColor: "indigo",
    color: "black",
    border: "1px solid black",
    fontFamily: "sans-serif",
    borderRadius: "12px",
    cursor: "pointer",
    marginTop: "1rem",
    padding: "10px 20px"
}

type fileTypesType = ".jpg" | ".jpeg" | ".png" | ".txt" | ".pdf" | ".doc" | ".docx";

interface UploadFileProps {
    buttonTitle: string
    title: string
    body: string
    forId: string
    iconType: "picture" | "file" | "others"
    fileUrl: string
    fileTypes?: fileTypesType[]
    readonly children: ReactNode
}

function UploadFile(props: UploadFileProps) {

    // const [uploadFile, setUploadFile] = useState("");

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
                    {props.children}
                </div>

            </div>

            {props.fileUrl ? (
            <div className={`${!props.fileUrl ? "hidden" : "flex justify-between py-4 mt-2"}`}>
                <div className="w-[90%]">{props.fileUrl.split("/")[props.fileUrl.split("/").length - 1]}</div>
                <MdClose className="w-[10%]" />
            </div>
        ) : ""}

        {/* {uploadFileState == "loading" ? (<div className="flex justify-center text-center py-2"><SpinLoaderTwo /></div>) : ""} */}

            

        </div>
    );
}


export {
    UploadFile
}
