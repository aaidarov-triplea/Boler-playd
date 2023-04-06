import { Outlet } from "react-router-dom"

export const Layout = () => {

    return (
        <>
        <div>
        Layout anywhere
        <Outlet/>
         </div>  
         </> 
    )
}