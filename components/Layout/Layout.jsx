import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import {  useAppSelector } from "@/app/hooks";

const Layout = ({children}) =>{
    
  const {theme} = useAppSelector(state => state.colorTheme);
  // console.log("theme in layoutPage:", theme)
 
    return (
        // <div id="Layout"  data-theme={`${theme==true ? ("luxury"):("light")}`}>
        <div id="Layout"  data-theme={`${theme? "luxury":"light"}`}>
            <div>
                <Header/>
            </div>

            <div className="md:container mx-auto min-h-screen">
                {children}
            </div>

            <div className="bg-base-200" >
                <Footer/>
            </div>

        </div>
    )
}

export default Layout