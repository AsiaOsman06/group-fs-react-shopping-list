import axios from 'axios';

function ShoppingList({shoppingList, getShoppingList}){

    const handleReset = () => {
    console.log('handleReset is working!')
    axios.put('/api/shoppingList')
    .then(response => {

    })
    .catch(err => {
        alert('❌ Error Resetting Shopping List!!!❌', err )
    })
}

    const handleClear = () => {
    console.log('handleClear is working!')
    axios.delete('/api/shoppingList')
    .then(response => {
        getShoppingList()
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

        </>

    )
}

export default ShoppingList;
