import AdminOrderItem from "./AdminOrderItem";
import '../Styles/adminorderspage.css';


export default function AdminOrdersPage () {
    return (
        <div className="aordpg">
            <p className="aor-p">Orders</p>

            <div className="aordpg-tp">
                <div className="aordpg1">
                <p>All Orders</p>
                <p>Completed Orders</p>
                <p>Cancelled Orders</p>
                </div>

                <div className="aordpg2">
                    <input type="text" placeholder="Search" />
                    <div className="aordpg3">
                        <p>1 - 10 of 30</p>
                        <p>+</p>
                        <p>-</p>
                    </div>
                </div>
            </div>

            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />
            <AdminOrderItem />

        </div>
    );
}