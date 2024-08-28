// import logo from './logo.svg';
// import './App.css';
// import Menu from './Menu';
// import Login from './Login';
// import Footer from './Footer';
// import Container from './Container';
// import Counter from './Counter';
// import Todo from './Todo';
// import Numbers from './Numbers';
// import Calculator from './Calculator';
// import ObjectList from './objList';
// import Products from './Products';
// import Genders from './Genders';
// import IdPicture from './IdPicture';
// import Todoforms from './Todoforms';
// import TodoDetails from './TodoDetails';
// import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// import User from "./User";
// import EffectOverMemo from './TryToUseEffectInsteadofMemo';
// import ProductDetail from './ProductDetail';
// import ProductForm from './ProductForm';
// import ProductList from './ProductList';
// import SearchProduct from './SearchProduct';
// import EditProduct from './ProductEdit';
// import DeleteProduct from './DeleteProduct';
// import Navbar from './ProductsNavbar';
// import PdfFileUpload from './PdfFileUpload';
// import PhotosFileUpload from './PhotosFileUpload';
// import VideoFilesUpload from './VideoFilesUpload';
// // import Task from './Task';
// // import TaskList from './TaskList';

// function App() {
//   const LOGIN_URL="http://ascendion.com/login";
//   const login_attempts=5;
//   const error_msgs="Something is not working at the moment! Please try again later!";
//   function greet()
//   {
//     alert("You can login ! We hope you have a pleasant experience!");
//   }
//   let menuData=[
//     {title : "Home", path: "/"},
//     {title : "Todos", path: "/Todo"},
//     {title : "Login", path: "/Login/lets-login/123"},
//   ];
//   console.log(Menu);
//   return (
//     <div className="App">
//       <h1>Upload Files</h1>
//       {/* <Todoforms/> */}
//       <BrowserRouter>
//       {/* <Menu menuData={menuData}/> */}
//       {/* <Link to="/Login/lets-login/123"> Login </Link>
//       <Link to="/Container"> Container </Link>
//       <Link to="/Counter"> Counter </Link>
//       <Link to="/Todo"> Todos </Link>
//       <Link to="/Numbers"> Numbers </Link>
//       <Link to="/Calculator"> Calculator </Link>
//       <Link to="/ObjList"> Student List </Link> */}

//       {/* <Navbar/> */}

//         <Routes>
          
//           <Route path='/Login/:title/:token' element={<Login log_url={LOGIN_URL} login_att={login_attempts} errors={error_msgs} greeting={greet}/>}/>
//           <Route path='/Container' element={<Container/>}/>
//           <Route path='/Counter' element={<Counter/>}/>
//           <Route path='/Todo' element={<Todo/>}/>
//           <Route path='/Todo/:id' element={<TodoDetails/>}/>
//           <Route path='/Numbers' element={<Numbers/>}/>
//           <Route path='/Calculator' element={<Calculator/>}/>
//           <Route path='/ObjList' element={<ObjectList/>}/>

//           {/* <Route path="/" element={<ProductList />} />
//           <Route path="/add" element={<ProductForm />} />
//           <Route path="/edit/:id" element={<EditProduct/> } />
//           <Route path="/product/:id" element={<EditProduct/> }/>
//           <Route path="/search" element={<SearchProduct />} />
//           <Route path="/delete/:id" element={<DeleteProduct/>} /> */}
//         </Routes>
//       </BrowserRouter>
//         {/* <IdPicture/>
//       <footer>
//         <Footer/>
//       </footer> */}
//       {/* <User/>
//       <EffectOverMemo/> */}

//       {/* <Task />
//       <TaskList /> */}

//       {/* <Todo/> */}

//       <PdfFileUpload/>
//       <PhotosFileUpload/>
//       <VideoFilesUpload/>

//     </div>
//   );
// }

// export default App;













// // import logo from './logo.svg';
// // import './App.css';
// // import Menu from './Menu';
// // import Login from './Login';
// // import Footer from './Footer';
// // import Container from './Container';
// // import Counter from './Counter';
// // import Todo from './Todo';
// // import Numbers from './Numbers';
// // import Calculator from './Calculator';
// // import ObjectList from './objList';
// // import Products from './Products';
// // import Genders from './Genders';
// // import IdPicture from './IdPicture';
// // import Todoforms from './Todoforms';
// // import TodoDetails from './TodoDetails';
// // import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
// // import ExampleUseEffect from './UseEffectWorksLikeAConstructor';
// // import Cities from './Cities';
// // import CityDetails from './CityDetails';
// // import CityNews from './CityNews';
// // import RefHookExample from './RefHookExample';
// // import ClassBasedCounter from './ClassBasedCounter';
// // import React, { useState } from 'react';
// // import ReduxCounter from './ReduxCounters/ReduxCounter';
// // import ReduxTodo from './ReduxTodo';
// // import EditTodo from './EditTodo';
// // import UseMemoHookExample from './UseMemoExample';
// // import CustomHookUser from './CustomHookUser';
// // import Profile from './Profile';
// // import JwtDecode from './jwtDecode';
// // import DataTableExample from './DataTableExample';
// // import LazyComponent from './LazyComponent';
// // import LazyHome from './LazyHome';

// // function App() 

