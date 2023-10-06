import React from "react";
import ReactDOM  from "react-dom/client";

const itsMe = <span> This is Nandini Hulsurkar</span>;
const jsxHeading1 = (
    <h1 id='jsx_heading'>Namastey React : {itsMe} 👌</h1>
);

function TheHeader(){
    return (
    <div id='header_container'>
        <div id='left_header' className="">
            Nandini Hulsurkar
        </div>
        <div id="right_header" className="">
            HI.. This is nandini hulsurkar, welcomes you to my react learning place.
        </div>
    </div>
    );
}

function  TheFooter(){
    return (
        <div id="footer_container">
            The footer content will come here.
        </div>
    );
}

const TheIndexContent = () => (
    <div>        
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
        The index page content goes here. The index page content goes here. The index page content goes here. <br/>
    </div>
);

const TheCompleteIndexPage = () => (
    <div>
        <TheHeader /><br/>
        <TheIndexContent /><br/>
        
        <TheFooter />
        <TheFooter></TheFooter>
        {TheFooter()}
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("main_div"));
root.render(<TheCompleteIndexPage />);
