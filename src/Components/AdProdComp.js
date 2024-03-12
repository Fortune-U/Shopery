import testimg from '../Assets/Product Image.png';
import { useState } from 'react';
import '../Styles/adprodcomp.css';
import editpng from '../Assets/edit.png';

export default function AdProdComp () {

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
    return (
        <div className="adprodctn" onMouseEnter={handleMouseEntered} onMouseLeave={handleMouseLeave}>
            <div className='adprctn-img'>
                 <img src={testimg} alt=""  /> 
                 <img src={editpng} alt=""  style={quickViewStyle} className='edit-png'/> 
            </div>

            <div className='adpr-sec'>
                <p>Some Product</p>
                <p><b>N</b>2.00</p>
            </div>
            <p>category</p>
            <div className='adpr-mid'>
                <p>Available for Delivery</p>
                <p>In Stock</p>
            </div>

        </div>
    )
}