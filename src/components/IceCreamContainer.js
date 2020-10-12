import React from 'react';

import {buyIceCream} from '../redux/'
import {useSelector, useDispatch} from 'react-redux';

function IceCreamContainer(){
    const numberOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Number of iceCream - {numberOfIceCream}</h1>
            <button onClick={()=> dispatch(buyIceCream())}>Buy</button>
        </div>
    )
}

export default IceCreamContainer;