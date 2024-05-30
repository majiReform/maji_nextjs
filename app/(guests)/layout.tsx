import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface Props {
    readonly children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div>
            <ToastContainer />
            {children}
        </div>
    );
}