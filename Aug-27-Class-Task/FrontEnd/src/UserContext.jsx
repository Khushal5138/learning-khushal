import { createContext } from "react";
const initialValue = { name : "default name" , city : "default city"};

const UserContext = createContext(initialValue);
export default UserContext;