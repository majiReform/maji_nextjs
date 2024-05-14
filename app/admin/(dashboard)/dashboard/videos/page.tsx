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

    const navigateTo = "/admin/dashboard/videos/add";

    if(thematicarea.length == 0) {
        return <EmptyDocument
        header="No Videos"
        body="It looks like there are no report & research available at the moment. Get started by uploading a new video. "
        buttonTitle="Upload Video"
        navigateTo={navigateTo}
         />
    }

    return (
        <ThematicAreaList navigateTo={navigateTo} />
    );
}