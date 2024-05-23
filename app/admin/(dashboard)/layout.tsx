"use client"
import { AdminHeaderComponent } from "@/components/admindashboard/Header";
import { AdminSidebarComponent } from "@/components/admindashboard/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
    readonly children: ReactNode;
}

export default function Layout({ children }: Props) {

    // "You are not logged in"

    return (
        <div className="flex h-screen overflow-hidden">
            <ToastContainer />
            <AdminSidebarComponent />
            <main className="w-[85%] overflow-y-hidden">
                <AdminHeaderComponent />
                <div className="h-[calc(100%_-_80px)] bg-adminbg overflow-y-auto p-4">{children}</div>
            </main>
        </div>
    );
}