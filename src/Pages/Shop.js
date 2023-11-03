import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import FruitCard from "../Components/FruitCard";
import Banner from "../Components/Banner";
import Tag from "../Components/Tag";
import '../Styles/shop.css';
import ProductCard from "../Components/ProductCard";
import PriceSlider from "../Components/PriceSlider";
import CategorySelector from "../Components/CategorySelector";
import RatingSelector from "../Components/RatingSelector";




export default function Shop() {
  const [productData, setProductData] = useState([]);
  const [salesProductData, setSalesProductData] = useState([]);
 // const [tag, setTag] = useState([]);
  //const [filtered,setFiltered] = useState([])
  const [isOpen, setIsOpen] = useState({
    categories: false,
    price: false,
    ratings: false,
    tags:false
  });
  const categorize = useSelector((state) => state.categorize.value)
  const price = useSelector((state) => state.priceRange.value)
  const rating = useSelector((state) => state.rating.value)
  const oneTag = useSelector((state)=> state.tag.value)
  

  useEffect(() => {
    // Fetch products
    fetch('https://shopery.onrender.com/api/v1/product')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
      


   // Fetch sales deals
    fetch('https://shopery.onrender.com/api/v1/product/hotdeal')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setSalesProductData(data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });

    

    
  }, []); 
  


  const filteredProducts = Array.isArray(categorize) && categorize.length > 0
  ? categorize
  : Array.isArray(productData)
  ? productData
  : [];

 
  
 

const toggleElement = (element) => {
  setIsOpen((prevState) => ({
    ...prevState,
    [element] : !prevState[element],
  }));
}

    const shopProducts = filteredProducts.map(card=>{
        return(
        <FruitCard 
        key={card.id}
        card={card}
        />
        )
    });

    const salesProducts = salesProductData.map(card=>{
      return(
      <ProductCard 
      key={card.id}
      card={card}
      />
      )
  });

//   const salesTags = tag.map(card=>{
//     return(
//     <Tag
//     key={card.id}
//     card={card}
    
//     />
//     )
// });


    //Declarations for rating star svg
    let filter = <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
    <path d="M18 5H9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 14H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5"/>
    <circle cx="17" cy="14" r="4" stroke="white" strokeWidth="1.5"/>     
    </svg>            
    //Drop down funcrion 
    
    
    
  

    return(

    <div>
      <NavBar />
      <div className="top-area">
        <p className="filter-disp">Filter{filter}</p>
        <div className="sort-wrapper">
        <div className="sort-by">
          <p>Sort by:</p>
          <select>
            <option>Latest</option>
            <option>Popular</option>
            <option>Best Seller</option>
          </select>
        </div>
        <div className="results"><p>{shopProducts.length}</p> Results Found</div>
        </div>
      </div>
      <div className="Shop-hero">
      
            
        <div className="filters-panel">
          <div>
        <div className="dropdown">
<button onClick={()=>toggleElement("categories")} className="cat-dropdown-button">
  <p>All Categories</p> 
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
  <path d="M13 7L7 1L1 7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>
            {isOpen.categories && (
            <CategorySelector/>
            )}

            </div>
            
                <div>
                    <button className="price-dropdown" onClick={()=>toggleElement("price")}>
                      <p>Price</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M13 7L7 1L1 7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </button>
                    
                    {isOpen.price && (
                    <div>
                      <button>
                      <p>Price slider</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M13 7L7 1L1 7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      </button>
                      
                      <PriceSlider/>
                    
                    </div>
                    )}
                </div>
               
                  <div>
                    <button onClick={()=>toggleElement("ratings")} className="rating-dropdown">
                      <p>Rating</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M13 7L7 1L1 7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    
                    </button>
                    {isOpen.ratings &&(
                <RatingSelector />
                )}
                </div>
            
            </div>
            <div className="tags">
              <button onClick={()=>toggleElement("tags")} className="tags-drp">
              <p>Popular Tag</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path d="M13 7L7 1L1 7" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
              </button>
              {isOpen.tags && (
                <div className="tag-ctn">
                <Tag />
                </div>
                )}
            </div>
            
            <div className="banner">
             <Banner />
            </div>
            <div className="sale-products">
              <p className="sale-prd">Sale Products</p>
               {salesProducts}
            </div>
        </div>
        <div className="shop-products-panel">
         {shopProducts}
        </div>
      </div>
      <Footer/>
    </div>
    );
}