// //   const LOGIN_URL="http://ascendion.com/login";
// //   const login_attempts=5;
// //   const error_msgs="Something is not working at the moment! Please try again later!";
// //   let [show,setShow] = useState(true);
// //   let [log,setLog] = useState(true);

  

// //   let menuData=[
// //     {title : "Home", path: "/"},
// //     {title : "Todos", path: "/Todo"},
// //     {title : "Login", path: "/Login/lets-login/123"},
// //     {title : "ReduxTodo", path: "/ReduxTodo"},
// //     {title : "Context Example", path: "/profile"},
// //   ];
// //   console.log(Menu);
// //   return (
// //   <NumberContext.Provider value={42}>
// //      <div>
// //          <Display />
// //        </div>
// //      </NumberContext.Provider>
// //    )
// //    function Display() {
// //      const value = useContext(NumberContext);
// //      return <div>The answer is {value}.</div>;
// //    }
// //    ReactDOM.render(<App />, document.querySelector("#root"));
// //    const CurrentUser = React.createContext();
// //    const Notifications = React.createContext();
// //    function HeaderBar() {
// //      const user = useContext(CurrentUser);
// //      const notifications = useContext(Notifications);
// //      return (//     <header>//       Welcome back, {user.name}!//       You have {notifications.length} notifications.//     </header>//   );
// // //    return (
// // //      <div className="App"
// // //        {/* show var ={show} <br/>
// // //        <select onChange={(e) => {
// // //            e.target.value == "show" ? setShow(true) : setShow(false);
// // //          }} >
// // //          <option value="show">Show</option>
// // //          <option value="hide">Hide</option>
// // //        </select> */}
// // //        <h1>Main Page</h1>
// // //        {/* <Todoforms/> */}
// // //        {/* <RefHookExample/> */}
// // //        {/* <ClassBasedCounter/> */}
// // //        {/* <ReduxCounter/> */}
// // //        {/* <Todo/> */}
// // //        {/* <JwtDecode/> */}
// // //        {/* <DataTableExample/> */
// // //  {/* 
// // //        <ReduxTodo/> */
// // //        {/* <Login/> */
// //        <BrowserRouter>
// //        { <Menu menuData={menuData}/> }
// //        <Link to="/Login/lets-login/123"> Login </Link>
// //        <Link to="/Container"> Container </Link>
// //        <Link to="/Counter"> Counter </Link>
// //        <Link to="/Todo"> Hobbies </Link>
// //        <Link to="/Numbers"> Numbers </Link>
// //        <Link to="/Calculator"> Calculator </Link>
// //        <Link to="/ObjList"> Student List </Link>
// //        <Link to="/useEffect">useEffectCounter</Link> 
// //        <Link to="/lazy">Lazy Loading Example</Link>
// //        <h1>Main Heading</h1>
// //          <Routes>
// //          <Route path="/useMemo" element={<UseMemoHookExample />}/>
// //          <Route path="/CustomUserHook" element={<CustomHookUser />}/>
// //          <Route path="/profile" element={<Profile/>}
// //           <Route path="/" element={<ReduxTodo />}>
// //            <Route path="edit/:index" element={<EditTodo />} />
// //          </Route>        
// //            {/* <Route path='/Login/:title/:token' element={<Login log_url={LOGIN_URL} login_att={login_attempts} errors={error_msgs} greeting={greet}/>}/> */}
// //            <Route path='/Container' element={<Container/>}/>
// //            <Route path='/Counter' element={<Counter/>}/>
// //            <Route path='/Todo' element={<Todo/>}/>
// //            <Route path='/Todo/:id' element={<TodoDetails/>}/>
// //            <Route path='/Numbers' element={<Numbers/>}/>
// //            <Route path='/Calculator' element={<Calculator/>}/>
// //            <Route path='/ObjList' element={<ObjectList/>}/>
// //            <Route path="/lazy" element={<LazyHome/>}/>
// //            {/* <Route path='/cities/' element={<Cities />}>
// //            <Route path=':name/' element={<CityDetails/>}>
// //              <Route path='news' element={<CityNews newsText="this is city news"/>}/>
// //            </Route>
// //            </Route> */}
// //          </Routes>
// //        </BrowserRouter>
// //          {/* <IdPicture/> */}
// //        <footer>
// //          <Footer/>
// //        </footer>
// //      </div>
// //    );
// // ;
// // export default App;

// // // const App = () => {
// // //   const [isLoggedIn, setIsLoggedIn] = useState(false);

// // //   const handleLogin = () => {
// // //     setIsLoggedIn(true);
// // //   };

// // //   const handleLogout = () => {
// // //     setIsLoggedIn(false);
// // //   };

// // //   let menuData=[
// // //     {title : "Home", path: "/"},
// // //     {title : "Todos", path: "/Todo"},
// // //     {title : "Login", path: "/Login/lets-login/123"},
// // //   ];

// // //   return (
// // //     <div>
// // //       {isLoggedIn ? (
// // //         <Menu onLogout={handleLogout} menuData={menuData}/>
// // //       ) : (
// // //         <Login onLogin={handleLogin} />
// // //       )}
// // //     </div>
// // //   );
// // // };


import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import PdfFileUpload from "./PdfFileUpload";
import PhotosFileUpload from "./PhotosFileUpload";
import VideoFilesUpload from "./VideoFilesUpload";

const App = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        File Uploads
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <PdfFileUpload />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <PhotosFileUpload />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <VideoFilesUpload />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

