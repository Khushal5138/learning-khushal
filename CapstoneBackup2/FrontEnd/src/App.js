import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import RoleSelection from "./components/RoleSelection";
import ServiceProviderLogin from "./components/ServiceProviderLogin";
import ServiceProviderHomePage from "./components/ServiceHomePage";
import CustomerHomePage from "./components/CustomerHomePage";
import CheckReduxState from "./components/CheckReduxState";
import CategoryDisplay from "./components/CategoryDisplay";
import ServiceDisplay from "./components/ServiceDisplay";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingList";
import OtpAndUpload from "./components/OtpAndUpload";
import AddServiceForm from "./components/AddServiceForm";


function App() {
  return (
    <Routes>
      <Route path="/customer/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/select" element={<RoleSelection />} />
      <Route path="/serviceProvider/login" element={<ServiceProviderLogin/>}/>
      <Route path="/serviceProvider/HomePage" element={<ServiceProviderHomePage/>}/>
      <Route path="/customer/HomePage" element={<CustomerHomePage/>}/>
      <Route path="/" element={<CheckReduxState/>}/>
      <Route path="/customer/categories" element={<CategoryDisplay/>}/>
      <Route path="/customer/categories/:categoryId" element={<ServiceDisplay/>}/>
      <Route path="/customer/categories/bookingForm" element={<BookingForm/>}/>
      <Route path="/serviceProvider/bookingList" element={<BookingsList/>}/>
      <Route path="/serviceProvider/Otp/:bookingId" element={<OtpAndUpload/>}/>
      <Route path="/serviceProvider/addService" element={<AddServiceForm/>}/>
    </Routes>
  );
}

export default App;
