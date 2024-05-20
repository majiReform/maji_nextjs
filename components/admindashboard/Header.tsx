'use client'
import { Dropdown } from '@mui/base/Dropdown';
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import Image from 'next/image';
import { RxCaretDown } from "react-icons/rx";
import { usePathname, useRouter } from 'next/navigation';
import { BsThreeDotsVertical } from "react-icons/bs";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { RxExclamationTriangle } from "react-icons/rx";
import { useState } from 'react';
import { logoutFeature } from "@/lib/features/auth/logoutFeat";
import { toast } from 'react-toastify';

function selectAreaHeader() {

    const path = usePathname();

    if(path.includes("/admin/dashboard/thematicarea")) {
        return "Thematic Area";
    } else if(path.includes("/admin/dashboard/reportandresearch")) {
        return "Report and research";
    } else if(path.includes("/admin/dashboard/videos")) {
        return "Videos";
    } else if (path.includes("/admin/dashboard/gallery")) {
        return "Gallery";
    } else if(path.includes("/admin/dashboard/settings")) {
        return "Settings";
    } else {
        return "--";
    }

}

interface openStateInterface {
    openState: boolean,
    setOpen: (state: boolean) => void,
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    // border: '2px solid #000',
    boxShadow: 24,
    zIndex: "100",
    p: 4,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRadius: "10px"
  };

function LogoutModal({openState, setOpen}: openStateInterface) {

    console.log(openState);

    const router = useRouter();
    
    const handleClose = () => {
        setOpen(false)
    }

    const logout = async () => {
        try {
            await logoutFeature();

            router.push("/admin/dashboard/thematicarea");
            
        } catch (error: any) {
            toast.error(error.response.data.message);
        }

    }

    // useEffect(() => {

    //     setOpen(openState)
    // }, [openState]);

    return (
        <Modal
            open={openState}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >   
            <Box sx={style}>
                <Typography id="modal-modal-title" className="flex items-center justify-center" variant="h6" component="h2">
                <RxExclamationTriangle className="mr-4" /> Logout?
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Are you sure you want to logout?
                </Typography>
                <div className="flex gap-4">
                    <button className="pointer-cursor w-full p-2 rounded-[10px] border" onClick={() => {handleClose()}}>Cancel</button>
                    <button className="pointer-cursor w-full p-2 rounded-[10px] text-white bg-deletebutton" onClick={() => {logout()}}>Logout</button>
                </div>
            </Box>
        </Modal>
    );
}


function AdminHeaderComponent() {

    const [openState, setOpenState] = useState(false);

    const router = useRouter()

    const settings = () => {
        router.push("/admin/dashboard/settings");
    }

    const logoutButton = () => {
        setOpenState(true);
    }

    return (
        <div className="flex justify-between items-center px-8 w-full h-[80px]">
            <LogoutModal  openState={openState} setOpen={setOpenState} />
            <div className="font-bold text-xl">{selectAreaHeader()}</div>
            <Dropdown>
                <MenuButton className='flex gap-2'>
                    <div className='h-[45px] w-[45px] rounded-full relative overflow-hidden'>
                        <Image src="/auth_pic.jpeg" fill={true} alt='Profile picture' />
                    </div>
                    <div className='text-left'>
                        <div className='font-bold'>Victor Peter</div>
                        <div>Admin</div>
                    </div>
                    <RxCaretDown className='h-[30px] w-[40px]' />
                </MenuButton>
                <Menu className='bg-white flex flex-col gap-8 p-4'>
                    <MenuItem className="cursor-pointer" onClick={settings}>Settings</MenuItem>
                    <MenuItem className="cursor-pointer" onClick={logoutButton}>Log out</MenuItem>
                </Menu>
            </Dropdown>
        </div>
    );
}

export { AdminHeaderComponent }
