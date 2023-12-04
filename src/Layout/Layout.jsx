import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Header/Navbar";
import Footer from "../Page/Footer/Footer";

const Layout = () => {
    return (
        
     <div className="bg-[#f7f6f2]">
           <div className="container mx-auto font-roboto" >
            <Navbar></Navbar> 

            
              <div className="">
              <Outlet></Outlet>  
              </div>
              <Footer></Footer>
        </div>
     </div>
    );
};

export default Layout;