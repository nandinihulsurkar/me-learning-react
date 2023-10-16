
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />                
            </div>
            <div className="nav-items">
                <ul> 
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                        onClick={() => {
                            (loginLogoutBtn === "Login") ? setLoginLogoutBtn("Logout") : setLoginLogoutBtn("Login")
                        }}
                    >                    
                    {loginLogoutBtn}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;
//NOTE: with out exporting the component, you can not import it anywhere else.