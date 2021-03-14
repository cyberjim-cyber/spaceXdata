import React from 'react';
import Home from '../Home/Home';
import Siebar from '../Sidebar/Siebar';
import './Main.css'




const Main = () => {
    const handleYear=()=>{

    }
    
 
    return (
        <div className="row ">
            <h1>SpaceX launch Program</h1>

            <div className="col-md-2 col-sm-6 sidebar">
            <Siebar handleYear={handleYear}></Siebar>
            </div>
           
                <div className="col-md-9 col-sm-6 main-part">
                  

                    
                <Home handleYear={handleYear}></Home>
               
                </div>
               
            
        </div>
    );
};

export default Main;