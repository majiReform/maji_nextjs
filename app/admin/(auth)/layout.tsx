import { LeftAreaComponent } from "../../../components/auth/Auth";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    readonly children: ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <div className="flex w-full bg-[#E6E6E6]">
            <ToastContainer />
            <LeftAreaComponent />
            <div className="w-1/2">{children}</div>
        </div>
    );
}
