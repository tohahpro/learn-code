import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-livvic">

            
                <Navbar></Navbar>       
                <Outlet></Outlet>
            
            
        </div>
    );
};

export default MainLayout;