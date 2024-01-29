import Footer from "../Components/Footer";
import dashIcon from "../Assets/dashboardIcon.svg";
import orderHistoryIcn from "../Assets/oderhistory.svg";
import wishlist from "../Assets/dashboard 2.svg";
import shoppingBag from "../Assets/dashboard 3.svg";
import settingsIcn from "../Assets/settings.svg";
import logoutIcn from "../Assets/logoutIcon.svg";
import '../Styles/account.css'
import Dashboard from "../Components/Dashboard";
import OrderHistory from "./OrderHistory";
import CartComponent from "../Components/CartComponent"
import { useState } from "react";
import AccSettings from "../Components/AccSettings";


export default function Account () {
    const [activeElement, setActiveElement] = useState("dashboard");

    const toggleElement = (element) => {
        setActiveElement(element);
    };
    return(
        <div className="Act-wrp">
  
        <div className="act-bd">

            <aside>
                <p>Navigation</p>

                <div className="nav-dsh-ctn">
                    <div className="icons">
                    <img src={dashIcon} alt=""/>
                    <img src={orderHistoryIcn} alt=""/>
                    <img src={wishlist} alt=""/>
                    <img src={shoppingBag} alt=""/>
                    <img src={settingsIcn} alt=""/>
                    <img src={logoutIcn} alt=""/>

                    </div>

                    <div className="lst-navs">
                    <p onClick={()=>toggleElement("dashboard")}>Dashboard</p>
                    <p onClick={()=>toggleElement("orderhistory")}>Order History</p>
                    <p onClick={()=>toggleElement("wishlist")}>Wishlist</p>
                    <p onClick={()=>toggleElement("shoppingcart")}>Shopping Cart</p>
                    <p onClick={()=>toggleElement("settings")}>Settings</p>
                    <p onClick={()=>toggleElement("logout")}>Log-out</p>
                    </div>
                </div>
                
            </aside>

            < main>
            {activeElement === "dashboard" && <Dashboard />}
            {activeElement === "orderhistory" && <OrderHistory />}
            {activeElement === "shoppingcart" && <CartComponent />}
            {activeElement === "settings" && <AccSettings />} 
            </main>

        </div>
        
            <Footer />
        </div>
    );
}