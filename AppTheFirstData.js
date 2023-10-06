import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {id:"heading", className:"its_h1"},
    "Namastey React from react"
);
//NOTE: heading here is just a normal javascript object which is created using React.createElement

const root = ReactDOM.createRoot(document.getElementById("main_div"));

root.render(heading);
/* render method is responsible for converting the JS object heading
into h1 tag which the browser understands and
puts it in the specified place */


/*const nestedDivStr = React.createElement(
    "div",{id:"first_div"},"hi i am the div here"
);
const nestedroot = ReactDOM.createRoot(document.getElementById("nested_div"));
nestedroot.render(nestedDivStr);*/
