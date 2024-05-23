"use client"
import { SpinLoaderTwo } from "components/LoadingAnimation/spinLoader";
import { EmptyDocument } from "components/admindashboard/EmptyDocument";
import { GalleryList } from "components/admindashboard/Gallery";
import { get, selectStatus, selectValue } from "lib/features/gallery/gallerySlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { useEffect } from "react";

export default function Layout() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(get({page: 1, limit: 10}));
    }, [dispatch]);

    const gallery = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);
    
    const navigateTo = "/admin/dashboard/gallery/add";

    if(status == "idle") {
        if(gallery.length == 0) {
            return <EmptyDocument
            header="No Image"
            body="It looks like there are no image available at the moment. Get started by uploading image in gallery."
            buttonTitle="Upload Image"
            navigateTo={navigateTo}
             />
        }
    } else if (status == "loading" || status == "pre-load") {
        return <SpinLoaderTwo />
    }
    

    return (
        <GalleryList navigateTo={navigateTo} />
    );
}