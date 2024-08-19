import axios from 'axios';
import { useState , useEffect } from 'react';
import { useNavigate , Outlet , Link} from 'react-router-dom';
import './UsersDisplay.css'; 

function UsersDisplay() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:3000/api/v1/users";
                const response = await axios.get(url);
                setData(response.data.users);
            } catch (error) {
                alert("Server is not responding. Please try again later.");
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/users/${userId}`);
            setData(prevData => prevData.filter(user => user._id !== userId));
        } catch (error) {
            alert("Error deleting user. Please try again later.");
            console.error(error);
        }
    };


    function viewUserDetails(userId) {
        navigate(`/UsersPage/${userId}`);
    }

    return (
        <div className='container'>
            <h1>Select Any User to View Additional Details:</h1>
            {/* <button className ='btn' onClick={displayCategory}>Load Users</button> */}
            <div className='user-list'>
                {data.map((user) => (
                    <div className='user-card' key={user._id} onClick={() => viewUserDetails(user._id)}>
                        {/* <p><b>Name:</b> {user.displayName}</p> */}
                        {/* <p><b>Email:</b> {user.email}</p> */}
                        <p><b>Username:</b> {user.username}</p>
                        <button className='delete-button' onClick={() => handleDelete(user._id)}>
                                Delete                   
                        </button>
                        {/* <p><b>Status:</b> {user.status ? 'True' : 'False'}</p> */}
                    </div>
                ))}
            </div>
            <Outlet/>
        </div>
    );
}

export default UsersDisplay;