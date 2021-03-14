import React from 'react';
import './SingleHome.css'
const SingleHome = (props) => {

const {flight_number,mission_name,launch_year,links,launch_success,land_success}=props.totsp;



    return (
        
           <div className="col-lg-3 col-md-6 single-home col-sm-12">


           <p>{flight_number}</p>
            <h5>{mission_name}#{flight_number}</h5>
            <p>{launch_year}</p>   
            <p>successfull lauched: {launch_success}</p> 
            <p>successfull lauched: {land_success}</p> 
            <img style={{width:'100px'}} src={links.mission_patch} alt=""/>
           </div>
           
      
    );
};

export default SingleHome;