import React, { useContext, useState } from 'react';


const [currency, setCurrency] = useState('Pound')
alert alert-primary

<div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                <label className="input-group-text" htmlFor="inputGroupSelect03">Currency</label>
                  </div>
                  <select id="inputGroupSelect03" className='custom-select' onChange={(event) => setCurrency(event.target.value)}>
                    <option defaultValue value="Pound" name="Pound">\00A3 Pound</option>
                    <option value="Dollar" name="Dollar">\0024 Dollar</option>
                    <option value="Euro" name="Euro">\20AC Euro</option>
                    <option value="Ruppee" name="Ruppee">\20B9 Ruppee</option>
                </select>