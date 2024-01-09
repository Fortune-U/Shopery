import { useState, useEffect } from 'react';
import greyBag from '../Assets/addBag.png';
import greenBag from '../Assets/Add To Cart.png';
import wishListGrey from '../Assets/Add To wishlist.png';
import wishListRed from '../Assets/Add To wishlist red.png';
import quickView from '../Assets/Quick View.png';
//import ProductQuickView from './ProductQuickView'
import ProdQuickview from './ProdQuickview';
import Popup from 'reactjs-popup';
//import Warper from './Warper';
import 'reactjs-popup/dist/index.css';
// import apple from '../Assets/apple.png'
import '../Styles/fruitcard.css';

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

    //add to cart
    const [view,setViewed] = useState({
      isClicked : false
})

    

  //   function toggleAddtoCart() {
  //     let cartFunc = add.isAdded? 
 
  //     fetch('https://shopery.onrender.com/api/v1/add', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(props.card.id)
  // })
  
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   return response.json(); // Assuming the response is in JSON format
  // })
  // .catch(error => {
  //   // Handle errors
  //   console.error('Error:', error);
    
  // })
  //      : fetch('https://shopery.onrender.com/api/v1/remove', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(props.card.id)
  //     })
      
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json(); // Assuming the response is in JSON format
  //     })
  //     .catch(error => {
  //       // Handle errors
  //       console.error('Error:', error);
  
  //     })
  //   }

    function toggleQuickView() {
      
      setViewed(prevView=>({
        ...prevView,
        isClicked : !prevView.isClicked,
       views : view.isClicked? 
       "" :
       fetch(`https://shopery.onrender.com/api/v1/product/${props.card.productName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setViewed(data);
        
      })
      .catch((error) => {
        console.error('API Error:', error);
      })

      }))
    }

    

   

    function toggleAdd(){
        setAdded(prevAdd=>({
          ...prevAdd,
          isAdded : !prevAdd.isAdded,
           cartFunc : add.isAdded? 
 
      fetch(`https://shopery.onrender.com/api/v1/cart/remove/${props.card.id}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      quantity:1
    })
  })
  
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Assuming the response is in JSON format
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
    
  })
       : fetch(`https://shopery.onrender.com/api/v1/cart/add/${props.card.id}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity:1
        })
      })
      
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is in JSON format
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
  
      })

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

 //pop controls
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false)




  
    return(
        
            <div className='main' style={divStyle} onMouseEnter={handleMouseEntered} onMouseLeave={handleMouseLeave}>
                <div className='img-wrp'>
                    <img src={props.card.productThumbnail} alt="" />
                    <div className='quick-actions' style={quickViewStyle} >
                        <img src={WishlistIcon} alt='' onClick={toggleAddToWishlist} />
                        <img src={quickView} alt='' onClick={() => {setOpen(o => !o); toggleQuickView();}} />
                        <Popup  open={open} closeOnDocumentClick onClose={closeModal} >
                        
                        <ProdQuickview 
                        prod={view}
                        
                        />
                        </Popup>
                    </div>
                </div>
                <div className='description'>
                    <div>
                    <p className='item-name'>{props.card.productName}</p>
                    <p className='item-price'>${props.card.productPrice}</p>
                    {/* <p className='rating'>{stars}</p> */}
                    {stars}
                    </div>
               
                <div>
                    <img src={addIcon} alt="" onClick={toggleAdd}  />
                </div>
                </div>
            </div>

           
            
        
    );
}