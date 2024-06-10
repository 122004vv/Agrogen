import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../Components/PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../Components/BookingDates";

export default function Deliveryagent() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mt-12 mb-8">Orders Received</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings?.length > 0 && bookings.map(booking => (
          <Link to={`/account/bookings/${booking._id}`} key={booking._id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="h-48 overflow-hidden rounded-t-xl flex  ">
              <PlaceImg place={booking.place} />
              <PlaceImg place={booking.place} />

            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{booking.place.title}</h2>
              <BookingDates booking={booking} className="text-gray-500 mb-4" />
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                </svg>
                <span className="text-2xl font-semibold text-gray-800">
                  Total price: ${booking.price}
                </span>
              </div>
            </div>
            <div className="p-4 flex justify-end">
              <Link to={`/account/bookings/${booking._id}`} className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">Accept The Order</Link>
              <Link to={`/delivery`} className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 ml-4">Reject The Order</Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
