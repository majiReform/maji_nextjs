

function GuestPaginateNumbers(props: {currentPage: number, totalPages: number, setPageAndMove: (page: number, limit: number) => void}) {

    // const active = "bg-yellow";

    return (
        <div className="rounded-[8px] p-2 mx-20" style={{ zIndex: "80" }}>
            <div className="flex gap-2 text-black items-center w-fit ml-auto">
            <div className={`px-4 hover:bg-yellow rounded-[8px] text-[25px]`} onClick={() => { props.currentPage - 1 > 0 && props.setPageAndMove(props.currentPage - 1, 10)}}>{"<"}</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>{props.currentPage}</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>of</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] py-2`}>{props.totalPages} Pages</div>
                <div className={`px-4 hover:bg-yellow rounded-[8px] text-[25px]`} onClick={() => { props.currentPage + 1 <= props.totalPages && props.setPageAndMove(props.currentPage + 1, 10)}}>{">"}</div>
            </div>
        </div>
    );
}

export {
    GuestPaginateNumbers
}
