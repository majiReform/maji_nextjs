import { MdEmail, MdPhone } from "react-icons/md";

function GuestContactUs() {
    return (
        <div className="bg-black rounded-[20px] text-white flex flex-col md:flex-row gap-8 mx-8 md:mx-20 my-10 p-8 md:p-20" id="contactus">
            <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
                <div>
                    <div className="w-[80px] md:w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[20px] md:text-[32px] font-bold">Contact Us</div>
                </div>
                <div className="text-[16px] md:text-[20px]">
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
            <div className="flex flex-col gap-8 w-full md:w-1/2">
                <div>
                    <input type="text" className="w-full py-3 px-4 rounded-[10px] text-black" placeholder="Name" />
                </div>

                <div>
                    <input type="text" className="w-full py-3 px-4 rounded-[10px] text-black" placeholder="Email Address" />
                </div>

                <div>
                    <textarea className="w-full py-3 px-4 rounded-[10px] text-black" rows={8} placeholder="Message"></textarea>
                </div>

                <button className="bg-yellow py-3 text-black font-bold rounded-[10px]">Send Message</button>
            </div>
        </div>
    );
}



export {
    GuestContactUs
}

