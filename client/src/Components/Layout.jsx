import { Outlet } from "react-router-dom";
import Header from "../Components/Header"


export default function Layout(){
    return(
        <div className="p-4 flex flex-col min-h-screen">
        <Header />
        <Outlet />
        </div>
    )
}