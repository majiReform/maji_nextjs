

function GuestPaginateNumbers() {

    const active = "bg-yellow";

    return (
        <div className="rounded-[8px] p-2 mx-20" style={{ zIndex: "80" }}>
            <div className="flex gap-2 text-black items-center w-fit ml-auto">
                <div className={`px-4 hover:bg-yellow rounded-[8px] text-[25px]`}>{"<"}</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2 ${active}`}>1</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>2</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>3</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>4</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] text-[25px]`}>{">"}</div>
            </div>
        </div>
    );
}

export {
    GuestPaginateNumbers
}
