import { useEffect, useState } from "react";
import OrderItem from "../Components/OrderItem";
import '../Styles/orderhistory.css';

export default function OrderHistory() {
const [orders, setOrders] = useState([])

useEffect(()=>{
    fetch('https://shopery.onrender.com/api/v1/orders/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => {
    setOrders(data);
  })
  .catch((error) => {
    console.error('API Error:', error);
  });
},[])

        const mapOrders = orders.map(card=>{
            return(
            <OrderItem
            card={card}
            id={card.id}
            />
        )})
    
    return (
        <div className="ord-h-wrp">

            <div className="ord-1">
                <p className="ord-1-1">Recent Order History</p>
                <p className="ord-1-2">View all</p>
            </div>
            <div className="ord-col">
                <p className="ord-col1">Order ID</p>
                <p className="ord-col2">Date</p>
                <p className="ord-col3">Total</p>
                <p className="ord-col4">Status</p>
            </div>

            <div>
                {mapOrders}
            </div>
        </div>
    );
}