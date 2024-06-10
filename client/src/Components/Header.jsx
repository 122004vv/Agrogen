import { Link } from "react-router-dom"
import {useContext} from "react";
import {UserContext} from "../UserContext.jsx";
import w from '../assets/w.png'

export default function Header(){
  const {user} = useContext(UserContext);
  return(
  <div>
        <header className=' flex justify-between'>
    <Link to={'/'} href="" className="flex items-center gap-1">
    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 ">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg> */}
          <img src={w} className="w-7" alt="" srcset="" />
<span className='font-bold text-xl'>Agrogen</span>
    </Link>
    {/* <div className='flex gap-2 border border-gray-300 rounded-full py-2 px-4  shadow-md shadow-gray-300'>
      <div>Anywhere</div>
      <div className="border-l border-gray-300"></div>
      <div>Any Week</div>
      <div className="border-l border-gray-300"></div>
      <div>Add guests</div>
      <button className='bg-teal-500 text-white p-1 rounded-full'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

      </button>
    </div> */}
    <Link to={user? '/account': '/login'} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 ">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
    
    <div className="bg-teal-500 text-white rounded-full border border-gray-500 overflow-hidden">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
      </svg>
    </div>
    {!!user && (
          <div>
            {user.name}
          </div>
        )}
    </Link>
  </header>
  </div>
  )
}
