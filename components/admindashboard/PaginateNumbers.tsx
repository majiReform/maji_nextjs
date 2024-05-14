

function PaginateNumbers() {

    const active = "bg-yellow";

    return (
        <div className="bg-adminbg absolute bottom-[20px] right-[60px] rounded-[8px] p-2" style={{ zIndex: "80" }}>
            <div className="flex gap-2 text-black items-center">
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
    PaginateNumbers
}
