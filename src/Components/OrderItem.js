import '../Styles/orderitem.css'

export default function OrderItem (props) {

    const timestamp = props.card.createdAt;
    const regularDate = new Date(timestamp).toDateString();
    return (
        <div  className="ot-wrp">
            <p className="ot1">#{props.card.id}</p>
            <p className="ot2">{regularDate}</p>
            <p className="ot3">N{props.card.orderTotal} </p>
            <p className="ot4">{props.card.OrderStatus.status}</p>
            <p className="ot5">View Details</p>

        </div>
    );
}