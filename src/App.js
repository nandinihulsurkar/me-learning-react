import React from "react";
import ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from './components/Header';     //OR './components/Header.js' BOTH are same
import Body from './components/Body';
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import RestaurantsMenu from "./components/RestaurantsMenu";
//import useOnlineStatus from "./utils/useOnlineStatus";
//import Shimmer from "./components/Shimmer";
  
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />            
            <Footer />
        </div>
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
                path: "/restaurant/:restId",
                element: <RestaurantsMenu />
            }
        ],
        errorElement: <ErrorPageLayout />
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("main_div"));
root.render(<RouterProvider router={appRouter} />);
