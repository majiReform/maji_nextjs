import { Dropdown } from '@mui/base/Dropdown';
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
// import { PaginateNumbers } from "./PaginateNumbers";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RxExclamationTriangle } from "react-icons/rx";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ResearchAndReportInterface } from '@/lib/features/research/researchSlice';
import { useRouter } from 'next/navigation';



function GuestResearchAdReportList(props: {list: ResearchAndReportInterface[]}) {

    const router = useRouter();

    const thematicarea = [
        {
            title: "This is a title",
            category: "Gender Right",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Gender Right",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Gender Right",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Research",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Research",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Research",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Research",
            picture: "/auth_pic.jpeg"
        },
        {
            title: "This is a title",
            category: "Research",
            picture: "/auth_pic.jpeg"
        }
    ];

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 xl:grid-cols-3 gap-8 py-8 xl:py-10 mx-8 xl:mx-20'>
            {props.list.map((record) => {
                return (
                    <div className="w-full bg-white relative rounded-[10px] overflow-hidden">
                        <div className="w-full h-[240px] relative z-10 rounded-t-[10px]" style={{ backgroundImage: `url("${record.pictureURL}")`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                            {/* <Image src={record.picture} fill={true} alt="Thematic picture list" className="z-10" /> */}
                            <div className="top-[20px] left-[20px] absolute z-40 bg-yellow rounded-[40px] text-black font-bold w-fit px-2">{record.category?.split("-").map(v => v[0].toLocaleUpperCase() + v.slice(1)).join(" ")}</div>
                        </div>
                        <div>
                            <div className="pt-4 flex justify-between w-full">
                                <div className="font-bold" style={{ textWrap: "wrap" }}>{record.title!!.length > 100 ? record.title?.slice(0, 100) + "..." : record.title}</div>
                            </div>
                            <button className='bg-yellow text-black w-full py-2 my-4 font-bold rounded-[10px]' onClick={() => {router.push(`/researchandreport/${record._id}`)}}>Read</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export {
    GuestResearchAdReportList
}
