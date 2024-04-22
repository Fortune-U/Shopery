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

    function logout(){
        fetch('https://shopery.onrender.com/api/v1/auth/logout', {
        method: 'POST',
        credentials: 'include',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        // },
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
      })

      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
      })
    }
    return(
        <div className="Act-wrp">
  
        <div className="act-bd">

            <aside>
                <p>Navigation</p>

                <div className="nav-dsh-ctn">
                    <div className="icons">
                    <img src={dashIcon} alt=""/>
                    <img src={orderHistoryIcn} alt=""/>
                    <img src={settingsIcn} alt=""/>
                    <img src={logoutIcn} alt=""/>

                    </div>

                    <div className="lst-navs">
                    <p onClick={()=>toggleElement("dashboard")}>Dashboard</p>
                    <p onClick={()=>toggleElement("orderhistory")}>Order History</p>
                    <p onClick={()=>toggleElement("settings")}>Settings</p>
                    <p onClick={logout}>Log-out</p>
                    </div>
                </div>
                
            </aside>

            < main className="acc-main">
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