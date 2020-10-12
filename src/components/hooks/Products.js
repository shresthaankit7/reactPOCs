import React, {useState, useReducer} from 'react';
import '../../stylesheets/Products/products.css';

export default function Product(){

    function cartReducer(state, action){
      switch(action.type) {
        case 'add':
          return [...state, action.name];
        case 'remove':
          const update = [...state];
          update.splice(update.indexOf(action.name), 1);
          return update;
        default:
          return state;
      }
    }

    function totalReducer(state, action){
      if( action.type == 'add'){
        return state + action.price;
      }
      return state - action.price;
    }

    const [cart, setCart] = useReducer(cartReducer, []);
    const [total, setTotal] = useReducer(totalReducer, 0);

    const products = [
        {
          emoji: '🍦',
          name: 'ice cream',
          price: 5
        },
        {
          emoji: '🍩',
          name: 'donuts',
          price: 2.5,
        },
        {
          emoji: '🍉',
          name: 'watermelon',
          price: 4
        }
      ];

    function add(product) {
        const {name, price} = product;
        setCart({ name, type: 'add' });
        setTotal({ price, type: 'add'});
    }

    const currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }

    function remove(product) {
      const { name, price } = product;
      setCart({ name, type: 'remove' });
      setTotal({ price, type: 'remove' });
    }

    function getTotal(total){
        return total.toLocaleString(undefined, currencyOptions);
    }
    return (
        <div class="wrapper"> 
            <div>
                Shopping Cart: {cart.length} total iteam.
            </div>
            <div>Total: {getTotal(total)}</div>

            <div class="product">
                {products.map(product => (
                    <div key={product.name}>
                        <p>{product.name}</p>
                        <span aria-label={product.name}>{product.emoji}</span>

                        <button onClick={ () => add(product) }>Add</button>    
                        <button onClick={() => remove(product)}>Remove</button>
                    </div>
                )
                )}
            </div>

        </div>
    )
}