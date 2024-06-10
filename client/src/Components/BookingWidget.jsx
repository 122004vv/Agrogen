import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "../UserContext.jsx";
import StripeCheckout from "react-stripe-checkout";


export default function BookingWidget({place}) {
  const [checkIn,setCheckIn] = useState('');
  const [checkOut,setCheckOut] = useState('');
  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);
  const publishableKey =
    "pk_test_51OdlCuSFfBij0ekrxB8KgUsE3i7Mu3vHtOBwnsJcKrPiMrSZCnEk6kzrj00z175aHNTAdKc49WDvMPxSjnSU9ZYH00M9ziMs4W";
  const [priceForStripe, setPrice] = useState(0);
  const [noOfBookings, setNoOfBookings] = useState(1); // Default to 1 booking


  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "/payment",
        method: "post",
        data: {
          amount: 1000,
          token,
          currency: "inr",
        },
      });
      if (response.status === 200) {
        alert("Payment Successful");
        await bookThisPlace();

      }
    } catch (error) {
      // handleFailure();
      alert("Payment Failed");
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    const response = await axios.post('http://localhost:5000/bookings', {
      checkIn,checkOut,numberOfGuests,name,phone,
      place:place._id,
      price:numberOfNights * place.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per kg
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Delivery start Date:</label>
            <input type="date"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Delivery End Date:</label>
            <input type="date" value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of stocks:</label>
          <input type="number"
                 value={numberOfGuests}
                 onChange={ev => setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div>
      {/* <button onClick={bookThisPlace} className="primary mt-4">
        Book this Stock
        {numberOfNights > 0 && (
          <span> ${numberOfNights * place.price}</span>
        )} */}
        <StripeCheckout
              stripeKey={publishableKey}
              label="Pay Now"
              name="Pay With Credit Card"
              // billingAddress
              // shippingAddress
              amount={numberOfNights * place.price}
              description={`Your total is ${numberOfNights * place.price}`}
              token={payNow }
            />
      {/* </button> */}
    </div>
  );
}