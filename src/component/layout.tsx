export default function Layout ({children}:any){
    return(
        <div className="flex border-2 black">
            <div>헤더</div>
            <section>
                <div>네비게이션</div>
                <div>{children}</div>
            </section>
        </div>
    )
}