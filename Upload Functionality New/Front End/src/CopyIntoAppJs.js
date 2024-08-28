import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Login from './Login';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Numbers from './Numbers';
import Calculator from './Calculator';
import ObjectList from './objList';
import Products from './Products';
import Genders from './Genders';
import IdPicture from './IdPicture';
import Todoforms from './Todoforms';
import TodoDetails from './TodoDetails';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  const LOGIN_URL="http://ascendion.com/login";
  const login_attempts=5;
  const error_msgs="Something is not working at the moment! Please try again later!";
  function greet()
  {
    alert("You can login ! We hope you have a pleasant experience!");
  }
  let menuData=[
    {title : "Home", path: "/"},
    {title : "Todos", path: "/Todo"},
    {title : "Login", path: "/Login/lets-login/123"},
  ];
  console.log(Menu);
  return (
    <div className="App">
      <h1>Main Page</h1>
      <BrowserRouter>
      <Menu menuData={menuData}/>
      <Link to="/Login/lets-login/123"> Login </Link>
      <Link to="/Container"> Container </Link>
      <Link to="/Counter"> Counter </Link>
      <Link to="/Todo"> Hobbies </Link>
      <Link to="/Numbers"> Numbers </Link>
      <Link to="/Calculator"> Calculator </Link>
      <Link to="/ObjList"> Student List </Link>

        <Routes>
          
          <Route path='/Login/:title/:token' element={<Login log_url={LOGIN_URL} login_att={login_attempts} errors={error_msgs} greeting={greet}/>}/>
          <Route path='/Container' element={<Container/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/Todo' element={<Todo/>}/>
          <Route path='/Todo/:id' element={<TodoDetails/>}/>
          <Route path='/Numbers' element={<Numbers/>}/>
          <Route path='/Calculator' element={<Calculator/>}/>
          <Route path='/ObjList' element={<ObjectList/>}/>
        </Routes>
      </BrowserRouter>
        <IdPicture/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
