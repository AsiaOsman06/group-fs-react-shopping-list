import react from "react";
import axios from "axios";

function ShoppingListItem(shoppingList){
    const buyItem = ({item.id}) => {
        axios({
            method: "PUT",
            url: `/api/shoppingList/${item.id}`,
            data: {isPurchased: true}
        })
        .then(response => {
            //Actual function name TBD
            fetchShoppingList();
        })
    }
}