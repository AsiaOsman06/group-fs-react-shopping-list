import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    const [shoppingList, setShoppingList] =useState([]);

    useEffect(() => {
        fetchShoppingList();
    }, []);

    const fetchShoppingList = () => {
    axios({
        method:'GET',
        url:'/api/shoppingList'
    }) 
    .then((response) => {
        console.log('we got shoppingList', response.data);
        setShoppingList(response.data);
    })
    .catch((error) => {
        console.log('bummer:',error);
    })
    }

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
