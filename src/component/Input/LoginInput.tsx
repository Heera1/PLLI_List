import React from "react"

interface ILoginInputProps {
    name: string,
    value: string,
    children: string,
    state: string,
    setState: any
}

export default function LoginInput({ name, value, children, state, setState }: ILoginInputProps) {

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value, name:inputName } = e.target;
        setState((prev:any) => ({...prev, [inputName]: value}));

    }

    return (
        <div className="pb-2">
            <label className="px-2">{children}</label>
            <input name={name} value={value} onChange={onChangeHandler}
                className="py-[0.2rem] rounded-lg"
            />
        </div>
    )
}