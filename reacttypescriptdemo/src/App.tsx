// // import React, { useState } from 'react';
// // import Login from './Login';
// // import Counter from './Counter';
// // import Todo from './Todo';
// // import UserProfile from './UserProfile';
// // import { BrowserRouter } from 'react-router-dom';
// // import { Route , Routes } from 'react-router-dom';

// // const App: React.FC = () => {
// //   const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

// //   const handleLogin = (username: string) => {
// //     setWelcomeMessage(`Welcome ${username}, you are logged in.`);
// //   };

// //   return (
// //     <div>

// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/user/:userId" element={<UserProfile/>} />
// //         </Routes>
// //       </BrowserRouter>


//       // <Login onLogin={handleLogin} />
//       // {welcomeMessage && <h2>{welcomeMessage}</h2>}
// //       <Counter/>
// //       <Todo/>
// //     </div>
// //   );
// // };

// // export default App;


// // import React from 'react';
// // import { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import NavBar from './Navbar';
// // import Login from './Login';
// // import Todo from './Todo';
// // import Counter from './Counter';
// // import UserProfile from './UserProfile';

// // const App: React.FC = () => {

// //   const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

// //   const handleLogin = (username: string) => {
// //     setWelcomeMessage(`Welcome ${username}, you are logged in.`);
// //   };

// //   return (
// //     <Router>
// //       <NavBar />
// //       <Routes>
// //         <Route path="/login" element={<Login onLogin={handleLogin}/> }  />
// //         <Route path="/todo" element={<Todo />} />
// //         <Route path="/counter" element={<Counter />} />
// //         <Route path="/user/:userId" element={<UserProfile />} />
// //         <Route path="/user" element={<UserProfile />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import NavBar from './Navbar';
// import Login from './Login';
// import Todo from './Todo';
// import Counter from './Counter';
// import UserProfile from './UserProfile';

// const App: React.FC = () => {
//   const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

//   const handleLogin = (username: string) => {
//     setWelcomeMessage(`Welcome ${username}, you are logged in.`);
//   };

//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route
//           path="/login"
//           element={
//             <>
//               <Login onLogin={handleLogin} />
//               {welcomeMessage && <h2>{welcomeMessage}</h2>}
//             </>
//           }
//         />
//         <Route path="/todo" element={<Todo />} />
//         <Route path="/counter" element={<Counter />} />
//         <Route path="/user/:userId" element={<UserProfile />} />
//         <Route path="/user" element={<UserProfile />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
import Login from './Login';
import Todo from './Todo';
import Counter from './Counter';
import UserProfile from './UserProfile';

const App: React.FC = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setWelcomeMessage(`Welcome ${username}, you are logged in.`);
  };

  return (
    <Router>
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                {welcomeMessage && <h2 className="welcome-message">{welcomeMessage}</h2>}
                <Login onLogin={handleLogin} />
              </>
            }
          />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/user" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
