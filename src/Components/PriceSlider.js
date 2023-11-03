import React from "react";
import Slider from "@mui/material/Slider";
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
      <div style = {{ width: "12rem", padding: "20px", color:'#52af77' }}>
         <h3> Creating the range slider using the material UI in react JS </h3>
         <Slider value = {slide} 
          onChange = {handleChanges} 
         valueLabelDisplay="auto" />
         Price:  {slide[0]} - {slide[1]}
      </div>
   );
}

export default PriceSlider;

