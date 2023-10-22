
import React from "react";

import itsMe from "../images/its-me.jpg";

class UserClass extends React.Component{

    constructor(props)
    {
        super(props);

        this.state = {
            count1: 1,           
        }
    }

    async componentDidMount(){
        const userJson = await fetch("https://api.github.com/users/nandinihulsurkar");

        const userData = userJson.json();

        console.log(userData); 

        this.setState({
            userInfo: userData,
        })

        console.log(this.state.userInfo); 
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }

    render(){
        //console.log("Child render called");
        const {name, mno, eid, location, dob} = this.props;
        const {count1} = this.state;

        return(
            
            <div className="p-4 w-[320px] h-[460px] m-2 rounded-2xl bg-gray-100 hover:bg-red-100 text-center " >
                <div className="justify-center"><img className="w-48 h-48 rounded-lg" src={itsMe}></img></div>
                <div className="text-red-500 font-semibold mt-2">This is a Class Component</div>
                <div className="mt-2 text-black-500 font-semibold">{name}</div>
                <div className="mt-2 ">{mno}</div>
                <div className="mt-2 ">{eid}</div>
                <div className="mt-2 ">{location}</div>
                <div className="mt-2 ">DOB : {dob}</div>

                <div className="mt-4 ">Count1 : {count1} &nbsp;&nbsp;
                <button className="p-1 bg-red-400 rounded-lg"
                    onClick={()=>{
                        this.setState({
                            count1: this.state.count1 + 1,
                        });
                    }}
                >
                Count1 ++
                </button> &nbsp;&nbsp;
                <button className="p-1 bg-red-400 rounded-lg" 
                    onClick={()=>{
                        this.setState({
                            count1: this.state.count1 - 1,
                        });
                    }}
                >
                Count1 --
                </button>
                </div>
            </div>
        );
    }
}

export default UserClass;