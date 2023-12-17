import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
    const {dispatch, currency} = useContext(AppContext)
    let newCurrency = currency

    function changeCurrency(e) {

        newCurrency = e.target.value

        dispatch({
            type:'CHG_CURRENCY',
            payload: newCurrency[0]
        })
    }

    return <div>
        <select name="currency" id="inputGroupSelect03" className='form-select' onChange={changeCurrency}>
            <option selected>Currency ({newCurrency} Pound)</option>
            <option value="Pound">{'£ Pound'}</option>
            <option value="Dollar">{'$ Dollar'}</option>
            <option value="Euro">{'€ Euro'}</option>
            <option value="Ruppee">{'₹ Ruppee'}</option>
        </select>
    </div>



}
