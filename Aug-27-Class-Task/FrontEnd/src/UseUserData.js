import { useState , useEffect } from "react";
import axios from "axios";

const UseUserData = () => {
    const [userOb , setUserOb] = useState({});
    useEffect(() => {
        axios.get("user.json").then((res) => {
            setUserOb(res.data);
        });
    },[]);

    return userOb;

}
export default UseUserData;