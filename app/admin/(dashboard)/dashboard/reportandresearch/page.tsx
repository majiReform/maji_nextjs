"use client"
import { SpinLoaderTwo } from "components/LoadingAnimation/spinLoader";
import { EmptyDocument } from "components/admindashboard/EmptyDocument";
import { ResearchAndReportList } from "components/admindashboard/ResearchAndReport";
import { ThematicAreaList } from "components/admindashboard/ThematicArea";
import { get, selectStatus, selectValue } from "lib/features/research/researchSlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { useEffect } from "react";

export default function Page() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(get({page: 1, limit: 10}));
    }, [dispatch]);

    const researchArea = useAppSelector(selectValue);
    const status = useAppSelector(selectStatus);
   
    const navigateTo = "/admin/dashboard/reportandresearch/add";


    if(status == "idle") {
        if(researchArea.length == 0) {
            return <EmptyDocument
            header="No Report and Research"
            body="It looks like there are no report & research available at the moment. Get started by uploading new report & research. "
            buttonTitle="Upload Report and Research"
            navigateTo={navigateTo}
             />
        }
    } else if (status == "loading" || status == "pre-load") {
        return <SpinLoaderTwo />
    }

    return (
        <ResearchAndReportList navigateTo={navigateTo} />
    );
}