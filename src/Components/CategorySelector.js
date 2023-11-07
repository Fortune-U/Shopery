import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {newVal} from "../features/categorize";

export default function CategorySelector() {
    const categoryApi = 'https://shopery.onrender.com/api/v1/category';
    const dispatch = useDispatch();
    const categorize = useSelector((state) => state.categorize.value)
    const [selectedCategory, setSelectedCategory] = useState([]);
   

    useEffect(()=>{
          // Fetch categories
    fetch(categorize)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      setSelectedCategory(data)
      // Modify this line to set the appropriate state vari setSelectedCategory(data); // Assuming data is an array or a single category string
      
    })
    .catch((error) => {
      console.error('API Error:', error);
    });

    
    },[categorize]);
    useEffect(()=>{
        dispatch(newVal(selectedCategory))
    })
    
    
    return(
        <div>
            <form className="dropdown-list">
            <input name="category-rd" value= {categoryApi + '/fruits'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" />
            <label htmlFor="">Fresh Fruit</label> <br/>
            <input name="category-rd" value={categoryApi + '/vegetables'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" />
            <label htmlFor="">Vegetables</label> <br/>
            <input name="category-rd" value={categoryApi + '/vegetables'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" />
            <label htmlFor="">Cooking</label> <br/>
            <input name="category-rd" value={categoryApi + '/Snacks'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" />Snacks
            <label htmlFor="">Snacks</label> <br/>
          <input name="category-rd" value={categoryApi + '/Meat'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" />
            <label htmlFor="">Beverages</label> <br/>
            <input name="category-rd" value={categoryApi + '/vegetables'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" /> 
            <label htmlFor="">Beauty and Health</label> <br/>
            <input name="category-rd" value={categoryApi + '/vegetables'} onChange={(e) => setSelectedCategory(e.target.value) && dispatch(newVal(selectedCategory))} id="isClicked" type="radio" /> 
            <label htmlFor="">Bread and Bakery</label> <br/>
            </form>
        </div>
    );
}