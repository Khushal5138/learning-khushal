import {useParams,Link,Outlet} from "react-router-dom"
const CityDetails=()=>{
    const cityName=useParams();
    return(
        <div className="CityDetails">
            <h1>Welcome to {cityName.name}</h1>
            <Link to="news">{cityName.name}</Link>
            <Outlet/>
        </div>
    );
};
export default CityDetails;