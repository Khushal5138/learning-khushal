import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UsersDetails.css';  

const UsersDetails = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { userId } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/users/${userId}`)
            .then((response) => {
                console.log(response.data);
                setUser(response.data.user);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [userId]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/users/${userId}`);
            navigate('/UsersPage');
        } catch (err) {
            setError(err.message || 'An error occurred while deleting the user.');
        }
    };

    if (loading) return <p className="loading-message">Loading...</p>;
    if (error) return <p className="error-message">Error: {error}</p>;

    return (
        <div className="admin-page">
            {user ? (
                <div className="user-item">
                    <h2 className="user-name">{user.displayName}</h2>
                    <p className="user-email">{user.email}</p>
                    <p className="user-username">{user.username}</p>
                    <p className="user-role">{user.role?.name}</p>
                    <p className="user-status">{user.status ? "Approved" : "Blocked"}</p>
                    <button className="delete-button" onClick={handleDelete}>
                        Delete
                    </button>
                    {/* <button className="update-button" onClick={handleUpdate}>
                        Update
                    </button> */}
                </div>
            ) : (
                <p>No user found.</p>
            )}
        </div>
    );
};

export default UsersDetails;
