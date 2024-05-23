import { LoginComponent } from "@/components/auth/Auth";
import { Metadata } from "next";

export default function Page() {
    return (
        <LoginComponent />
    );
}

export const metadata: Metadata = {
    title: "Maji - Admin Login",
  };