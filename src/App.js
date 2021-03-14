
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
  } from "react-router-dom";

  import Main from './Components/Main/Main';
  import { createContext, useEffect, useState } from 'react';


  export const userContext=createContext()
  function App() {




  
  const [totalspaces,settotalspaces]=useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/getspace`)
    .then(res => res.json())
    .then(data =>{
        settotalspaces(data)
     
    })
    },[])




  const handleYear=(year2)=>{
    console.log(year2)
    fetch('https://salty-caverns-61828.herokuapp.com/getyear',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({year:year2})
    })
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      settotalspaces(data)
     
    })
   
      }
  
    const handlelaunch=(tr)=>{

      console.log("handletrue",tr)

    fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${tr}`)

    .then(response=>response.json())
      .then(data=>{
        console.log(data)
        settotalspaces(data)
      })

  }

 

 

  const handlelandsuccess=(tf)=>{
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100&land_success=${tf}`)

    .then(response=>response.json())
      .then(data=>{
        console.log(data)
        settotalspaces(data)
      })

  }
  
  return (
    <userContext.Provider value={{handleYear,totalspaces,handlelaunch,handlelandsuccess}} >

      <Router>
      <Switch>
          <Route exact to="/">
          <Main></Main>
          </Route>
        
      </Switch>
      </Router>
 
   
    </userContext.Provider>
  );
}

export default App;
