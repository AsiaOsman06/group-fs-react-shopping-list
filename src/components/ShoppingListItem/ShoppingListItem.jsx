import React from "react";
import axios from "axios";
import './ShoppingListItem.css'

function ShoppingListItem({ item, fetchShoppingList }){

    const buyItem = () => {
        axios({
            method: "PUT",
            url: `/api/shoppingList/${item.id}`,
            data: {isPurchased: true}
        })
        .then(response => {
            //Actual function name TBD
            fetchShoppingList();
        })
        .catch ((error)=>{
            console.log ("Unable to buy item: ", error)
        })
    };

    const removeItem=()=>{
        axios({
            method: 'DELETE',
            url: `/api/shoppingList/${item.id}`,
        })
        .then(response => {
            //Actual function name TBD
            fetchShoppingList();
        })
        .catch ((error)=>{
            console.log ("Unable to remove item: ", error)
        })
    };

    return (
    <article key={item.id} className="item-box">
                <p className="item-name">{item.name}</p> 
                <p className="item-quantity">  {item.quantity} <span className="item-unit">{item.unit}</span></p>
                <div className="button-group">  
                    {!item.isPurchased ? <button id="buy-button" onClick={buyItem}>Buy</button> : null}
                    {!item.isPurchased ? <button id="remove-button" onClick={removeItem}>Remove</button> : <p id="purchased-label">Purchased</p>}
                </div>
    </article>
);
}

export default ShoppingListItem;