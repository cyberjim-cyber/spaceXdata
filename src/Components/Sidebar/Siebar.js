import React from 'react';
import Year from '../Year/Year';

const Siebar = ({handleYear}) => {
    return (
        <div>
            <h2>filter</h2>
            <Year handleYear={handleYear}></Year>
        </div>
    );
};

export default Siebar;