import { useState } from "react"

export default function Navigation() {
    const [isClick, setIsClick] = useState(false);

    const onClickHandler = () => {
        setIsClick(!isClick);
    }

    const menuList = [
        {
            name: "menu1",
            id: 1,
        },
        {
            name: "menu2",
            id: 2,
        },
        {
            name: "menu3",
            id: 3,
        },
        {
            name: "menu4",
            id: 4,
        },
    ]
    return (
        <div className="">
            <div
                className="bg-black w-10 h-10 text-white cursor-pointer"
                onClick={onClickHandler}
            >
                icon
                {isClick ? (
                    <ul className="bg-black/50 z-50 text-right
                    min-[340px]:px-2 pt-6 w-[20rem] right-0 relative">
                        {menuList && menuList.map((li) => (
                            <li key={li.id}
                                className="my-3 text-white/80 flex items-center gap-x-4 p-2hover:bg-white/40  rounded-md mt-6 
transitions duration-300 text-xl hover:text-white hover:font-bold">{li.name}</li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}


//<div className="bg-black/50 w-[20rem] h-screen z-50 fixed bottom-0 right-10">
//</div>

