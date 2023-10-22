
import { useState } from "react";
import itsMe from "../images/the-logo.jpg";

const UserFun = (props) => {

    const [count1, setCount1] = useState(1);
    

    const {name, mno, eid, location, dob} = props;
    return(
        <div className="p-4 w-[320px] h-[460px] m-2 rounded-2xl bg-gray-100 hover:bg-red-100 text-center" >
            <div><img className="w-48 h-48 rounded-lg"  src={itsMe}></img></div>
            <div className="text-red-500 font-semibold mt-2">This is a Functional Component</div>
            <div className="mt-2 text-black-500 font-semibold">{name}</div>
            <div className="mt-2">{mno}</div>
            <div className="mt-2">{eid}</div>
            <div className="mt-2">{location}</div>
            <div className="mt-2">DOB : {dob}</div>

            <div className="mt-4">count1 : {count1} &nbsp;&nbsp;
                <button className="p-1 bg-red-400 rounded-lg" 
                    onClick={()=>{
                        const c1 = count1+1;
                        setCount1(c1);
                    }}
                >
                Count1 ++
                </button>&nbsp;&nbsp;

                <button className="p-1 bg-red-400 rounded-lg" 
                    onClick={()=>{
                        const c11 = count1 - 1;
                        setCount1(c11);
                    }}
                >Count1 --</button>
            </div>
        </div>
    );
}

export default UserFun;