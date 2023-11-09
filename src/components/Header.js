
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/contexts/UserContext";

//import cartImg from "../images/cart.png";
import { useSelector } from "react-redux";

const Header = () => {

    const luDetails = useContext(UserContext);
        
    const [loginLogoutBtn, setLoginLogoutBtn] = useState('Login');

    //Subscribing the header to our appStore using selector
    const cartItems = useSelector((store) => store.cart.items);   
    
    return(
        <div className="flex justify-between h-16 px-2 mt-2">
            <div className="bg-red-500 w-80 cursor-pointer">
                <Link to="/" >
                <p className="text-white font-extrabold p-4">
                🥘🍟 Are You Hungry ? 🍟🥘
                </p>
                </Link>
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
                        <div>
                            <Link to="/cart">
                                <img className="w-30 h-20 mt-[-25px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTriCSLJTA1shBYtt12seWeLobKAumB_YcdbA&usqp=CAU"></img>                            
                            </Link>
                            <span id="cartCntSpan" className="text-red-500 font-bold ml-[40px] mt-[-63px] absolute">
                                {cartItems.length}
                            </span>
                        </div>                        
                    </li>                   
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