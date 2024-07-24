import { useState } from "react"

export default function Navigation() {
    const [isClick, setIsClick] = useState(false);

    const onClickHandler = () => {
        setIsClick(!isClick);
    }
    return (
        <div className="">
            {isClick && (
                <div className="bg-black/50 w-[20rem] h-screen z-50 relative top-0 right-10">

                </div>
            )}
            <div
                className="bg-black w-10 h-10 text-white cursor-pointer"
                onClick={onClickHandler}
            >
                icon
            </div>
        </div>
    )
}