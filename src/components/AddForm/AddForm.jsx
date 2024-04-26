import { useState } from 'react';
import axios from 'axios';
import 'AddForm.css'

function AddForm({fetchShoppingList}) {

    let [inputName, setInputName] = useState('');
    let [inputQuantity, setInputQuantity] = useState('');
    let [inputUnit, setInputUnit] = useState('');

    const addItem = () => {
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
            setInputName('');
            setInputQuantity('');
            setInputUnit('');
            fetchShoppingList();
        })
        .catch(error => {
            console.log('Error in adding of item: ', error);
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // form validation goes here...
        if (!inputName) {
            alert('You need to enter an item name!');
        } else if (!inputQuantity) {
            alert('You need a quantity!');
        } else if (!inputUnit) {
            alert('Please enter a unit!');
        // if form items not blank, add the item to database
        } else {
            addItem( {name: inputName,
                      quantity: inputQuantity,
                      unit: inputUnit });
        } 
    }


    return (
        <>
            <h2>Add An Item</h2>
            <form className="add-form"
                  onSubmit={handleSubmit}>
                <div className="input-name-box">
                    <label htmlFor="input-name">Item:</label>
                    <input type="text"
                        id="input-name" 
                        value={inputName}
                        onChange={(e)=> {setInputName(e.target.value)}}>
                    </input>
                </div>
                <div className="input-quantity-box">
                    <label htmlFor="input-quantity">Quantity:</label>
                    <input type="text"
                        id="input-quantity" 
                        value={inputQuantity}
                        onChange={(e)=> {setInputQuantity(e.target.value)}}>
                    </input>
                </div>
                <div className="input-unit-box">
                    <label htmlFor="input-unit">Unit:</label>
                    <input type="text"
                        id="input-unit" 
                        value={inputUnit}
                        onChange={(e)=> {setInputUnit(e.target.value)}}>
                    </input>
                </div>
                <button type="submit">Save</button>
            </form>
        </>        
    )
}

export default AddForm;