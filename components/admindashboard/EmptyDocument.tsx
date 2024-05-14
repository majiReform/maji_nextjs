'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

interface PropsInterface {
    header: string,
    body: string,
    buttonTitle: string,
    navigateTo: string
}

function EmptyDocument(props: PropsInterface) {

    const router = useRouter();

    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col gap-4  w-[380px] items-center">
                <div className="relative h-[200px] w-[320px] mx-auto">
                    <Image src="/empty.png" fill={true} alt="Empty state picture" />
                </div>
                <div className="font-bold text-center">{props.header}</div>
                <div className="text-center">{props.body}</div>
                <button
                    className="bg-yellow text-black p-3 rounded-[8px] w-[80%]"
                    onClick={() => {router.push(props.navigateTo)}}
                >{props.buttonTitle}</button>
            </div>
        </div>
    );
}

export {
    EmptyDocument
}
