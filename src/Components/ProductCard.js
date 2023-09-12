import '../Styles/productcard.css';
import apple from '../Assets/apple.png'

export default function ProductCard() {
    return(
    <div className='product-wrapper'>
       <div className="img-space">
        <img className='product-img' src={apple} alt="" />
       </div>
       <div className="desc-space">
        <p className="name">Green apple</p>
        <p className="price">$14.99</p>
        <p className="rating"></p>
       </div>
    </div>
    );
}