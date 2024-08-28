import { useContext } from "react";
import UserContext from "./UserContext";

const PersonalDetails = () => {
    const userContextOb = useContext(UserContext);
    return(
        <div>
            <h1>Personal Details</h1>
            <h1>User component with City = {userContextOb.city} </h1>
            <h1>User Component with Name = {userContextOb.name} </h1>
        </div>
    );
};
export default PersonalDetails;