import '../Styles/productcard.css';
// import apple from '../Assets/apple.png'

export default function ProductCard(props) {
    return(
    <div className='product-wrapper'>
       <div className="img-space">
        <img className='product-img' src={props.card.productThumbnail} alt="" />
       </div>
       <div className="desc-space">
        <p className="name">{props.card.productName}</p>
        <p className="price">${props.card.productPrice}</p>
        <p className="rating"></p>
       </div>
    </div>
    );
}