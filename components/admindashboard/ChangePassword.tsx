import { errorValue, selectStatus, selectValue, successValue, updateProfilePassword } from "@/lib/features/profile/profileSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SpinLoader, SpinLoaderTwo } from "../LoadingAnimation/spinLoader";
import { NoPicture } from "./ProfilePictureStates";

function ChangePassword() {

    const dispatch = useAppDispatch();

    const profile = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);
    const successAlert = useAppSelector(successValue);
    const errorAlert = useAppSelector(errorValue);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showError, setShowError] = useState("");

    useEffect(() => {
        if(status == "success") {
            toast.success(successAlert);
        } else if (status == "failed") {
            toast.error(errorAlert);
        }
    }, [status]);

    useEffect(() => {
        if(newPassword != confirmPassword) {
            setShowError("Passwords do not match");
        } else if (newPassword.length < 8) {
            setShowError("Password needs to be at least 8 characters");
        } else {
            setShowError("");
        }
    }, [newPassword, confirmPassword]);

    const updatePasswordButton = () => {
        dispatch(updateProfilePassword({currentPassword, newPassword}));
    }

    return (
        <div>
            <div className="flex flex-col w-full md:w-[800px] gap-10 mx-auto py-20">

                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
                {profile.profilePicture ? (<Image src={profile.profilePicture} fill={true} alt="Profile picture" style={{zIndex: "20"}} />) : (<NoPicture />)}
                </div>

                <div>
                    <label htmlFor="">Current password</label>
                    <input type="text" placeholder="Enter current password" onChange={(e) => {setCurrentPassword(e.target.value)}} className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">New password</label>
                    <input type="text" placeholder="Enter new password" onChange={(e) => {setNewPassword(e.target.value)}} className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">Confirm password</label>
                    <input type="text" placeholder="Confirm new password" onChange={(e) => {setConfirmPassword(e.target.value)}} className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div style={{color: "red"}} className={`${newPassword == "" && confirmPassword == "" ? "hidden" : "block"}`}>{showError}</div>

                <div>
                    <button className={`text-center w-full ${newPassword == confirmPassword && newPassword != "" && confirmPassword != "" && newPassword.length >= 8 ? "bg-yellow" : "bg-greybg"} p-4 rounded-[5px]`} onClick={updatePasswordButton} disabled={!(newPassword == confirmPassword && newPassword != "" && confirmPassword != "" && newPassword.length >= 8)}>{status == "loading" ? (<SpinLoaderTwo />) : "Save"}</button>
                </div>
            </div>
        </div>
    );
}

export {
    ChangePassword
}
