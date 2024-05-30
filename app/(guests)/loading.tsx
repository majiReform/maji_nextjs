import { SpinLoaderTwo } from "@/components/LoadingAnimation/spinLoader";

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <SpinLoaderTwo />
        </div>
    );
}