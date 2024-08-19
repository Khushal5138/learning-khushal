// import logo from './logo.svg';
// // import './App.css';
// import Menu from "./Menu";
// import Login from './Login';
// import Footer from './Footer';
// import Container from './Container';
// import Counter from './Counter';
// import Todo from './Todo';
// import Hobbies from './Assignment';
// import Add from './2nd';
// import Trigonometry from './3rd';
// import ObjectList from './4th';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import GenderAPI from './GenderAPI';
// import Products from './Products';
// import MyProfile from './Profile';
// import Github from './github';
// import Fake from './Fake';
// import ProductDetailsComponent from './ProductDetailsComponent';
// import DeleteProducts from './DeleteProducts';
// import ShowProducts from './ShowProducts';
// import Addproducts from './Addproducts';
// import ProductDetails from './ProductDetails';
// import Cities from './Cities';
// import CityDetails from './CityDetails';
// import CityNews from './CityNews';
// import RefHookExample from './RefHookExample';
// import ClassBasedCounter from './ClassBasedCounter';
// import "./products.css";
// import OrderDetails from './OrderDetails';
// import Navbar from './Navbar';
// import UsersDetails from './UsersDetails';
// import UsersDisplay from './UsersDisplay';
// import AdminPage from './AdminPage';
// import CreateCategory from './CreateCategory';
// import EditCategory from './EditCategory';

// function App() {
//     const LOGIN_URL="https://ascendion.com/login";
//     let login_attempts=5;
//     let menuData=[
//       {title:"Home",path:"/"},
//       // {title:"Todos",path:"/Todo"},
//       // {title:"Login",path:"/login"},
//       // {title:"ExampleUseEffect",path:"/ue"},
//       // {title:"Cities",path:"/cities"},
//       // {title:"RefHookExample",path:"/refhook"},
//       // {title:"classBasedExample",path:"/classBasedExample"},
//       {title:"Products",path:"/products"}
//     ];
//     let error_msgs={
//       LOGIN_FAILED: "sorry! unable to login",
//       LOGIN_500: "Server error"
//     }
//     function greet(){
//       alert("Let's Login! You have a great day!");
//     }
//     return(
//       <div className='App'>
//         {/* <BrowserRouter>
//           <Menu menuData={menuData}/>
//           <Routes>
//             <Route path="/todo" element={<Todo/>}/>
//             <Route path='/login/:title/:tokenId' element={<Login/>}/>
//             <Route path="/todo/:id" element={<TodoDetails/>}/>
//             <Route path="/ue" element={<ExampleUseEffect/>}/>
//             <Route path="/cities/" element={<Cities/>}>
//               <Route path=":name/" element={<CityDetails/>}>
//                 <Route path="news" element={<CityNews newsText="This is news text"/>}/>
//               </Route>
//             </Route>
//             <Route path="/refhook" element={<RefHookExample/>}/>
//             <Route path="/classBasedExample" element={<ClassBasedCounter/>}/>
//             <Route path="/products/" element={<ShowProducts/>}>
//               <Route path=":id/" element={<ProductDetails/>}/>
//             </Route>
//           </Routes>
//         </BrowserRouter> */}


// <BrowserRouter>
//           <Navbar />
//           <Routes>
//           {/* <Route path='/users' element={<AddUsers />} /> */}
//           {/* <Route path="/show" element={<ShowUsers />} >
//           <Route path=":userId" element={<ShowUsers />} /> */}

//           {/* <Route path="/Products" element={}/> */}
//           <Route path="/products" element={<ShowProducts/>}>
//             <Route path=":id" element={<ProductDetails />} />
//           </Route>
//           <Route path="/UsersPage" element={<UsersDetails/>}>
//             <Route path=":userId" element={<UsersDisplay />} />
//           </Route>
//           <Route path="/admin" element={<AdminPage/>}>
//             <Route path=":orderId" element={<OrderDetails />} />
//           </Route>
//           <Route path="create" element={<CreateCategory />} />
//           <Route path="/addproducts" element={<Addproducts/>}/>
//           <Route path="edit/:id" element={<EditCategory />} />
//           </Routes>
        
//     </BrowserRouter>


//       </div>
//     )
// }

// export default App;


import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Loader from './Loader'; // Create a loader component

// Lazy load components
const ShowProducts = lazy(() => import('./ShowProducts'));
const ProductDetails = lazy(() => import('./ProductDetails'));
const UsersDetails = lazy(() => import('./UsersDetails'));
const UsersDisplay = lazy(() => import('./UsersDisplay'));
const AdminPage = lazy(() => import('./AdminPage'));
const CreateCategory = lazy(() => import('./CreateCategory'));
const EditCategory = lazy(() => import('./EditCategory'));
const Addproducts = lazy(() => import('./Addproducts'));
const OrderDetails = lazy(() => import('./OrderDetails'));

function App() {
    const LOGIN_URL = "https://ascendion.com/login";
    let login_attempts = 5;
    let menuData = [
        { title: "Home", path: "/" },
        { title: "Products", path: "/products" }
    ];
    let error_msgs = {
        LOGIN_FAILED: "sorry! unable to login",
        LOGIN_500: "Server error"
    };

    function greet() {
        alert("Let's Login! You have a great day!");
    }

    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/products" element={<ShowProducts />}>
                            <Route path=":id" element={<ProductDetails />} />
                        </Route>
                        <Route path="/UsersPage" element={<UsersDetails />}>
                            <Route path=":userId" element={<UsersDisplay />} />
                        </Route>
                        <Route path="/admin" element={<AdminPage />}>
                            <Route path=":orderId" element={<OrderDetails />} />
                        </Route>
                        <Route path="create" element={<CreateCategory />} />
                        <Route path="/addproducts" element={<Addproducts />} />
                        <Route path="edit/:id" element={<EditCategory />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
