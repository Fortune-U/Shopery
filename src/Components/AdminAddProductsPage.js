import AdProdComp from './AdProdComp';
import '../Styles/adminadproductspage.css';
import AddANewProducts from './AddANewProduct';
import { useState } from 'react';


export default function AdminAddProductsPage() {

    const [activeElement, setActiveElement] = useState("static");

    const toggleElement = (element) => {
        setActiveElement(element);
    };
    return(
        
        <div className="aap-ctn">
            {activeElement === "add prod" && <AddANewProducts />}
           {activeElement === "static" && (
            <div>
           <div className="prd-tp-sect">
                <p> </p>
                <button onClick={()=>toggleElement("add prod")} src={AddANewProducts} className='ad-apd'>Add Product</button>
            </div>
            <div className='prd-tp-mid'>
                <p>Products</p>
                <div className="prd-tp-sect-2">
                    <input type="text" placeholder='Search Product' />
                    <p className="filt-size">1-20 of 30</p>
                    <div className="filt-nav">
                        <p>-</p>
                        <p>+</p>
                    </div>
                </div>
            </div>

            <div className="aap-bd">
              <AdProdComp/> 
              <AdProdComp/> 
              <AdProdComp/> 
            </div>
            </div>
            )}
        </div>
    );
}