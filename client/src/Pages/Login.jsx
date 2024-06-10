

import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import {UserContext} from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);
  const role=localStorage.getItem('role');
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const {data} = await axios.post('http://localhost:5000/login', {email,password} );
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  }

  if (redirect) {
    if(role==='vendor')
    {
      return <Navigate to={'/vendor'} />
    }
    else if(role==='farmer')
    {
      return <Navigate to={'/account'} />
    }
    return <Navigate to={'/delivery'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-36">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mt-3 mx-auto" onSubmit={handleLoginSubmit}>
          <input type="email"
                 placeholder="your@email.com"
                 value={email}
                 onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
                 placeholder="password"
                 className="mt-4"
                 value={password}
                 onChange={ev => setPassword(ev.target.value)} />
          <button className="primary mt-10" type="submit">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}