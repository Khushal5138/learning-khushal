import { jwtDecode } from "jwt-decode";
import { useEffect} from "react";
import axios from "axios";

const JwtDecode = () => {
    useEffect(() => {
        axios.post("http://localhost:3000/api/v1/auth/login", {
            username : "tester1",
            password : "tester1",
        })
        .then((res) => {
            console.log(res.data);
            const decoded = jwtDecode(res.data.token);
            console.log(decoded);
        });
    } , []);

    return <div>Decoded Value = {}</div>;
};
export default JwtDecode;