// import React from 'react';
// import { useParams } from 'react-router-dom';

// const UserProfile: React.FC = () => {

//   const params = useParams();
//   const userId = params.userId; 

//   return (
//     <div className="userProfileDiv">
//       <h1>User Profile</h1>
//       <p>Welcome, user with ID: {userId}</p>
//     </div>
//   );
// };

// export default UserProfile;


import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css'; // Make sure to import the CSS file

const UserProfile: React.FC = () => {
  
  const params = useParams();
  const userId = params.userId; 

  return (
    <div className="userProfileDiv">
      <h1>User Profile</h1>
      <p>Welcome, user with ID: <span className="userId">{userId}</span></p>
    </div>
  );
};

export default UserProfile;
