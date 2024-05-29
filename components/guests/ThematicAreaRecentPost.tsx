import Image from "next/image";

function ThematicAreaRecentPosts() {

    const posts = [
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Human Rght",
            date: "7th May, 2024"
        },
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Gender Right",
            date: "7th May, 2024"
        },
        {
            title: "Amnesty International Launches Global Campaign Against Torture",
            picture: "/image 14.png",
            category: "Technology",
            date: "7th May, 2024"
        }
    ];

    return (
        <div className="mx-20 my-10">
            <div className="text-[32px] font-bold mb-2">Recent Posts</div>
            {posts.map((post, index) => {
                return (
                    <div className="mb-2" key={index}>
                        <div className="flex justify-between py-2">
                            <div>
                                <div className="font-bold">Amnesty International Launches Global Campaign Against Torture</div>
                                <div>{post.category} | {post.date}</div>
                            </div>
                            <div className="relative h-[50px] w-[100px] rounded-[10px] overflow-hidden"><Image src={post.picture} fill={true} alt="Img" /></div>
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export {
    ThematicAreaRecentPosts
}
