import { errorValue, selectStatus, selectValue, successValue, update, updatePicture } from "@/lib/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { SpinLoader, SpinLoaderTwo } from "../LoadingAnimation/spinLoader";
import { toast } from "react-toastify";
import { CldUploadButton } from "next-cloudinary";
import { LoadingPicture, NoPicture } from "./ProfilePictureStates";

const labelStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "0.5rem",
    fontFamily: "sans-serif",
    borderRadius: "0.3rem",
    cursor: "pointer",
    marginTop: "1rem",
    display: "flex"
  }

function EditProfile() {

    const dispatch = useAppDispatch();

    const profile = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);
    const successAlert = useAppSelector(successValue);
    const errorAlert = useAppSelector(errorValue);

    const [profilePictureInput, setProfilePictureInput] = useState("");
    const [fullNameInput, setFullNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneNumberInput, setphoneNumberInput] = useState("");

    useEffect(() => {
        if(status == "success") {
            toast.success(successAlert);
        } else if (status == "failed") {
            toast.error(errorAlert);
        }
    }, [status]);


    useEffect(() => {
        setProfilePictureInput(profile.profilePicture!!);
        setFullNameInput(profile.fullName!!);
        setEmailInput(profile.email!!);
        setphoneNumberInput(profile.phoneNumber!!);
    }, [profile]);

    const updateProfilePicture = (pictureLink: string) => {
        dispatch(updatePicture(pictureLink));
    }

    const updateProfileDetailsButton = () => {
        dispatch(update({fullName: fullNameInput, email: emailInput, phoneNumber: phoneNumberInput}));
    }

    return (
        <div>
            <div className="flex flex-col w-[800px] gap-10 mx-auto py-20">

                {status != "pre-load" ? (
                    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
                        {profilePictureInput ? (<Image src={profilePictureInput} fill={true} alt="Profile picture" style={{zIndex: "20"}} />) : (<NoPicture />)}
                    
                    <div style={{zIndex: "50", bottom: "20px", position: "absolute", left: "50%", transform: "translate(-50%, 0)"}}>
                    <CldUploadButton
                        className="border rounded-[8px] py-1 px-4 w-fit mx-auto border-black bg-white text-black flex gap-2 items-center"
                        options={{
                            multiple: false,
                            sources: ["local", "dropbox", "google_drive"],
                            clientAllowedFormats: ["png", "jpg", "jpeg"]
                        }}
                        onSuccess={(result: any, widget) => {
                            console.log(result)
                            if (result.event == "success") {
                                updateProfilePicture(result?.info.secure_url);
                            } else {
                                toast.error("File upload failed, kindly retry.");
                            }
                            widget.close();
                        }}

                        uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                    >
                        <PiPencilSimpleLine style={{color: "black"}} /> Edit
                    </CldUploadButton>
                    </div>
                    
                </div>
                ) : (
                    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto flex justify-center items-center">
                        <SpinLoader />
                </div>
                )}
                

                <div>
                    <label htmlFor="">Full Name</label>
                    <input type="text" value={fullNameInput} onChange={(e) => {setFullNameInput(e.target.value)}} placeholder="Enter full name" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}} placeholder="Enter email address" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">Phone Number</label>
                    <input type="tel" value={phoneNumberInput} onChange={(e) => {setphoneNumberInput(e.target.value)}} placeholder="Enter phone number" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <button className="text-center w-full bg-yellow p-4 rounded-[5px]" onClick={updateProfileDetailsButton}>{status == "loading" ? (<SpinLoaderTwo />) : "Save"}</button>
                </div>
            </div>
        </div>
    );
}

export {
    EditProfile
}
