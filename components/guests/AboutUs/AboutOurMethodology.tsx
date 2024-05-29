"use client"
import Image from "next/image";
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useState } from "react";
import { PiPlus } from "react-icons/pi";


function AboutOurMethodology() {

    const writeups = [
        {
            title: "01",
            body: "An established, ongoing dialogue with participants all along the process of conceiving, planning, implementing and evaluating the project."
        },
        {
            title: "02",
            body: "An established, ongoing dialogue with participants all along the process of conceiving, planning, implementing and evaluating the project."
        },
        {
            title: "03",
            body: "An established, ongoing dialogue with participants all along the process of conceiving, planning, implementing and evaluating the project."
        },
        {
            title: "04",
            body: "An established, ongoing dialogue with participants all along the process of conceiving, planning, implementing and evaluating the project."
        }
    ];

    return (
        <div className="mx-20 my-16">
            <div className="text-center">
                <div className="text-center text-[32px] font-bold mb-4">Our Methodology</div>
            </div>
            <div className="flex gap-10 items-center">
                <div className="w-1/2 h-[600px] relative">
                    <Image src="/Group 366.png" fill={true} alt="Image 17" />
                </div>
                <div className="flex flex-col gap-8 w-1/2 text-[20px]">
                    <div>
                        Clearly, independent, community created initiatives and media is a crucial tool for rural and urban development. It helps a historically marginalized group represent itself on its own terms, which allows a fuller story to be made public.
                    </div>
                    <div>
                        Furthermore, the practice of making participatory initiatives and media, rooted in popular education pedagogy, bonds people together in a horizontal and democratic way. Beyond the developmental value to the individual, participatory initiatives and media allows communities facing similar situations to speak to one another, share resources and tactics, and develop a common strategy for social change.
                    </div>
                    <div>
                        The Media Awareness and Justice Initiative is designed around what we consider to be the characteristics of a successful participatory media initiative:
                    </div>
                    <div>
                        {writeups.map((writeup, index) => {

                            const [expanded, setExpanded] = useState(false);

                            const handleExpansion = () => {
                                setExpanded((prevExpanded) => !prevExpanded);
                            };

                            return (
                                <Accordion
                                    key={index}
                                    expanded={expanded}
                                    style={{ boxShadow: "none", border: "none" }}
                                    onChange={handleExpansion}
                                    slots={{ transition: Fade as AccordionSlots['transition'] }}
                                    slotProps={{ transition: { timeout: 400 } }}
                                    sx={{
                                        '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                                        '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<PiPlus />}
                                        aria-controls={`panel${index + 1}-content`}
                                        id={`panel${index + 1}-header`}
                                    >
                                        <Typography className="font-bold text-[40px]">{writeup.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {writeup.body}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        })}

                        {/* <Accordion style={{boxShadow: "none", border: "none"}}>
                            <AccordionSummary
                                expandIcon={<PiPlus />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Typography>Default transition using Collapse</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    AboutOurMethodology
}
