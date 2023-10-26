
import { createContext } from "react";

const UserContext = createContext({
    isUserLoggedIn: false,
    loggedInUser: "Default User",
    gender: "Male",
});

export default UserContext;