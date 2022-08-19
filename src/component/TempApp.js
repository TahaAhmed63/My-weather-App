import React, { useEffect, useState } from "react";
import  "./css/style.css"
const TempApp=()=>{
    const [city, setCity ]=useState(null);
    const [search, setSearch]=useState("karachi")
    useEffect( ()=>{
        const fetchApi = async ()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e5b457c8bf4cc450450e12b04c023fb0`
            const response=await fetch(url);
            const rejson = await response.json();
          setCity(rejson.main);
         
        }
        fetchApi()
    },[search])
return(
<>
    
    <div className="box">
     <div className="inputData">
         <input type="search"
         value={search}
         className="inputField" 
         onChange={(event)=>{
             setSearch(event.target.value)
         }}/>
        
     </div>
    { !city ? (
            <p>no data found</p>
        ) : (
            <div>
<div className="info">
   
        <h2 className="location">
        <i  class="fa-solid fa-street-view"></i>   {search}
        </h2>
        <h1 className="temp">{city.temp}</h1>   
        <h3 className="tempmin_max">Min : {city.temp_min} C |Max:{city.temp_max} C</h3>
    </div>
    <div className="wave"></div>
    <div className="wave.-two"></div>
    <div className="wave.-three"></div>
    </div> 
        )
        
    }
     </div>
  
  
    </>
)
}
export default TempApp;