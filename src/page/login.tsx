import { useState } from "react";
import DefaultBnt from "../component/Button/DefalutBnt";
import LoginInput from "../component/Input/LoginInput";

export default function LogIn() {
    const [clickBnt, setClickBnt] = useState(false);

    const [inputValue, setInputValue] = useState({
        id: '',
        password: ''
    })

    console.log("inputValue", inputValue);
    return (
        <div className="border-2 border-red-500 h-screen">
            <div className="border-2 border-white h-1/3"></div>
            <div className="border border-blue-500 bg-slate-200 rounded-t-3xl flex flex-col justify-end items-center h-2/3 pb-10">
                <div className="mb-2">
                    <div className="border flex flex-col justify-center items-center mb-10">
                        <h1 className="font-bold text-4xl italic text-white mb-10">LOGIN</h1>
                        <LoginInput name="id" value={`${inputValue.id}`} state={inputValue.id} setState={setInputValue}>ID</LoginInput>
                        <LoginInput name="password" value={`${inputValue.password}`} state={inputValue.password} setState={setInputValue}>PW</LoginInput>
                    </div>
                    <DefaultBnt name="loginSub" value={`${clickBnt}`} clickBnt={clickBnt} setClickBnt={setClickBnt}>Login</DefaultBnt>
                </div>
            </div>
        </div>
    )
};