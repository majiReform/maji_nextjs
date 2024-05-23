'use client'
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";


interface PropsInterface {
    title: string
}

function AddAreaHeader(props: PropsInterface) {
    const router = useRouter();
    return (
        <button onClick={() => {router.back()}} className='font-bold flex justify-center items-center gap-4'><IoArrowBack /> <div>{props.title}</div></button>
    );
}

export {
    AddAreaHeader
}
