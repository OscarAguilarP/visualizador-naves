import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Selector from './Selector';
import InfoNave from './InfoNave';
import _ from 'lodash';
import getShips from '../actions/shipAction';

const Home = () => {
    const dispatch = useDispatch();
    const { data, error } = useSelector(state => state.ships);

    const [shipSelected, setShipSelected] = useState({});

    useEffect(() => {
        getShips(dispatch);
    }, [dispatch]);

    return (
        <div className="background">
            {_.isEmpty(data) ? (
                <h2> Loading ...</h2> 
                ): (
                    <Selector 
                        data={data} 
                        setShipSelected={setShipSelected}
                    /> 
                )
            }
            <InfoNave 
                shipSelected={shipSelected}
            />
            
        </div>
    )
};

export default Home;