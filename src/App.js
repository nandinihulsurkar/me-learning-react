import React from "react";
import ReactDOM  from "react-dom/client";

import Header from './components/Header';     //OR './components/Header.js' BOTH are same
import Body from './components/Body';
import Footer from "./components/Footer";

  
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body></Body>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("main_div"));
root.render(<AppLayout />);
