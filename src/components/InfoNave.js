import React from 'react';
import _ from 'lodash';
import './InfoNave.css';

const InfoNave = ({ shipSelected }) => {
    const formatNumber = (value) => {
        if (value) {
            return `${value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
        }
    }   
    const renderInfo = () => {
        const {
            name,
            model,
            manufacturer,
            length,
            cost_in_credits,
            passengers,
            people
        } = shipSelected;
        
        return (
            <>
                <div className="rectangle2">
                    <p className="label-name">{name}</p>
                    <p className="data-name">{model}</p>
                    <hr className="line" ></hr>
                    <p className="label-fabricante">Fabricante</p>
                    <p className="data-fabricante">{manufacturer}</p>
                    <p className="label-largo">Largo</p>
                    <p className="data-largo">{formatNumber(length)} fts</p>
                    <p className="label-valor">Valor</p>
                    <p className="data-valor">{formatNumber(cost_in_credits)} créditos</p>
                    <p className="label-cantidad">Cantidad pasajeros</p>
                    <p className="data-cantidad">{formatNumber(passengers)}</p>
                </div> 
                {people && (
                    <div className="rectangle3">
                        <p className="label-pasajeros">Pasajeros</p>
                        <hr className="line2" ></hr>
                        <div className="data-pasajeros">
                            {people.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </div>
                        

                    </div>
                )}
            </>
        );
    };
    return (
        <> 
            {_.isEmpty(shipSelected) ? <></> : renderInfo() }
        </> 
    )
};

export default InfoNave;