import React, { useContext, useState } from 'react';

export default function Currency() {
    const {dispatch} = useContext(AppContext)
    const [newCurrency, setNewCurrency] = useState('\u00A3 Pound')

    function changeCurrency(e) {

        setNewCurrency (e.target.value[0])

        dispatch({
            type:'CHG_CURRENCY',
            payload: newCurrency
        })
    }

    return <div className = 'alert alert-success'>
        <select name="currency" id="inputGroupSelect03" className='form-select' onChange={changeCurrency}>
            <option selected>Currency ({newCurrency})</option>
            <option defaultValue value="Pound">{'\u00A3 Pound'}</option>
            <option value="Dollar">{'\u0024 Dollar'}</option>
            <option value="Euro">{'\u20AC Euro'}</option>
            <option value="Ruppee">{'\u20B9 Ruppee'}</option>
        </select>
    </div>



}
