import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../Components/Image.jsx";
import DashBoard from "../Components/DashBoard.jsx";


export default function IndexPage() {
  const [places,setPlaces] = useState([]);
  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "/payment",
        method: "post",
        data: {
          amount: priceForStripe * noOfBookings,
          token,
          currency: "inr",
        },
      });
      if (response.status === 200) {
        handleBook();
        alert("Payment Successful");
      }
    } catch (error) {
      // handleFailure();
      alert("Payment Failed");
      console.log(error);
    }
  };
  useEffect(() => {
    axios.get('http://localhost:5000/places').then(response => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div>
    <div className="mt-16  ml-12 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      {places.length > 0 && places.map(place => (
        <Link to={'/place/'+place._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex w-64">
            {place.photos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square w-64 h-64" src={place.photos?.[0]} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{place.address}</h2>
          <h3 className="text-sm text-gray-500">{place.title}</h3>
          <div className="mt-1">
            <span className="font-bold">${place.price}</span> per kg
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

