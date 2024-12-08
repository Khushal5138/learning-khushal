// import './App.css';
// import Form from './Form';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';


// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleAction = (id) => {
//     const authentication = getAuth();
//     if (id === 1) {
//       signInWithEmailAndPassword(authentication, email, password)
//         .then(response => console.log(response))
//         .catch(error => console.log(error));
//     } else if (id === 2) {
//       createUserWithEmailAndPassword(authentication, email, password)
//         .then(response => console.log(response))
//         .catch(error => console.log(error));
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path='/login' element={<Form title="Login" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(1)} />} />
//           <Route path='/register' element={<Form title="Register" setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction(2)} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import BasicTextFields from './BasicTextFields'; // Updated import to use BasicTextFields
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAction = async (actionType) => {
    const auth = getAuth();
    try {
      if (actionType === 'login') {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      } else if (actionType === 'register') {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registered successfully!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path='/login' 
            element={
              <BasicTextFields 
                title="Login" 
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleAction={() => handleAction('login')} 
              />
            } 
          />
          <Route 
            path='/register' 
            element={
              <BasicTextFields 
                title="Register" 
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleAction={() => handleAction('register')} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
