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


export default function Account () {
    const [isNaved, setIsNaved] = useState({
        dashboard: true,
        orderhistory: false,
        wishlist: false,
        shoppingcart:false,
        setting:false,
        logout:false
      });

    const toggleElement = (element) => {
        setIsNaved((prevState) => ({
          [element] : !prevState[element],
        }));
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
            {isNaved.dashboard && (
                <Dashboard />
            )}

            {isNaved.orderhistory && (
                <OrderHistory />
            )}

            {isNaved.shoppingcart && (
                <CartComponent />
            )}
             
            </main>

        </div>
        
            <Footer />
        </div>
    );
}