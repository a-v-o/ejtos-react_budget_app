import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
    const {dispatch, currency} = useContext(AppContext)
    let newCurrency = currency
    let currencyName = 'Pound'

    function changeCurrency(e) {

        newCurrency = e.target.value
        currencyName = newCurrency.substr(1)

        dispatch({
            type:'CHG_CURRENCY',
            payload: newCurrency.substr(0, 1)
        })
    }

    return <div>
        <select name="currency" id="inputGroupSelect03" className='form-select' style={{backgroundColor:'#3EB489'}} onChange={changeCurrency}>
            <option disabled selected>Currency ({newCurrency} {currencyName})</option>
            <option value="£ Pound">£ Pound</option>
            <option value="$ Dollar">$ Dollar</option>
            <option value="€ Euro">€ Euro</option>
            <option value="₹ Ruppee">₹ Ruppee</option>
        </select>
    </div>



}
