'use client'
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface buttonPropertyInterface {
    name: string,
    path: string
}

function SidebarButton() {

    const router = useRouter();

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
                    <button className={`pl-10 py-6 text-left rounded-[8px] ${pathName.includes(buttonProperty.path) ? "bg-black text-white" : ""}`} onClick={() => {router.push(buttonProperty.path)}}>{buttonProperty.name}</button>
                );
            })}
        </div>
    );
}

function AdminSidebarComponent () {
    return (
        <div className="flex flex-col w-[15%] gap-20 py-4">
            <div className="relative h-[40px] w-[100px] mx-auto">
                <Image src="/maij_logo.png" fill={true} alt="Maij logo" />
            </div>
            <SidebarButton />
        </div>
    );
}

export {AdminSidebarComponent}