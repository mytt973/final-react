import { Outlet } from "react-router-dom";
import MainNav from "@/navigation/MainNav";
import {Header, Footer} from "@/layouts";
import { ThemeContext } from "@/contexts/ThemeContexts/ThemeContext";
import { useContext } from "react";
import "./Root.css"
const Root = ()=>{

    const {darkMode}=useContext(ThemeContext);
    //
    //const MainCont= `main-content ${darckMode && "darkMode"}`
    const MaincontentClass = darkMode? "main-content  darckmode":"main-content"
return(
<main className={MaincontentClass}>

    <Header/>
    <MainNav/>
    <Outlet/>
    <Footer/>
   
</main>)
}
export default Root;