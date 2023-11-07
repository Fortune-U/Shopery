import '../Styles/productcard.css';
import activeBag from '../Assets/Add To Cart.png';
import idleBag from '../Assets/addBag.png'
import idleWishlist from '../Assets/Add To wishlist.png'
import activeWsihlist from '../Assets/Add To wishlist red.png'
import quickView from '../Assets/Quick View.png'
import { useState } from 'react';

// import apple from '../Assets/apple.png'



export default function ProductCard(props) {

    //add to bag or cart
    const [add,setAdded] = useState({
        isAdded : false
    })
    let bagIcon = add.isAdded?  activeBag : idleBag
    const productStyle = {
    border: add.isAdded?  ' 2px solid  #2C742F' : ' 2px solid #E6E6E6' ,
    boxShadow: add.isAdded? '0px 0px 12px 0px rgba(32, 181, 38, 0.32)' : 'none',
    }

    function toggleAdd(){
    setAdded(prevAdd=>({
    ...prevAdd,
    isAdded : !prevAdd.isAdded
    }))
    }

    //add to wishlist 
    const [addToWishlist,setAddToWishlist] = useState({
            isAdded : false
    })
    let WishlistIcon = addToWishlist.isAdded?  activeWsihlist : idleWishlist

    function toggleAddToWishlist(){
        setAddToWishlist(prevAdd=>({
        ...prevAdd,
        isAdded : !prevAdd.isAdded
        }))
    }

    // hover effect for quick actions 
    const [entered,setEntered] =useState({
        isEntered : false
    })

    let mouseEntered = entered.isEntered;
    const quickViewStyle = {
        display: mouseEntered? 'flex' : 'none'
    }

    function handleMouseEntered(){
        setEntered(prevEntered=>({
            ...prevEntered,
            isEntered:true
        })) 
    }
    function handleMouseLeave(){
        setEntered(prevEntered=>({
            ...prevEntered,
            isEntered:false
        }))
    }

    //Declarations for rating star svg
    let onStar = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
    <path d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18712C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50472 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76575 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84162L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18712L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z" fill="#FF8A00"/>
    </svg> 

    let offStar =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
        <path d="M8.31008 11.9111L11.8566 14.1577C12.31 14.4446 12.8725 14.0177 12.7381 13.4884L11.7138 9.45805C11.6848 9.34579 11.6882 9.22764 11.7234 9.11718C11.7586 9.00673 11.8243 8.90846 11.9129 8.83368L15.0933 6.18712C15.5106 5.83949 15.2958 5.14593 14.7586 5.11105L10.6056 4.84105C10.4938 4.83312 10.3866 4.79359 10.2964 4.72707C10.2061 4.66055 10.1367 4.56977 10.096 4.4653L8.5469 0.564927C8.50472 0.454081 8.42984 0.358673 8.33219 0.291355C8.23455 0.224037 8.11875 0.187988 8.00015 0.187988C7.88155 0.187988 7.76575 0.224037 7.6681 0.291355C7.57046 0.358673 7.49558 0.454081 7.4534 0.564927L5.90427 4.4653C5.86372 4.56988 5.79429 4.66077 5.70406 4.7274C5.61383 4.79402 5.50652 4.83364 5.39465 4.84162L1.24171 5.11161C0.705084 5.14593 0.489084 5.83949 0.907022 6.18712L4.0874 8.83424C4.17588 8.90898 4.2415 9.00715 4.27673 9.11749C4.31195 9.22783 4.31534 9.34587 4.28652 9.45805L3.33702 13.1959C3.17558 13.8309 3.85115 14.3434 4.39452 13.9986L7.69077 11.9111C7.78342 11.8522 7.89093 11.8209 8.00071 11.8209C8.11049 11.8209 8.218 11.8522 8.31065 11.9111H8.31008Z" fill="#CCCCCC"/>
        </svg>       
    
    const rating = props.card.productRating;

    let stars;

    switch (rating) {
    case 5:
    stars = (
    <div>
        {onStar}
        {onStar}
        {onStar}
        {onStar}
        {onStar}
    </div>
    );
    break;
    case 4:
    stars = (
    <div>
        {onStar}
        {onStar}
        {onStar}
        {onStar}
        {offStar}
    </div>
    );
    break;
    case 3:
    stars = (
    <div>
        {onStar}
        {onStar}
        {onStar}
        {offStar}
        {offStar}
    </div>
    );
    break;
    case 2:
    stars = (
    <div>
        {onStar}
        {onStar}
        {offStar}
        {offStar}
        {offStar}
    </div>
    );
    break;
    case 1:
    stars = (
    <div>
        {onStar}
        {offStar}
        {offStar}
        {offStar}
        {offStar}
    </div>
    );
    break;
    default:
    stars = <div></div>;
    }

    return(
    <div className='product-wrapper' style={productStyle} onMouseEnter={handleMouseEntered} onMouseLeave={handleMouseLeave}>
       <div className="img-space">
        <img className='product-img' src={props.card.productThumbnail} alt="" />
       </div>
       <div className="desc-space">
        <p className="name">{props.card.productName}</p>
        <p className="price">${props.card.productPrice}</p>
        {stars}
        <div style={quickViewStyle} className='product-options'>
            <img src={bagIcon} alt='' onClick={toggleAdd} />
            <img src={WishlistIcon} alt='' onClick={toggleAddToWishlist}/>
             <img src={quickView} alt='' /> 
        </div>
       </div>
    </div>
    );
}