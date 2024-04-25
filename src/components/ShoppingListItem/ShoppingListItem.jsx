import React from "react";
import axios from "axios";

function ShoppingListItem({ key, item, fetchShoppingList }){

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
    <article key={item.id}>
                    {item.name}
                    {item.quantity} {item.unit}
                    {!item.isPurchased ? <button onClick={buyItem}>Buy</button> : null}
                    <button onClick={removeItem}>Remove</button>
    </article>
);
}

export default ShoppingListItem;