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
import TestContext from "./utils/contexts/TestContext";
  
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

    return(
        
        <UserContext.Provider value={{isUserLoggedIn:lnUserInfo.isloggedIn, loggedInUser:lnUserInfo.name, gender:lnUserInfo.gender, setLnUserInfo}}>
            <div className="app">
                <Header />
                <Outlet />            
                <Footer />
            </div>
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
