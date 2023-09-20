import { useState } from 'react'
import greyBag from '../Assets/addBag.png'
import greenBag from '../Assets/Add To Cart.png'
// import apple from '../Assets/apple.png'
import '../Styles/fruitcard.css'

export default function FruitCard(props) {
    console.log(props.card)

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
    return(
        
            <div className='main' style={divStyle}>
                <div className='img-wrp'>
                    <img src={props.card.productThumbnail} alt="" />
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