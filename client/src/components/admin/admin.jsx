import React, { useState } from "react";
import axios from 'axios'
const Admin = () =>{
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');

const handleProduct = (e) => {
    
    const item = {
        itemName : itemName,
        itemPrice : itemPrice
    }
    axios.post('http:localhost:5000/api/item/new-item', item)

    .then(({data}) => {
        console.log(data)
        console.log('working')

    })
    .catch((err) => console.log(err))
    setItemName('')
    setItemPrice('')
}


return(
    <>
    <label>Name</label>
    <input 
    type="text"
    value={itemName}
    onChange={(e) => setItemName(e.target.value)}
    />

<label>Price$</label>
<input
type='number'
value={itemPrice}
onChange={(e) => setItemPrice(e.target.value)}
/>
    <button onClick={handleProduct}>Add Product</button>
    </>
)
}

export default Admin;