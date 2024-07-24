import Navigation from "./navegation";

export default function Header(){
    return(
        <header className="flex border-2 border-red-500 justify-between">
            <div className="flex items-center">
                <p className="mr-2 text-sm">지역선택 :</p>
                <select className="rounded-md text-sm py-[0.2rem]">
                    <option value="">전체</option>
                    <option value="seoul">서울</option>
                    <option value="daejeon">대전</option>
                    <option value="gwangju">광주</option>
                    <option value="daegu">대구</option>
                    <option value="busan">부산</option>
                    <option value="etc">그외지역</option>
                </select>
            </div>
            <div>
                <Navigation />
            </div>
        </header>
    )
}