import { useNavigate } from "react-router-dom";

interface IFDefaultBntProps {
    name: string,
    value: string,
    clickBnt: boolean,
    setClickBnt: any,
    children: string
}

export default function DefaultBnt({ name, value, clickBnt, setClickBnt, children }: IFDefaultBntProps) {
    const navigate = useNavigate();

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { name: inputName } = e.currentTarget;
        setClickBnt((prev:any) => ({ ...prev, [inputName]: !clickBnt }));

        if(name === "login"){
            navigate('/login');
        } else if(name === "signup"){
            navigate('/signup');
        }
    }

    return (
        <button
            name={name}
            value={value}
            className="border-1 bg-slate-700 hover:bg-slate-800 text-white 
            py-4 w-[17rem] rounded-xl "
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}