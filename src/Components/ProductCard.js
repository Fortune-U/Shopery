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

    return(
    <div className='product-wrapper' style={productStyle} onMouseEnter={handleMouseEntered} onMouseLeave={handleMouseLeave}>
       <div className="img-space">
        <img className='product-img' src={props.card.productThumbnail} alt="" />
       </div>
       <div className="desc-space">
        <p className="name">{props.card.productName}</p>
        <p className="price">${props.card.productPrice}</p>
        <p className="rating"></p>
        <div style={quickViewStyle} className='product-options'>
            <img src={bagIcon} alt='' onClick={toggleAdd} />
            <img src={WishlistIcon} alt='' onClick={toggleAddToWishlist}/>
             <img src={quickView} alt='' /> 
        </div>
       </div>
    </div>
    );
}