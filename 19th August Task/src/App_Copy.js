import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";
import Login from './Login';
import Footer from './Footer';
import Container from './Container';
import Counter from './Counter';
import Todo from './Todo';
import Hobbies from './Assignment';
import Add from './2nd';
import Trigonometry from './3rd';
import ObjectList from './4th';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GenderAPI from './GenderAPI';
import Products from './Products';
import MyProfile from './Profile';
import Github from './github';

function App() {
  // return (
  //   <div className="App">
  //     <header>
  //       <Menu/>
  //     </header>

  //     <main>
  //       <Hobbies/>
  //       <Add/>
  //       <Trigonometry/>
  //       <ObjectList/>
  //     </main>

  //     <footer>
  //       <Footer/>
  //     </footer> 
  //   </div>
  // );

    // return(
    //   <div className="App">
    //     <header>
    //       <Menu/>
    //     </header>

    //     <h1>Main Page</h1>
    //     <BrowserRouter>
    //       <Link to="/Todo">Todo</Link>
    //       <Link to="/Login">Login</Link>
    //       <br/>

    //       <Routes>
    //         <Route path="/Todo" element={<Todo/>}/>
    //         <Route path="/Login" element={<Login/>}/>
    //       </Routes>
    //     </BrowserRouter>

    const LOGIN_URL="https://ascendion.com/login";
    let login_attempts=5;
    let menuData=[
      {title:"Home",path:"/"},
      {title:"Todos",path:"/Todo"},
      {title:"Login",path:"/login/:title/:tokenId"}
    ];
    function greet(){
      alert("Let's Login! You have a great day!");
    }
    return(
      <div className="App">
        {/* <header>
          <Menu/>
        </header>*/}

        <h1>Main Page</h1>
        <BrowserRouter>
          <Menu menuData={menuData}/>

          <Routes>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/logn/:title/:tokenId"
              element={<Login L_URL={LOGIN_URL}
                login_attempts={login_attempts}
                greet={greet}/>
              }
        />

          </Routes>
        </BrowserRouter>  


        {/* <Menu menuData={menuData}/> */}
        
        {/* <header>
          <Menu/>
        </header>

        <br/><br/>

        <MyProfile/>
        <GenderAPI/>
        <Products/>
        <Github/>

        <footer>
          <Footer/>
       </footer>  */}
      </div>
    );
}

export default App;
