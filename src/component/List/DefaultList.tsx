// import { findRow, loadGoogleSheet } from "../../api/googlesheet"

import { useEffect, useState } from "react";


// export default function DefaultList(){

//     const res = loadGoogleSheet();
//     console.log("resresresres==<>>", res)
//     return(
//         <div className="bg-slate-500">
//             <div>
//                 <div className="bg-slate-200 rounded-full">img</div>
//                 <div>
//                     <h3>title</h3>
//                     <p>2024.07.12~2024.07.15</p>
//                     <div>
//                         <p>미닝 더 갤러리</p>
//                         <p>홍대입구역</p>
//                         <p>폼오픈: 2024.07.01 PM19:00</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


export default function DefaultList() {


    return (
        <div className="bg-slate-500">
            <div className="flex">
                <div className="bg-slate-200 rounded-full w-16 h-16">img</div>
                <div className="text-sm">
                    <h3 className="font-semibold">예준이생카</h3>
                    <p>2024.07.12~2024.07.15</p>
                    <div className="flex text-[0.75rem]">
                        <p>미닝 더 갤러리 | </p>
                        <p>홍대입구역 | </p>
                        <p>폼오픈: 2024.07.01 PM19:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}