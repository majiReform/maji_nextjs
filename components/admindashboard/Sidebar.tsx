'use client'
import { closeSidebar, isOpenValue } from "@/lib/features/sidebar/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";

interface buttonPropertyInterface {
    name: string,
    path: string
}

function SidebarButton() {

    const router = useRouter();

    const dispatch = useAppDispatch();

    const pathName = usePathname();

    const buttonProperties: buttonPropertyInterface[] = [
        {
            name: "Thematic Areas",
            path: "/admin/dashboard/thematicarea"
        },
        {
            name: "Report And Research",
            path: "/admin/dashboard/reportandresearch"
        },
        {
            name: "Videos",
            path: "/admin/dashboard/videos"
        },
        {
            name: "Gallery",
            path: "/admin/dashboard/gallery"
        },
    ];

    return (
        <div className="flex flex-col gap-2 p-2">
            {buttonProperties.map((buttonProperty: buttonPropertyInterface) => {
                return (
                    <button className={`pl-10 py-6 text-left rounded-[8px] ${pathName.includes(buttonProperty.path) ? "bg-black text-white" : ""}`} onClick={() => {router.push(buttonProperty.path); dispatch(closeSidebar())}}>{buttonProperty.name}</button>
                );
            })}
        </div>
    );
}

function AdminSidebarComponent () {

    const dispatch = useAppDispatch();

    const isSidebarOpen = useAppSelector(isOpenValue);

    return (
        <div className={`xl:flex xl:flex-col w-full absolute ${isSidebarOpen ? "flex flex-col" : "hidden"} xl:relative xl:w-[15%] gap-20 py-4 bg-white h-screen`} style={{zIndex: "200"}}>
            <div className="flex items-center">
            <div className="relative h-[40px] w-[100px] mx-auto">
                <Image src="/maij_logo.png" fill={true} alt="Maij logo" />
            </div>
            <MdClose className="mr-4 xl:hidden" onClick={() => {dispatch(closeSidebar())}} />
            </div>
            <SidebarButton />
        </div>
    );
}

export {AdminSidebarComponent}