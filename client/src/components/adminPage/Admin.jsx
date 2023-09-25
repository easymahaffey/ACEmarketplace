import React, {  useState } from "react";
import API from '../../utils/API'
import { useNavigate } from 'react-router-dom'
import aceLogo from '../../resources/logos/ACEMarketplacelogo.png'
import './admin.scss'

const Admin = () => {

    const navigate = useNavigate()

    const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemSku, setItemSku] = useState('')
    const [itemCartQuantitiy, setItemCartQuantity] = useState(0)
    const [itemWarehouseQuantity, setItemWarehouseQuantity] = useState(0)
    const [itemCost, setItemCost] = useState(0)
    const [itemPrice, setItemPrice] = useState(0)
    const [itemPictures, setItemPictures] = useState([])
    const [itemCategory, setItemCategory] = useState('')

    const categories = ['Choose One','Funiture','Home Goods', 'Bedding','Clothing & Shoes', 'Jewelry & Accessories', 'Kids Stuff'  ]

    const handleAddItem = (e) => {
        e.preventDefault()

        const newItem = {
            itemName: itemName,
            itemDescription:itemDescription,
            itemSku: itemSku,
            itemCartQuantitiy:itemCartQuantitiy,
            itemWarehouseQuantity:itemWarehouseQuantity,
            itemCost:itemCost,
            itemPrice:itemPrice,
            itemCategory:itemCategory,
            itemPictures:itemPictures

        }

        API.addItem(newItem)

        setItemName('')
        itemDescription(0)
        setItemSku('')
        setItemCartQuantity(0)
        setItemWarehouseQuantity(0)
        setItemCost(0)
        setItemPrice(0)
        setItemPictures([])
        console.log(newItem)

    }

    return (
        <div id="admin-page">

            <div className="top-area">
            <div className="logo-area"><img className="logo" src={aceLogo} alt="ACE Logo" /></div>
            <div className="admin">Admin Page</div>
            <button className="buttons home" onClick={()=> navigate('/')}>Home</button>
            </div>
           
            <div id="admin-form">
                <h1 className="headers">Add New Item</h1>

                <label className="labels" htmlFor="itemName">Name</label>
                <input className="inputs" onChange={(e) => setItemName(e.target.value)} id="itemName" name="itemName" value={itemName} type="text" />
                
                <label className="labels" htmlFor="itemDescription">Description</label>
                <input className="inputs description" onChange={(e) => setItemDescription(e.target.value)} id="itemDescription" name="itemDescription" value={itemDescription} type="text" />

                <label className="labels" htmlFor="itemSku" >Sku</label>
                <input className="inputs" onChange={(e) => setItemSku(e.target.value)} id="itemSku" value={itemSku} type="text" name="itemSku" />

                <label className="labels" htmlFor="itemCartQuantitiy">Cart Quantitiy</label>
                <input className="inputs" onChange={(e) => setItemCartQuantity(e.target.value)} id="itemCartQuantitiy" value={itemCartQuantitiy} type="number" name="itemCartQuantitiy" />

                <label className="labels" htmlFor="itemWarehouseQuantity">Warehouse Quantitiy</label>
                <input className="inputs" onChange={(e) => setItemWarehouseQuantity(e.target.value)} id="itemWarehouseQuantity" value={itemWarehouseQuantity} type="number" name="itemWarehouseQuantity" />

                <label className="labels" htmlFor="itemCost">Cost</label>
                <input className="inputs" onChange={(e) => setItemCost(e.target.value)} id="itemCost" value={itemCost} type="number" name="itemCost" />
                
                <label className="labels" htmlFor="itemPrice">Price</label>
                <input className="inputs" onChange={(e) => setItemPrice(e.target.value)} id="itemPrice" value={itemPrice} type="number" name="itemPrice" />
                
                <label className="labels" htmlFor="itemCategory">Category</label>
                <select className='inputs' onChange={(e) => {
                                                setItemCategory(e.target.value)
                                            }}>
                                                {categories.map((options, index) => {
                                                    return (
                                                        <option key={index}>{options}</option>
                                                    )
                                                })}
                                            </select>
                {/* <input className="inputs" onChange={(e) => setItemCategory(e.target.value)} id="itemCategory" value={itemCategory} type="text" name="itemCategory" /> */}

                <label className="labels" htmlFor="itemPictures">Pictures</label>
                <input className="inputs" onChange={(e) => setItemPictures(e.target.value)} id="itemPictures" value={itemPictures} type="file" name="itemPictures" />

                <button className="submit-btn" onClick={handleAddItem}>Submit</button>

            </div>

        </div>

    )
}

export default Admin
