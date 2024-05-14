"use client"
import { EmptyDocument } from "@/components/admindashboard/EmptyDocument";
import { ThematicAreaList } from "@/components/admindashboard/ThematicArea";
import { selectStatus, selectValue } from "@/lib/features/thematic/thematicSlice";
import { useAppSelector } from "@/lib/hooks";

export default function Layout() {

    const thematicarea = useAppSelector(selectValue);
    
    const navigateTo = "/admin/dashboard/gallery/add"

    if(thematicarea.length == 0) {
        return <EmptyDocument
        header="No Image"
        body="It looks like there are no image available at the moment. Get started by uploading image in gallery."
        buttonTitle="Upload Image"
        navigateTo={navigateTo}
         />
    }

    return (
        <ThematicAreaList navigateTo={navigateTo} />
    );
}