"use client"
import { EmptyDocument } from "@/components/admindashboard/EmptyDocument";
import { ThematicAreaList } from "@/components/admindashboard/ThematicArea";
import { selectStatus, selectValue } from "@/lib/features/thematic/thematicSlice";
import { useAppSelector } from "@/lib/hooks";

export default function Layout() {

    const thematicarea = useAppSelector(selectValue);
    // const status = useAppSelector(selectStatus);

    // const theList: any[] = [
    //     {
    //         picture: "/authpic",
    //         category: "",
    //         title: "",
    //         details: ""
    //     }
    // ];

    if(thematicarea.length == 0) {
        return <EmptyDocument
        header="No Thematic Areas Available"
        body="It looks like there are no thematic area available at the moment. Get started by uploading new thematic areas."
        buttonTitle="Upload Thematic Area"
        navigateTo="/admin/dashboard/thematicarea/add"
         />
    }

    return (
        <ThematicAreaList navigateTo="/admin/dashboard/thematicarea/add" />
    );
}