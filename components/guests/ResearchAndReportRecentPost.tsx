import { thematicAreaList } from "@/lib/features/thematic/thematicAPI";
import { ThematicAreaInterface, get } from "@/lib/features/thematic/thematicSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import { ResearchAndReportInterface } from "@/lib/features/research/researchSlice";
import { researchList } from "@/lib/features/research/researchAPI";
import { useRouter } from "next/navigation";

function ResearchAndReportRecentPosts() {

    const [recentPost, setRecentPost] = useState<ResearchAndReportInterface[]>([]);
    const [status, setStatus] = useState("loading");
    const router = useRouter();

    const fetchDetails = async () => {
        const list = await researchList(1, 3);
        console.log(list.response.details.results);
        setRecentPost(list.response.details.results);
        setStatus("idle");
    }

    useEffect(() => {
        fetchDetails();
    }, []);

    return (
        <div className="mx-8 xl:mx-20 my-10">
            <div className="text-[20px] xl:text-[32px] font-bold mb-2">Recent Posts</div>
            {recentPost.map((post, index) => {
                return (
                    <div className="mb-2" key={index}>
                        <div className="flex justify-between py-2">
                            <div>
                                <div className="font-bold cursor-pointer" onClick={() => {router.push(`/researchandreport/${post._id}`)}}>{post.title}</div>
                                <div className="text-sm text-[#737373]">{post.category!!.split("-").map(word => word[0].toLocaleUpperCase() + word.slice(1)).join(" ")} | {moment(post.createdAt).format("Do MMMM, YYYY")}</div>
                            </div>
                            <div className="relative h-[50px] w-[100px] rounded-[10px] overflow-hidden"><img src={post.pictureURL!!} alt="Img" /></div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export {
    ResearchAndReportRecentPosts
}
