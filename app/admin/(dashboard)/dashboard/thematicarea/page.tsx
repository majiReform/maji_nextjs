"use client"
import { EmptyDocument } from "components/admindashboard/EmptyDocument";
import { ThematicAreaList } from "components/admindashboard/ThematicArea";
import { selectStatus, selectValue } from "lib/features/thematic/thematicSlice";
import { useAppSelector } from "lib/hooks";
import { get } from "lib/features/thematic/thematicSlice";
import { useAppDispatch } from "lib/hooks";
import { useEffect } from "react";
import { SpinLoaderTwo } from "components/LoadingAnimation/spinLoader";


export default function ThematicArea() {

    
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(get({page: 1, limit: 10}));
    }, [dispatch]);

    const thematicarea = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    if(status == "idle") {
        if(thematicarea.length == 0) {
            return <EmptyDocument
            header="No Thematic Areas Available"
            body="It looks like there are no thematic area available at the moment. Get started by uploading new thematic areas."
            buttonTitle="Upload Thematic Area"
            navigateTo="/admin/dashboard/thematicarea/add"
             />
        }
    } else if (status == "loading" || status == "pre-load") {
        return <SpinLoaderTwo />
    }


    return (
        <ThematicAreaList navigateTo="/admin/dashboard/thematicarea/add" />
    );
}


