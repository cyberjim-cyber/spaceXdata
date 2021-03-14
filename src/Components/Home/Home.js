import React, { useContext } from 'react';
import './Home.css'
import { userContext } from '../../App';
import SingleHome from '../SingleHome/SingleHome';



const Home = () => {
    const {totalspaces,settotalspaces}=useContext(userContext)
    
console.log(totalspaces)
   

    const slicedata=totalspaces.slice(91,101)





    // const addto=()=>{
    //     fetch('http://localhost:5000/addspace',{
    //         method: 'POST',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(slicedata)
    //     })
    //     .then(response => response.json())
    //     .then(result=>{
    //         console.log(result)
    //     })
    

    // }
    return (
        <div className="row home">
            <h3>total  data{totalspaces.length}</h3>
           
            {
                totalspaces.map(totsp=> <SingleHome totsp={totsp}></SingleHome>)
            }
        
        </div>
    );
};

export default Home;