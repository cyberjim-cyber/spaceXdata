import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './SingleYear.css'


const SingleYear = (props) => {

    const {handleYear}=useContext(userContext)

    const {year,id}=props.year
    
  
    return (
        <div className="col-lg-6 col-md-6 col-sm-6  year-btn">
          <Link to={`/${year}`}> <button className="button" onClick={() =>handleYear(year)}>{year}</button></Link>
        </div>
    );
};

export default SingleYear;