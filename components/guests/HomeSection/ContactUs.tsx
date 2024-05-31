import { SpinLoaderTwo } from "@/components/LoadingAnimation/spinLoader";
import { guestSendMessage } from "@/lib/features/guestAPI/homePage";
import { use, useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { toast } from "react-toastify";

function GuestContactUs() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [state, setState] = useState("idle");

    const sendMessage = async () => {
        try {
            setState("loading");
            await guestSendMessage(fullName, email, message);
            toast.success("A message has been sent.");
            setFullName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            toast.error("An error has occurred while trying to send email.");
        } finally {
            setState("idle");
        }
    }

    return (
        <div className="relative bg-black rounded-[20px] text-white flex flex-col xl:flex-row gap-8 mx-8 xl:mx-20 my-10 p-4 md:p-8 xl:p-20" id="contactus">
            <div className="w-full xl:w-1/2 flex flex-col gap-6 xl:gap-10">
                <div>
                    <div className="w-[80px] xl:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] xl:text-[32px] font-bold">Contact Us</div>
                </div>
                <div className="text-[16px] xl:text-[20px]">
                    If you wish to learn more about The Media Awareness and Justice Initiative (MAJI) or collaborate with us on our mission to promote human rights, gender equality, environmental sustainability, and inclusive governance, please don't hesitate to reach out
                </div>
                <div className="flex items-start gap-2">
                    <MdEmail className="text-[25px]" />
                    <div>
                        <div className="font-bold text-[20px]">Email</div>
                        <div>Support@maji.org.ng</div>
                    </div>
                </div>
                <div className="flex items-start gap-2">
                    <MdPhone className="text-[25px]" />
                    <div>
                        <div className="font-bold text-[20px]">Phone</div>
                        <div>+2347081036103</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-8 w-full xl:w-1/2">
                <div>
                    <input type="text" className="w-full py-3 px-4 rounded-[10px] text-black" placeholder="Name" onChange={(e) => {setFullName(e.target.value)}} value={fullName} />
                </div>

                <div>
                    <input type="text" className="w-full py-3 px-4 rounded-[10px] text-black" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}} value={email} />
                </div>

                <div>
                    <textarea className="w-full py-3 px-4 rounded-[10px] text-black" rows={8} placeholder="Message" onChange={(e) => {setMessage(e.target.value)}} value={message}></textarea>
                </div>

                <button className="bg-yellow py-3 text-black font-bold rounded-[10px]" onClick={sendMessage}>{state == "loading" ? <SpinLoaderTwo /> : "Send Message"}</button>
            </div>
        </div>
    );
}



export {
    GuestContactUs
}

