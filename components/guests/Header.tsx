"use client"
import { MenuItem } from "@mui/material"
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { RxCaretDown } from "react-icons/rx";
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { useRouter } from "next/navigation";
import Image from "next/image";
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import Link from "next/link";
import { BsMenuApp } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import { IoMenuSharp } from "react-icons/io5";

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
                link: "/aboutus#aboutwhoweare"
            },
            {
                text: "Our history and background",
                link: "/aboutus#historyandbackground"
            },
            {
                text: "Where we work",
                link: "/aboutus#aboutwherewework"
            },
            {
                text: "Our Methodology",
                link: "/aboutus#ourmethodology"
            }
        ]
    },
    {
        text: "Thematic Area",
        children: [
            {
                text: "Enviromental Rights",
                link: "/thematicarea/bycategory/enviromental-rights"
            },
            {
                text: "Human Rights",
                link: "/thematicarea/bycategory/human-rights"
            },
            {
                text: "Technology",
                link: "/thematicarea/bycategory/technology"
            },
            {
                text: "Gender Rights",
                link: "/thematicarea/bycategory/gender-rights"
            }
        ]
    },
    {
        text: "Research and Report",
        link: "/researchandreport"
    },
    {
        text: "Media",
        children: [
            {
                text: "Videos",
                link: "/media"
            },
            {
                text: "Gallery",
                link: "/media"
            }
        ]
    }
];

const contactUs = {
    text: "Contact Us",
    link: "/#contactus"
};

function GuestHeader() {



    const router = useRouter();


    const [expanded, setExpanded] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);

    const [showMenu, setShowMenu] = useState(false);

    // const handleExpansion = () => {
    //     setExpanded((prevExpanded) => !prevExpanded);
    // };

    return (
        <div style={{zIndex: "1800"}}>
            {/* Desktop header */}
            <div className="hidden md:flex justify-between items-center px-20 py-2">
                <div className="relative w-[90px] h-[40px] cursor-pointer" onClick={() => {router.push("/")}}>
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
                                    <Menu className='bg-white flex flex-col p-4' style={{zIndex: "1800"}}>
                                        {value.children.map((child, indextwo) => {
                                            return (
                                                <MenuItem className="cursor-pointer" key={indextwo} onClick={() => { router.push(child.link) }}>{child.text}</MenuItem>
                                            );
                                        })}
                                    </Menu>
                                </Dropdown>) : (
                                    <button className='font-bold' onClick={() => {router.push(value.link!!)}}>{value.text}</button>
                                )}
                            </div>
                        );
                    })}
                </div>

                <button onClick={() => { router.push(contactUs.link) }} className='font-bold bg-yellow px-12 py-3 rounded-[10px]'>{contactUs.text}</button>
            </div>

            {/* Mobile header */}
            <div className="flex flex-col md:hidden w-full">
                <div className="flex justify-between items-center px-8 py-2">
                    <div className="relative w-[90px] h-[40px] cursor-pointer" onClick={() => {router.push("/")}}>
                        <Image src="/maij_logo.png" fill={true} alt="Maji Logo" />
                    </div>
                    <IoMenuSharp className="text-[25px]" onClick={() => { setShowMenu(!showMenu) }} />
                </div>
                <div className={showMenu ? "flex flex-col" : "hidden"}>
                    <Accordion
                        expanded={expanded}
                        style={{ boxShadow: "none", border: "none" }}
                        onChange={() => { setExpanded(!expanded) }}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<RxCaretDown />}
                            aria-controls={`panel1-content`}
                            id={`panel1-header`}
                        >
                            <Typography className="font-bold">{guestHeaderProperties[0].text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            {guestHeaderProperties[0].children?.map((property, index) => {
                                return (
                                    <Link href={property.link}>
                                        <Typography className="mb-2">
                                            {property.text}
                                        </Typography>
                                    </Link>
                                );
                            })}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded2}
                        style={{ boxShadow: "none", border: "none" }}
                        onChange={() => { setExpanded2(!expanded2) }}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded2 ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded2 ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<RxCaretDown />}
                            aria-controls={`panel2-content`}
                            id={`panel2-header`}
                        >
                            <Typography className="font-bold">{guestHeaderProperties[1].text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            {guestHeaderProperties[1].children?.map((property, index) => {
                                return (
                                    <Link href={property.link}>
                                        <Typography className="mb-2">
                                            {property.text}
                                        </Typography>
                                    </Link>
                                );
                            })}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded3}
                        style={{ boxShadow: "none", border: "none" }}
                        onChange={() => { setExpanded3(!expanded3) }}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded3 ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded3 ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<RxCaretDown />}
                            aria-controls={`panel3-content`}
                            id={`panel3-header`}
                        >
                            <Typography className="font-bold">{guestHeaderProperties[2].text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            <Link href="/researchandreport/bycategory/research">
                                <Typography className="mb-2">
                                    Research
                                </Typography>
                            </Link>

                            <Link href="/researchandreport/bycategory/report">
                                <Typography className="mb-2">
                                    Report
                                </Typography>
                            </Link>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded4}
                        style={{ boxShadow: "none", border: "none" }}
                        onChange={() => { setExpanded4(!expanded4) }}
                        slots={{ transition: Fade as AccordionSlots['transition'] }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded4 ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded4 ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<RxCaretDown />}
                            aria-controls={`panel4-content`}
                            id={`panel4-header`}
                        >
                            <Typography className="font-bold">{guestHeaderProperties[3].text}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>

                            {guestHeaderProperties[3].children?.map((property, index) => {
                                return (
                                    <Link href={property.link}>
                                        <Typography className="mb-2">
                                            {property.text}
                                        </Typography>
                                    </Link>
                                );
                            })}
                        </AccordionDetails>
                    </Accordion>
                    <div className="px-4 py-2">
                        <button onClick={() => { router.push(contactUs.link) }} className='font-bold bg-yellow py-3 w-full rounded-[10px]'>{contactUs.text}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export {
    GuestHeader
}

