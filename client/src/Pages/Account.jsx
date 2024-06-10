// import { Navigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import { useContext } from "react";
// export default function AccountPage() {
//     const {ready,user} = useContext(UserContext);
//     if(ready && user) return <Navigate to={'/login'} />;
//   return (

//     <div>
//       <h1>Account page here{user?.name} </h1>
//     </div>
//   )
// }

import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../Components/AccountNav.jsx";
import BookingsPage from "./BookingsPage.jsx";
import BookingPage from "./BookingPage.jsx";
import DashBoard from "../Components/DashBoard.jsx";
import ProfileCard from "../Components/ProfileCard.jsx";

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  const role = localStorage.getItem("role");

  async function logout() {
    await axios.post("http://localhost:5000/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (

    <div>
      <AccountNav />
      {/* <div></div> */}
      <div class="flex items-center justify-center">
  <div class="max-w-md rounded overflow-hidden shadow-lg w-full">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">User Profile</div>
      <div class="mb-4">
        <p class="text-gray-700 text-base">User: <span class="font-bold">{user.name}</span></p>
        <p class="text-gray-700 text-base">Email: <span class="font-bold">{user.email}</span></p>
      </div>
      <button onClick={logout} class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
        Logout
      </button>
    </div>
  </div>
</div>



      {subpage === "profile" && (
        <div>
          {/* Logged in as {user.name} ({user.email})<br /> */}

          {role === "vendor" && <DashBoard />}
         
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
      {subpage === "account/bookings" && <BookingsPage />}
      <BookingPage />
    </div>
  );
}
