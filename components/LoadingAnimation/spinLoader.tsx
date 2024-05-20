import { ImSpinner3 } from "react-icons/im";
import { ImSpinner } from "react-icons/im";


function SpinLoader() {
    return (
        <ImSpinner3 className="animate-spin text-[40px]" />
    );
}


function SpinLoaderTwo() {
    return (
        <ImSpinner className="animate-spin text-[40px] mx-auto" />
    );
}


export {
    SpinLoader,
    SpinLoaderTwo
}
