import React from "react";
import axios from "axios";

function ShoppingListItem({item}){

    const buyItem = (item.id) => {
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

    const removeItem({item.id})=>{
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
                    {!item.isPurchased ? <button onClick={() => buyItem(item.id)}>Buy</button> : null}
                    <button onClick={() => removeItem(item.id)}>Remove</button>
            ;
    </article>
);
}

export default ShoppingListItem;