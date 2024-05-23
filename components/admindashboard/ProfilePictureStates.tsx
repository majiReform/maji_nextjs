import { RxAvatar } from "react-icons/rx";
import { SpinLoader } from "../LoadingAnimation/spinLoader";

function LoadingPicture() {
    return (
        <div className="w-full h-full rounded-full overflow-hidden mx-auto">
                        <RxAvatar style={{zIndex: "20", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <SpinLoader />
                        </RxAvatar>
                </div>
    );
}

function NoPicture() {
    return (
        <div className="w-full h-full rounded-full overflow-hidden mx-auto">
                        <RxAvatar style={{zIndex: "20", width: "100%", height: "100%"}} />
                </div>
    );
}


export {
    LoadingPicture,
    NoPicture
}
