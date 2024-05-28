"use client"
import { MenuItem } from "@mui/material"
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { RxCaretDown } from "react-icons/rx";
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { useRouter } from "next/navigation";
import Image from "next/image";


type childrenType = {
    text: string
    link: string
}

interface guestHeaderPropertiesInterface {
    text: string
    link?: string,
    children?: childrenType[]
}

const guestHeaderProperties: guestHeaderPropertiesInterface[] = [
    {
        text: "About Us",
        children: [
            {
                text: "Who we are",
                link: "link"
            },
            {
                text: "Our history and background",
                link: "link"
            },
            {
                text: "Where we work",
                link: "link"
            },
            {
                text: "Our Methodology",
                link: "link"
            }
        ]
    },
    {
        text: "Thematic Area",
        children: [
            {
                text: "Enviromental Rights",
                link: "link"
            },
            {
                text: "Human Rights",
                link: "link"
            },
            {
                text: "Technology",
                link: "link"
            },
            {
                text: "Gender Rights",
                link: "link"
            }
        ]
    },
    {
        text: "Research and Report",
        link: "link"
    },
    {
        text: "Media",
        children: [
            {
                text: "Videos",
                link: "link"
            },
            {
                text: "Gallery",
                link: "link"
            }
        ]
    }
];

const contactUs = {
    text: "Contact Us",
    link: "link"
};

function GuestHeader() {

    

    const router = useRouter();
    

    return (
        <div>
            {/* Desktop header */}
            <div className="hidden md:flex justify-between items-center px-20 py-4">
                <div className="relative w-[90px] h-[40px]">
                    <Image src="/maij_logo.png" fill={true} alt="Maji Logo" />
                </div>
                <div className="flex gap-8 justify-center">
                {guestHeaderProperties.map((value, index) => {
                    return (
                        <div key={index}>
                            {value.children ? (<Dropdown>
                                <MenuButton className='flex gap-2'>
                                    <div className='text-center'>
                                        <div className='font-bold'>{value.text}</div>
                                    </div>
                                    <RxCaretDown className='h-[20px] w-[20px]' />
                                </MenuButton>
                                <Menu className='bg-white flex flex-col p-4'>
                                    {value.children.map((child, indextwo) => {
                                        return (
                                            <MenuItem className="cursor-pointer" key={indextwo} onClick={() => { router.push(child.link) }}>{child.text}</MenuItem>
                                        );
                                    })}
                                </Menu>
                            </Dropdown>) : (
                                <button className='font-bold'>{value.text}</button>
                            )}
                        </div>
                    );
                })}
                </div>

                <button onClick={() => {router.push(contactUs.link)}} className='font-bold bg-yellow px-12 py-3 rounded-[10px]'>{contactUs.text}</button>
            </div>

            {/* Mobile header */}
            <div className="flex md:hidden"></div>
        </div>
    );
}


export {
    GuestHeader
}

