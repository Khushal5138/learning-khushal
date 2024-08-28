import { useContext } from "react";
import UserContext from "./UserContext";

const User = () => {
    const userContextOb = useContext(UserContext);
    console.log(userContextOb);

    return (
        <div>
            <h1>User Component with Name = {userContextOb.name} </h1>
        </div>
    );
};
export default User;