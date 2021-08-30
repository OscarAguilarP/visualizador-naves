import React, { useState, useEffect } from 'react';
import './Selector.css'

const Selector = ({ data, setShipSelected }) => {
    const [selectValue, setSelectValue] = useState({});
    
    useEffect(() => {
        setShipSelected(selectValue);
    }, [selectValue, setShipSelected]);

    const handleChangeSelect = (e) => {
        setSelectValue( 
            e.target.value ? data.find( item => (item.name === e.target.value )) : {} 
        );
        
    }   

    return (
        <>
            <select className="selector"
                value={selectValue.name}
                onChange={(e) => handleChangeSelect(e)}
            >   
                <option className="option" value="" >Seleccione una nave...</option>
                {data.map((option, index) => (
                    <option key={index} value={option.name}>
                        {option.name}
                    </option>
                ))}
            </select>        
        </>
    )
}

export default Selector;