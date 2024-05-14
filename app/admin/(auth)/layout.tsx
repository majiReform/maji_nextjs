import { LeftAreaComponent } from "@/components/auth/Auth";
import { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default function Layout({children}: Props) {
    return (
        <div className="flex w-full bg-[#E6E6E6]">
            <LeftAreaComponent />
            <div className="w-1/2">{children}</div>
        </div>
    );
}
