import { useState } from "react";
import DefaultList from "../component/List/DefaultList";

const dummyData = [
    {
        id: 1,
        area: 'seoul',
        img: '',
        name: '예준이네 만두가게',
        startDate: '2024.09.12',
        endDate: '2024.09.14',
        cafeName: '미닝 더 갤러리',
        station: '홍대입구역 1번출구',
        formDate: '2024.08.12 PM19:00',
        enterType: '현장입장'
    },
    {
        id: 2,
        area: 'seoul',
        img: '',
        name: '예준이네 만두가게2',
        startDate: '2024.09.12',
        endDate: '2024.09.14',
        cafeName: '미닝 더 갤러리',
        station: '홍대입구역 1번출구',
        formDate: '2024.08.12 PM19:00',
        enterType: '현장입장'
    },
    {
        id: 3,
        area: 'seoul',
        img: '',
        name: '예준이네 만두가게3',
        startDate: '2024.09.12',
        endDate: '2024.09.14',
        cafeName: '미닝 더 갤러리',
        station: '홍대입구역 1번출구',
        formDate: '2024.08.12 PM19:00',
        enterType: '자율입장'
    },
    {
        id: 4,
        area: 'seoul',
        img: '',
        name: '예준이네 만두가게4',
        startDate: '2024.09.12',
        endDate: '2024.09.14',
        cafeName: '미닝 더 갤러리',
        station: '홍대입구역 1번출구',
        formDate: '2024.08.12 PM19:00',
        enterType: '예약+현장입장'
    }
]

export default function Main(){
    const [listData, setListData] = useState(dummyData);
    return(
        <div>
            <DefaultList listData={listData}  setListData={setListData}/>
        </div>
    )
}