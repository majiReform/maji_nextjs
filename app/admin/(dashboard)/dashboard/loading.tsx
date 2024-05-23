import { SpinLoader } from "components/LoadingAnimation/spinLoader";

export default function Loading() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <SpinLoader />
        </div>
    );
}