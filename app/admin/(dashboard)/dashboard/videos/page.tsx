"use client"
import { SpinLoaderTwo } from "@/components/LoadingAnimation/spinLoader";
import { EmptyDocument } from "@/components/admindashboard/EmptyDocument";
import { ThematicAreaList } from "@/components/admindashboard/ThematicArea";
import { VideoList } from "@/components/admindashboard/Videos";
import { get, selectValue, selectStatus } from "@/lib/features/videos/videosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";


export default function Page() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(get({page: 1, limit: 10}));
    }, [dispatch]);

    const videoValue = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    const navigateTo = "/admin/dashboard/videos/add";


    if(status == "idle") {
        if(videoValue.length == 0) {
            return <EmptyDocument
            header="No Videos"
            body="It looks like there are no report & research available at the moment. Get started by uploading a new video. "
            buttonTitle="Upload Video"
            navigateTo={navigateTo}
             />
        }
    } else if (status == "loading" || status == "pre-load") {
        return <SpinLoaderTwo />
    }

    return (
        <VideoList navigateTo={navigateTo} />
    );
}