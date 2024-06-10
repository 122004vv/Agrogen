
import React from 'react'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './Pages/IndexPage'
import Login from './Pages/Login'
import Layout from './Components/Layout'
import Register from './Pages/Register'
import axios from 'axios';
import PlacesPage from './Pages/PlacesPage'
import { UserContextProvider } from './UserContext'
import AccountPage from './Pages/Account'
import PlacesFormPage from './Pages/PlacesFormPage'
import PlacePage from "./Pages/PlacePage";
import BookingsPage from "./Pages/BookingsPage";
import BookingPage from "./Pages/BookingPage";
import Deliveryagent from './Pages/Deliveryagent'
import Chooser from './Pages/Chooser'
import Home from './Pages/AgrogenLandingPage/AgriVistaFarmsLandingPage'
import Helpline from './Pages/Helpline/Helpline'
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
  

  return (
    <UserContextProvider>
      <Routes>
      <Route path='/' element={<Home />} />

        <Route path='/' element={<Layout />}>
          <Route path='/vendor' element={<IndexPage/>} />
          <Route path='/chooser' element={<Chooser />} />
          <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/account' element={<AccountPage />} />
           <Route path='/account/bookings' element={<BookingsPage />} />
           <Route path="/account/places" element={<PlacesPage />} />
           <Route path="/account/places/new" element={<PlacesFormPage />} />
           <Route path="/account/places/:id" element={<PlacesFormPage />} />

           <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
          <Route path="/delivery" element={<Deliveryagent />} />
          <Route path="/helpline" element={<Helpline />} />




        

        </Route>
        
      </Routes>
      </UserContextProvider>


    
  )
}

export default App

// import './App.css'
// import {Route, Routes} from "react-router-dom";
// import IndexPage from "./pages/IndexPage.jsx";
// import LoginPage from "./pages/LoginPage";
// import Layout from "./Layout";
// import RegisterPage from "./pages/RegisterPage";
// import axios from "axios";
// import {UserContextProvider} from "./UserContext";
// import ProfilePage from "./pages/ProfilePage.jsx";
// import PlacesPage from "./pages/PlacesPage";
// import PlacesFormPage from "./pages/PlacesFormPage";
// import PlacePage from "./pages/PlacePage";
// import BookingsPage from "./pages/BookingsPage";
// import BookingPage from "./pages/BookingPage";

// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// axios.defaults.withCredentials = true;

// function App() {
//   return (
//     <UserContextProvider>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<IndexPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/account" element={<ProfilePage />} />
//           <Route path="/account/places" element={<PlacesPage />} />
//           <Route path="/account/places/new" element={<PlacesFormPage />} />
//           <Route path="/account/places/:id" element={<PlacesFormPage />} />
//           <Route path="/place/:id" element={<PlacePage />} />
//           <Route path="/account/bookings" element={<BookingsPage />} />
//           <Route path="/account/bookings/:id" element={<BookingPage />} />
//         </Route>
//       </Routes>
//     </UserContextProvider>
//   )
// }

// export default App