import { AdminHeaderComponent } from "@/components/admindashboard/Header";
import { AdminSidebarComponent } from "@/components/admindashboard/Sidebar";
import { ReactNode } from "react";

interface Props {
    readonly children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSidebarComponent />
            <main className="w-[85%] overflow-y-hidden">
                <AdminHeaderComponent />
                <div className="h-[calc(100%_-_80px)] bg-adminbg overflow-y-auto p-4">{children}</div>
            </main>
        </div>
    );
}