export default function DefaultList({ listData, setListData }: any) {

    return (
        <>
            {listData && listData.map((list: any) => (
                <div className="bg-slate-500 m-4">
                    <div className="flex p-2 border rounded-md">
                        <div className="bg-slate-200 rounded-md w-24">{list.img}</div>
                        <div className="text-sm ml-4">
                            <div>
                                <h3 className="font-semibold">{list.name}</h3>
                                <span>{list.enterType}</span>
                            </div>
                            <p>{list.startDate}~{list.endDate}</p>
                            <p className="text-[0.7rem]">{list.cafeName} | {list.station} </p>
                            <p className="text-[0.7rem]">
                                폼오픈: <span className="font-semibold">{list.formDate}</span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}