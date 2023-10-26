import { useContext } from "react";
import UserContext from "../utils/contexts/UserContext";


const Footer = () => {

    const {loggedInUser} = useContext(UserContext);

    return(
        <div className="bg-red-500 text-white text-sm m-2 pl-3 p-3">      
                Hi Akshay.. This is {loggedInUser}, I want you to know that your hard work, dedication, and passion for teaching are truly appreciated. Thanks a lot for making this Namaste React. I am able to learn react confidently now. Thanks again.
                I used my name here to understand the context in a better way. To check how to access the context anywahere in the APP.
        </div>
    );
}

export default Footer;