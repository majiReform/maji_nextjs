import Image from "next/image";

function HistoryAndBackground() {
    return (
        <div className="mx-20">
            <div>
                <div className="text-center text-[32px] font-bold mb-4">History and Background</div>
            </div>
            <div>
                <div className="relative h-[400px] mb-8">
                    <Image src="/image 17.png" fill={true} alt="Image 17" />
                </div>
                <div className="flex flex-col gap-8 text-[20px]">
                    <div>
                        The Media Awareness and Justice Initiative was initiated as a youth oriented project that sought to bring much needed capacity building and tranings to young people and marginalised groups across the Niger Delta.
                    </div>
                    <div>
                        Our focus then, was to increase community voice on environmental and human right protection, social impact and youth developement. Our model was to use build capacity and community engagement to positively influence key stakeholders and policy maker decisions.
                        By "Influencing stakeholders" we are referring to a vertical process that supports the development of projects, initiatives and people oriented engagements with the potential of influencing policy in the ways we cannot.
                    </div>
                    <div>
                        This process is a crucial component that supports community voices, using national and international platforms to share real life situations and outlining potential solutions
                    </div>
                    <div>
                        However, for true transformation to take place, it is necessary to supplement vertically-oriented attempts to influence outside decision makers by broadening and strengthening base organizations and communities to represent themselves, mobilize support, and hold local government accountable.
                    </div>
                </div>
            </div>
        </div>
    );
}

export {
    HistoryAndBackground
}
