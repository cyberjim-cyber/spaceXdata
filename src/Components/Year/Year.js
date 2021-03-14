import React, { useContext, useState } from 'react';
import './Year.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import { fakedata } from '../../Fakedata/fake';

import SingleYear from '../SingleYear/SingleYear';

const Year = ({handleYear}) => {

  const [years,setyears]=useState(fakedata)

  const {handlelaunch,handlelandsuccess}=useContext(userContext)
  
    return (
       <div>
            <div className="row ">
            {
                years.map(year =><SingleYear handleYear={handleYear} key={year.id} year={year}></SingleYear>)
            }
        </div>
        <div className="row">
          <h4>Successful lauched</h4>
          <div className="col-md-6 col-sm-6 year-btn">
             <Link to={`/launchTrue`}> <button className="button" onClick={() =>handlelaunch(true)}>True</button></Link>
          </div>
          <div className="col-md-6 col-sm-6 year-btn">
          <Link to={`/launchFalse`}> <button className="button" onClick={() =>handlelaunch(false)}>False</button></Link>
            </div>
        </div>

        <div className="row mt-20px">
              <h4>Successful landing</h4>
              <div className="col-md-6 col-sm-6 year-btn">
              <Link to={`/landTrue`}> <button className="button"onClick={() =>handlelandsuccess(true)}>True</button></Link>
              </div>
              <div className="col-md-6 col-sm-6 year-btn">
              <Link to={`/landFalse`}><button className="button"onClick={() =>handlelandsuccess(false)}>True</button></Link>
              </div>
        </div>


       </div>
    );
};

export default Year;