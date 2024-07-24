import Header from "./header";

export default function Layout ({children}:any){
    return(
        <div className="bg-slate-500 w-96 h-svh m-auto">
            <div>
                <Header />
            </div>
            <section>
                <div>{children}</div>
            </section>
        </div>
    )
}