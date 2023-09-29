import { useState } from 'react'
import greyBag from '../Assets/addBag.png'
import greenBag from '../Assets/Add To Cart.png'
import wishListGrey from '../Assets/Add To wishlist.png'
import wishListRed from '../Assets/Add To wishlist red.png'
import quickView from '../Assets/Quick View.png'
// import apple from '../Assets/apple.png'
import '../Styles/fruitcard.css'

export default function FruitCard(props) {
 // add to bag
    const [add,setAdded] = useState({
            isAdded : false
    })
    let addIcon = add.isAdded?  greenBag : greyBag
    const divStyle = {
        border: add.isAdded?  ' 2px solid  #2C742F' : ' 2px solid #E6E6E6' ,
        boxShadow: add.isAdded? '0px 0px 12px 0px rgba(32, 181, 38, 0.32)' : 'none'
    }

    function toggleAdd(){
        setAdded(prevAdd=>({
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

    //add to wishlist 
    const [addToWishlist,setAddToWishlist] = useState({
                isAdded : false
        })
        let WishlistIcon = addToWishlist.isAdded?  wishListRed : wishListGrey
        
        function toggleAddToWishlist(){
            setAddToWishlist(prevAdd=>({
            ...prevAdd,
            isAdded : !prevAdd.isAdded
            }))
        }
    return(
        
            <div className='main' style={divStyle} onMouseEnter={handleMouseEntered} onMouseLeave={handleMouseLeave}>
                <div className='img-wrp'>
                    <img src={props.card.productThumbnail} alt="" />
                    <div className='quick-actions' style={quickViewStyle} >
                        <img src={WishlistIcon} alt='' onClick={toggleAddToWishlist} />
                        <img src={quickView} alt='' />
                    </div>
                </div>
                <div className='description'>
                    <div>
                    <p className='item-name'>{props.card.productName}</p>
                    <p className='item-price'>${props.card.productPrice}</p>
                    <p className='rating'></p>
                    </div>
               
                <div>
                    <img src={addIcon} alt="" onClick={toggleAdd}/>
                </div>
                </div>
            </div>

           
            
        
    );
}