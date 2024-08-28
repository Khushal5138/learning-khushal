import { useParams, Link, Outlet } from "react-router-dom";
import { useState } from "react";
const Cities=()=>{
    const [city,setCity]=useState("Default city");
    const cityName=useParams().city;
    return (
        <div className="City">
            <select
             onChange={(e)=>{
                setCity(e.target.value);
             }}
             >
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="kolkata">Kolkata</option>
             </select>
             <Link to="cityDetails">Go to {city}</Link>
             <Outlet/>
        </div>
    )
}
export default Cities;