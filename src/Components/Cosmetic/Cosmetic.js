import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import { addLocalStorage, addToLocalStorage } from '../../Utilities/localStorage';
import './Cosmetic.css'

const Cosmetic = (props) => {

    const addToCart = (id) => {
        // addToDb(id);
        addLocalStorage(id);//option-1
        addToLocalStorage(id); //option-2
        // localStorage.setItem(id, 1); key and value
    }

    const removeFromCart= (id) => {
        // removeFromDb(id);
    }
    const addToCartWithParam = () => addToCart(id);
    const {name, price, id} = props.cosmetic;

    return (
        <div className='product'>
            <h2>Buy this : {name}</h2>
            <h2>Only for : ${price}</h2>
            {/* <button onClick={addToCartWithParam}>Add to cart</button>  */}
            {/* or */}
            <button onClick={addToCartWithParam}>Add to cart</button>
            <button onClick={() => addToCart(id)}>Purchase</button>
            <button onClick={() => removeFromCart(id)}>remove</button>

            {/* <button onClick={addToCart(id)}>Add to cart</button>  aivabe call korle click korar age e kaj hoye jabe then click korle ar pore kaj hobe na...so aikahn theke arekta function k id soho call kore dilam*/} 
            
        </div>
    );
};

export default Cosmetic;