import OrderItem from "../Components/OrderItem";
import '../Styles/orderhistory.css';

export default function OrderHistory() {
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
                <OrderItem />
            </div>
        </div>
    );
}