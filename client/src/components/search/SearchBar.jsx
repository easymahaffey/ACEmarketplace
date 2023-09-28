import React, { useState } from "react";
import mockData from '../../data'
import './search.scss'


const SearchBar = ({itemDisplayList, setItemDisplayList, category, setCategory}) => {

    const [matchesList, setMatchesList] = useState(mockData)
    const [search, setSearch] = useState('')
    const [noMatches, setNoMatches] = useState(false)
    const [categoryChoice, setCategoryChoice] = useState('')

    console.log(matchesList)

    const closeNoMatches = ()=>{
        setNoMatches(false)
    }

    const handleReset = ()=>{
        setItemDisplayList(mockData)
        setCategory("All")
    }

    const handleSearch = (e) => {
       
        console.log(category)
        e.preventDefault()
       
        setSearch('')

        let filterTest = mockData.filter((item) =>
            item.itemName.toLowerCase().includes(search.toLowerCase()) ||
            item.itemDescription.includes(search.toLowerCase()) ||
            item.itemCategory.toLowerCase().includes(search.toLowerCase())
            // item.itemPrice.toLowerCase().includes(search.toLowerCase())
        )
        
        if (filterTest.length > 0) {
            // setNoMatches(false)
            setItemDisplayList(filterTest)
        
           
        } else {
            setNoMatches(true)
        }
        console.log(filterTest)

    }

    const handleCategory = (categoryChoice)=>{
       
        console.log(categoryChoice)
        let categoryFilter = mockData.filter((item)=>
          item.itemCategory == categoryChoice
        )
        console.log(categoryFilter)
        setItemDisplayList(categoryFilter)
        setCategory(categoryChoice)
      
    
    }

    return (
        <>

            <div id="search-area">
                <div id="bar-area">
                <input className="search-bar" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button onClick={handleSearch} className='search-button buttons'>Search</button>
                </div>
           
            <div id="category-area">
                    <button onClick={handleReset} value={"All"} className="cat-buttons">All</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Furniture"} className="cat-buttons">Furniture</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Home Goods"} className="cat-buttons">Home Goods</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Bedding"} className="cat-buttons">Bedding</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Clothing & Shoes"} className="cat-buttons">Clothing & Shoes</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Jewelery and Accessories"} className="cat-buttons">Jewelery & Accessories</button>
                    <button onClick={(e)=>{handleCategory(e.target.value)}} value={"Kids Stuff"} className="cat-buttons">Kids Stuff</button>
            </div>
            </div>

            {noMatches&& (

                <div className="modals">
                    <div className="close-btn" onClick={closeNoMatches}>X</div>
                    <h1 className="modal-forms">Sorry no matches found</h1>
                </div>
            )}


        </>

    )
}

export default SearchBar
