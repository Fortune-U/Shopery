import { useState } from "react";
//import Dashboard from "../../Components/Dashboard";
import OrderHistory from "../OrderHistory";
import CartComponent from "../../Components/CartComponent";
import AccSettings from "../../Components/AccSettings";
import  dash from "../../Assets/dashadmin.png";
import  prod from "../../Assets/bag-2.png";
import  ord from "../../Assets/bag-2.png";
import  mess from "../../Assets/message-text.png";
import  blog from "../../Assets/jam_write.png";
import  sett from "../../Assets/sett.png";
import '../../Styles/admindashboard.css';
import AdminAddProducts from "../../Components/AdminAddProductsPage";
import AdminDash from "../../Components/AdminDash";
import  AdminOrdersPage  from "../../Components/AdminOrdersPage";

export default function Admindashboard () {

    const [activeElement, setActiveElement] = useState("dashboard");

    const toggleElement = (element) => {
        setActiveElement(element);
    };

    

    return(
        <div className="ad-wrp">
            <div className="add-tt">Eko-baazar</div>

            <div className="ad-bd">
                <div>
                <div className="ad-dsh-ctn">
                    <div className="ad-icons">
                    <img onClick={()=>toggleElement("dashboard")} src={dash} alt=""/>
                    <img onClick={()=>toggleElement("products")} src={prod} alt=""/>
                    <img onClick={()=>toggleElement("orders")} src={ord} alt=""/>
                    <img onClick={()=>toggleElement("messages")} src={mess} alt=""/>
                    <img onClick={()=>toggleElement("blog")} src={blog} alt=""/>
                    <img onClick={()=>toggleElement("logout")} src={sett} alt=""/>

                    </div>

                    <div className="ad-lst-navs">
                    <p onClick={()=>toggleElement("dashboard")}>Dashboard</p>
                    <p onClick={()=>toggleElement("products")}>Products</p>
                    <p onClick={()=>toggleElement("orders")}>Orders</p>
                    <p onClick={()=>toggleElement("messages")}>Messages</p>
                    <p onClick={()=>toggleElement("blog")}>Blog</p>
                    <p onClick={()=>toggleElement("logout")}>Settings</p>
                    </div>
                </div>
                </div>

                <div className="admin-main">
                <div className="admin-wlcm">
                Welcome Back, KingNigga
                </div>
               
                    {activeElement === "dashboard" && <AdminDash />}
                    {activeElement === "products" && <AdminAddProducts />}
                    {activeElement === "orders" && <AdminOrdersPage />}
                    {activeElement === "messages" && <AccSettings />} 
                    {activeElement === "blog" && <AccSettings />} 
                    {activeElement === "settings" && <AccSettings />} 
           

                </div>

            </div>

        </div>
    );
}