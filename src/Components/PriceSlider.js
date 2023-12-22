import React from "react";
import Slider from "@mui/material/Slider";
import '../Styles/slider.css';
import { useEffect,useState } from "react";
import {  useDispatch,useSelector } from 'react-redux'
import {  newPriceRange } from "../features/priceRange";


function PriceSlider() {
    const dispatch = useDispatch();
    const [slide, setSlide] = useState([0,100])
    const [prices, setPrices] = useState([]);
    const price = useSelector((state) => state.priceRange.value)
    console.log((price));
    const priceApi = `https://shopery.onrender.com/api/v1/product?minPrice=${slide[0]}&maxPrice=${slide[1]}`;
   //console.log(prices)
   //dispatch(count(prices))
   useEffect(()=>{
    // Fetch categories
    fetch(priceApi)
    .then((res) => {
    if (!res.ok) {
    throw new Error('Network response was not ok');
    }
    return res.json();
    })
    .then((data) => {
    setPrices(data)
    // Modify this line to set the appropriate state vari setSelectedCategory(data); // Assuming data is an array or a single category string

    })
    .catch((error) => {
    console.error('API Error:', error);
    });


   },[priceApi]);

     useEffect(()=>{
     dispatch(newPriceRange(prices))
    },[dispatch,prices]);

    const handleChanges = (event, newValue) => {
        setSlide(newValue);
    }
   
   
   return (
      <div className="slider-ctn" >
         <Slider className="slide" value = {slide} 
          onChange = {handleChanges} 
         valueLabelDisplay="auto" />
         <span className="tt">Price:  <p>{slide[0]} - {slide[1]}</p></span>
         
      </div>
   );
}

export default PriceSlider;

