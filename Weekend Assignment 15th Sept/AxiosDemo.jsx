import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.github.com/users/mapbox");
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const interceptorRequest = axios.interceptors.request.use(
      (config) => {
        console.log("Request sent");
        return config;
      },
      (error) => Promise.reject(error)
    );

    const interceptorResponse = axios.interceptors.response.use(
      (response) => {
        console.log("Response received");
        return response;
      },
      (error) => Promise.reject(error)
    );

    getUserData();

    return () => {
      axios.interceptors.request.eject(interceptorRequest);
      axios.interceptors.response.eject(interceptorResponse);
    };
  }, []);

  const sendPostRequest = async () => {
    try {
      const response = await axios.post("/login", {
        firstName: "Finn",
        lastName: "Williams",
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMultipleRequests = async () => {
    try {
      const responses = await axios.all([
        axios.get("https://api.github.com/users/mapbox"),
        axios.get("https://api.github.com/users/phantomjs"),
      ]);
      console.log("Response 1 created at: ", responses[0].data.created_at);
      console.log("Response 2 created at: ", responses[1].data.created_at);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Axios Demo</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {userData && (
        <div>
          <h3>Username: {userData.login}</h3>
          <p>ID: {userData.id}</p>
          <p>Created At: {userData.created_at}</p>
        </div>
      )}
      <button onClick={sendPostRequest}>Send POST Request</button>
      <button onClick={fetchMultipleRequests}>Fetch Multiple Requests</button>
    </div>
  );
};

export default AxiosDemo;
