import { useState } from 'react';
import axios from 'axios';

function AddForm({getShoppingList}) {

    let [inputName, setInputName] = useState('');
    let [inputQuantity, setInputQuantity] = useState('');
    let [inputUnit, setInputUnit] = useState('');

    const addItem = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: 'api/shoppinglist',
            data: {
                name: inputName,
                quantity: inputQuantity,
                unit: inputUnit
            }
        })
        .then(response => {
            console.log('Add Item successful!');
            getShoppingList();
        })
        .catch(error => {
            console.log('Error in adding of item: ', error);
        })
    }



    return (
        <>
            <h2>Add An Item</h2>
            <label htmlFor="input-name">Item:</label>
            <input type="text"
                   id="input-name" 
                   value={inputName}
                   onChange={(e)=> {setInputName(e.target.value)}}>
            </input>
            <label htmlFor="input-quantity">Quantity:</label>
            <input type="text"
                   id="input-quantity" 
                   value={inputQuantity}
                   onChange={(e)=> {setInputQuantity(e.target.value)}}>
            </input>
            <label htmlFor="input-unit">Unit:</label>
            <input type="text"
                   id="input-unit" 
                   value={inputUnit}
                   onChange={(e)=> {setInputUnit(e.target.value)}}>
            </input>
        </>             
    )



}