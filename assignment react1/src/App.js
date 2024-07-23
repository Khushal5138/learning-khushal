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
import Gender from './Gender';
import Products from './Products';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  console.log(Menu);
  return (
    <div className="App">
      <h1>Main Page</h1>
      <Menu/>
      <BrowserRouter>
      <Link to="/Login/lets-login/123"> Login </Link>
      <Link to="/Container"> Container </Link>
      <Link to="/Counter"> Counter </Link>
      <Link to="/Todo"> Hobbies </Link>
      <Link to="/Numbers"> Numbers </Link>
      <Link to="/Calculator"> Calculator </Link>
      <Link to="/ObjList"> Student List </Link>

        <Routes>
          <Route path='/Login/:title/:token' element={<Login/>}/>
          <Route path='/Container' element={<Container/>}/>
          <Route path='/Counter' element={<Counter/>}/>
          <Route path='/Todo' element={<Todo/>}/>
          <Route path='/Numbers' element={<Numbers/>}/>
          <Route path='/Calculator' element={<Calculator/>}/>
          <Route path='/Todo' element={<ObjectList/>}/>
        </Routes>
      </BrowserRouter>
        <Gender/>
        <br/>
        <Products/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
