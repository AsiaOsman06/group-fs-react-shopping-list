import axios from 'axios';
import ShoppingListItem from '../ShoppingListItem/ShoppingListItem';

function ShoppingList({shoppingList, fetchShoppingList}){

    const handleReset = () => {
    console.log('handleReset is working!')
    axios.put('/api/shoppingList')
    .then(response => {
        fetchShoppingList()

    })
    .catch(err => {
        alert('❌ Error Resetting Shopping List!!!❌', err )
    })
}

    const handleClear = () => {
    console.log('handleClear is working!')
    axios.delete('/api/shoppingList')
    .then(response => {
        fetchShoppingList()
    })
    .catch(err => {
        alert('❌ Error Clearing Shopping List!!!❌', err)
      
    })
}

    return(
        <>
        <header>
            <h1>Shopping List:</h1>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClear}>Clear</button>
        </header>
        <div>
            {shoppingList.map (item => {
                return(
                    
                 <ShoppingListItem key= {item.id} item={item} fetchShoppingList = {fetchShoppingList}/>
                 
            )})}
        </div>

        </>

    )
}

export default ShoppingList;
