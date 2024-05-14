import Image from "next/image";

function ChangePassword() {
    return (
        <div>
            <div className="flex flex-col w-[800px] gap-10 mx-auto py-20">

                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto">
                    <Image src="/auth_pic.jpeg" fill={true} alt="Profile picture" style={{ zIndex: "20" }} />
                </div>

                <div>
                    <label htmlFor="">Current password</label>
                    <input type="text" placeholder="Enter current password" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">New password</label>
                    <input type="text" placeholder="Enter new password" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <label htmlFor="">Confirm password</label>
                    <input type="text" placeholder="Confirm new password" className="border border-greybg rounded-[5px] w-full p-3" />
                </div>

                <div>
                    <button className="text-center w-full bg-yellow p-4 rounded-[5px]">Save</button>
                </div>
            </div>
        </div>
    );
}

export {
    ChangePassword
}
