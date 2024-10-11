import { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [user, loading, error] = useState(auth);
    const navigate = useNavigate();
    return (
        <nav>
            <h2 className="text-3xl font-bold"><Link to="/">Real Estate</Link></h2>

            <ul>
                <li><NavLink className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'} to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'} to='/registration'>Registration</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'} to='/login'>Login</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? 'text-yellow-400' : 'text-white'} to='/'></NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;