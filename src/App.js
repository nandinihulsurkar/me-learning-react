import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useSearchParams } from "react-router-dom";

import Header from './components/Header';     //OR './components/Header.js' BOTH are same
import Body from './components/Body';
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantsMenu from "./components/RestaurantsMenu";
import UserContext from "./utils/contexts/UserContext";
import MyContext from "./utils/contexts/MyContext";
import MyExpContext from "./utils/contexts/MyExpContext";
  
const AppLayout = () => {

    const [lnUserInfo, setLnUserInfo] = useState([]);

    const lnUInfo = useEffect(() => {
        const userData = {
            name: "Nandini Hulsurkar",
            gender: "Female",
            isloggedIn: true,
        };
        setLnUserInfo(userData);
    }, []);

    const[myInfo, setMyInfo] = useState([]);
    useEffect(()=>{
        const myD = {
            myName: "Default UseR",
            mno: "1234567891",
            eid: "default@gmail.coM",
            myHobbies: "be default all the timee :-)",
        };
        setMyInfo(myD);
    }, []);
    
    return(
        
        <UserContext.Provider value={{isUserLoggedIn:lnUserInfo.isloggedIn, loggedInUser:lnUserInfo.name, gender:lnUserInfo.gender, setLnUserInfo}}>
        <MyContext.Provider value={{myName: myInfo.myName, mno: myInfo.mno, eid: myInfo.eid, myHobbies: myInfo.myHobbies, setMyInfo}}>
            <div className="app">
                <Header />
                <Outlet />

                <MyExpContext.Provider value={{totalExp:"8 Years", skills:"PHP, JQuery, MySQL, AJAX and NOW React with Tailwind :-)"}}>            
                {<Footer />}
                </MyExpContext.Provider>
            </div>
        </MyContext.Provider>
        </UserContext.Provider>
        
    );
}

const ErrorPageLayout = () => {
    return(
        <div className="app">
            <Header />    
            <ErrorPage />
            <Footer />            
        </div>
    );

}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantsMenu />
            }           
        ],
        errorElement: <ErrorPageLayout />
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("main_div"));
root.render(<RouterProvider router={appRouter} />);
