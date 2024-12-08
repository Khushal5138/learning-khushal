// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import BasicButtons from './BasicButtons';  
// export default function BasicTextFields({ title, setEmail, setPassword, handleAction }) {
//   return (
//     <div>
//       <div className="heading-container">
//         <h3>{title} Form</h3>
//       </div>
//       <Box
//         component="form"
//         sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           id="email"
//           label="Enter the Email"
//           variant="outlined"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//           id="password"
//           label="Enter the Password"
//           variant="outlined"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Box>
//       <BasicButtons title={title} handleAction={handleAction} />
//     </div>
//   );
// }

// BasicTextFields.js
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicButtons from './BasicButtons';
import { auth } from './firebase-config'; // Ensure this path is correct
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function BasicTextFields({ title, setEmail, setPassword }) {
  const [email, setEmailState] = React.useState('');
  const [password, setPasswordState] = React.useState('');

  const handleAction = async () => {
    try {
      if (title === 'Login') {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Logged in successfully!');
      } else if (title === 'Register') {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Registered successfully!');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="heading-container">
        <h3>{title} Form</h3>
      </div>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Enter the Email"
          variant="outlined"
          onChange={(e) => setEmailState(e.target.value)}
        />
        <TextField
          id="password"
          label="Enter the Password"
          variant="outlined"
          onChange={(e) => setPasswordState(e.target.value)}
        />
      </Box>
      <BasicButtons title={title} handleAction={handleAction} />
    </div>
  );
}

