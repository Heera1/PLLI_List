import { useState } from "react";
import DefaultBnt from "../component/Button/DefalutBnt";

export default function Landing() {
    const [clickBnt, setClickBnt] = useState({
        login: false,
        signup: false
    });
    const { login, signup } = clickBnt;


    console.log("clickBnt", clickBnt)
    return (
        <div className="border-2 border-red-500 h-screen">
            <div className="border border-blue-500 flex flex-col justify-end items-center h-full pb-10">
                <div className="mb-2">
                    <DefaultBnt name="login" value={`${login}`} clickBnt={login} setClickBnt={setClickBnt}>Login</DefaultBnt>
                </div>
                <div>
                    <DefaultBnt name="signup" value={`${signup}`} clickBnt={signup} setClickBnt={setClickBnt}>Sign Up</DefaultBnt>
                </div>
            </div>
        </div>
    )
}