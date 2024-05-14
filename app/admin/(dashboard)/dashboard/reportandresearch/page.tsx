"use client"
import { EmptyDocument } from "@/components/admindashboard/EmptyDocument";
import { ThematicAreaList } from "@/components/admindashboard/ThematicArea";
import { selectStatus, selectValue } from "@/lib/features/thematic/thematicSlice";
import { useAppSelector } from "@/lib/hooks";

export default function Layout() {

    const thematicarea = useAppSelector(selectValue);
   
    const navigateTo = "/admin/dashboard/reportandresearch/add";

    if(thematicarea.length == 0) {
        return <EmptyDocument
        header="No Report and Research"
        body="It looks like there are no report & research available at the moment. Get started by uploading new report & research. "
        buttonTitle="Upload Report and Research"
        navigateTo={navigateTo}
         />
    }

    return (
        <ThematicAreaList navigateTo={navigateTo} />
    );
}