
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/contexts/UserContext";

const Header = () => {

    const luDetails = useContext(UserContext);
    console.log(luDetails);
    
    const [loginLogoutBtn, setLoginLogoutBtn] = useState('Login');    
    
    return(
        <div className="flex justify-between h-16 px-2 mt-2">
            <div className="bg-red-500 w-80">
                <p className="text-white font-extrabold p-4">
                🥘🍟 Are You Hungry ? 🍟🥘
                </p>
            </div>         
            <div className="w-5/6 bg-red-500 text-white font-medium">
                <ul className="flex mt-[18px] justify-around">
                    <li>
                        Online Status: {useOnlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li>
                        <button className="px-4 h-8 text-white bg-red-400 rounded-md"
                            onClick={() => {
                                (loginLogoutBtn === "Login") ? setLoginLogoutBtn("Logout") : setLoginLogoutBtn("Login")
                            }}
                        >                    
                        {loginLogoutBtn}
                        </button>
                    </li>
                    <li className="font-mono text-green-500 font-bold">{luDetails.gender == 'Female' ? '👩' : '🧑'} {luDetails.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
//NOTE: with out exporting the component, you can not import it anywhere else.