import { BsCaretRight } from "react-icons/bs";

function GuestMedia() {

    const thematicarea = [
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        },
        {
            picture: "/auth_pic.jpeg",
            title: "Amnesty International Launches Global Campaign Against Torture",
            category: "Human Right"
        }
    ];

    return (
        <div className="py-10 px-20">
            <div className="text-center mb-10 flex justify-between items-center">
                <div>
                    <div className="w-[200px] h-[10px] bg-yellow rounded-[10px] mb-2"></div>
                    <div className="text-[32px] font-bold font-bold">Media</div>
                </div>
                <button className="flex gap-2 items-center">See More <BsCaretRight /></button>
            </div>
            <div className="flex gap-4 w-full h-[650px]">
                <div className="w-1/2">
                    <div className="w-full h-full relative z-10" style={{ backgroundImage: `url("${thematicarea[0].picture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", backgroundPosition: "center" }}>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-full w-1/2">
                    {thematicarea.map((record) => {
                        return (
                            <div className="w-full bg-white relative border border-[#E6E6E6] rounded-[10px] overflow-hidden">
                                <div className="w-full h-full relative z-10" style={{ backgroundImage: `url("${record.picture}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: "5px", backgroundPosition: "center" }}>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


export {
    GuestMedia
}

