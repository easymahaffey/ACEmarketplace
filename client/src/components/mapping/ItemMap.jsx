import React from 'react'
import Card from '../Card/card'
import './itemMap.scss'


const ItemMap = ({ array, itemDisplayList, setItemDisplayList }) => {
    return (
        <>
           
                {array.map((item) => {
                    return (
                      
                            <Card
                                itemName={item.itemName}
                                itemDescription={item.itemDescription}
                                itemCategory={item.itemCategory}
                                itemSku={item.itemSku}
                                itemCartQuantitiy={item.itemCartQuantitiy}
                                itemWarehouseQuantity={item.itemWarehouseQuantity}
                                itemCost={item.itemCost}
                                itemPrice={item.itemPrice}
                                itemPictures={item.itemPictures}
                                itemDisplayList={itemDisplayList}
                                setItemDisplaLIst={setItemDisplayList}
                            />

                     
                    )
                })}
       
        </>
    )
}
export default ItemMap