import { createContext } from "react";

const MyContext = createContext({
    myName: "Default User",
    mno: "1234567890",
    eid: "default@gmail.com",
    myHobbies: "be default all the time :-)",
});

export default MyContext;