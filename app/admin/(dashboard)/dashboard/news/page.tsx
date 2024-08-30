"use client"
import { EmptyDocument } from "../../../../../components/admindashboard/EmptyDocument";
import { NewsAreaList } from "../../../../../components/admindashboard/News";
import { selectStatus, selectValue } from "@/lib/features/news/newsSlice";
import { useAppSelector } from "@/lib/hooks";
import { get } from "@/lib/features/news/newsSlice";
import { useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { SpinLoaderTwo } from "../../../../../components/LoadingAnimation/spinLoader";


export default function ThematicArea() {

    
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(get({page: 1, limit: 10}));
    }, [dispatch]);

    const news = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);

    if(status == "idle") {
        if(news.length == 0) {
            return <EmptyDocument
            header="No News Available"
            body="It looks like there are no news available at the moment. Get started by uploading news."
            buttonTitle="News"
            navigateTo="/admin/dashboard/news/add"
             />
        }
    } else if (status == "loading" || status == "pre-load") {
        return <SpinLoaderTwo />
    }


    return (
        <NewsAreaList navigateTo="/admin/dashboard/news/add" />
    );
}


