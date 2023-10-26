
import UserFun from "./UserFun";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext
 from "../utils/contexts/UserContext";
//NOTE class AboutUs extends React.component === class AboutUs extends Component
class AboutUs extends Component
{
    constructor(props) {
        super(props);
        //console.log("Parent constructor called");
    }

    componentDidMount(){
       // console.log("Parent componentDidMount called");
    }

    render(){
        //console.log("Parent render called");
        return(
            <div className="m-4 px-3">
                <div className="text-center font-semibold text-3xl">About Us</div>
                <div className="mt-2">
                    The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. The content for about us will be replaced here soon. 
                    <br/>about us. about us. about us. about us. about us. about us. about us. about us. about us. about us. about us. about us. about us. <br/>
                
                    <UserContext.Consumer>
                        {({loggedInUser}) => (
                            <span className="font-semibold mt-5">Logged In User Is :  {loggedInUser}</span>
                        )}
                    </UserContext.Consumer>
                </div>
                    
                <div className="flex flex-wrap m-4 justify-center">
                <UserFun name={"Nandini Hulsurkar"} mno={9663580578} eid={"nandinihulsurkar@gmail.com"} location={"Bangalore"} dob={"27 June 1986"} />
    
                <UserClass name={"Nandini Hulsurkar"} mno={9663580578} eid={"nandinihulsurkar@gmail.com"} location={"Bangalore"} dob={"27 June 1986"} />
                </div>
            </div>
        );
    }
}

/*const AboutUs = () => {
    const styleOne = {
        display : 'flex',
    };

    return(
        <div id="abourus-container">
            <h1>About Us</h1>
            <h5>about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page. about us page.about us page. about us page. about us page. about us page. about us page. about us page. about us page.about us page. about us page. about us page. about us page. about us page. about us page. about us page.about us page. about us page. about us page. about us page. about us page. about us page. about us page.about us page. about us page. about us page. about us page. about us page. about us page. about us page. </h5>
            <div style={styleOne}>
            <UserFun name={"Nandini Hulsurkar"} mno={9663580578} eid={"nandinihulsurkar@gmail.com"} location={"Bangalore"} dob={"27 June 1986"} />

            <UserClass name={"Nandini Hulsurkar"} mno={9663580578} eid={"nandinihulsurkar@gmail.com"} location={"Bangalore"} dob={"27 June 1986"} />
            </div>
        </div>
    );
}*/

export default AboutUs;