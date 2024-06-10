import {Link, useParams} from "react-router-dom";
import AccountNav from "../Components/AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImg from "../Components/PlaceImg";
export default function PlacesPage() {
  const [places,setPlaces] = useState([]);
  const [text, setText] = useState("Yet to be Verified.");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Accepted And sold");
    }, 10000); // Change text after 20 seconds

    return () => clearTimeout(timer);
  }, []); 
  useEffect(() => {
    axios.get('http://localhost:5000/user-places').then(({data}) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div>
      <AccountNav />
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/places/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new stock
          </Link>
        </div>
        <div className="mt-4 w-3/4 ml-48">
          {places.length > 0 && places.map(place => (
            <Link to={'/account/places/'+place._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="mr-24 ml-64">
              <div className="flex  bg-gray-300 grow shrink-0">
                <PlaceImg place={place} />
              </div>
              </div>
              <div className="w-10/12">
              <div className="grow-0 shrink ">
                <h2 className="text-xl w-96">{place.title}</h2>
                <p className="text-sm mt-2 w-96">{place.description}</p>
              </div>
              <div className="bg-green-600 text-black-800 px-4 py-2 rounded-md w-48 mt-12">
              {text}
</div>

              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}