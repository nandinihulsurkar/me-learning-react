import contactImg from "../images/cu-contact.png"
import complaintImg from "../images/cu-complaint.png";
import preOrderImg from "../images/cu-pre-order.png";
import orderEnqImg from "../images/cu-order-enquiry.png";

import MyContext from "../utils/contexts/MyContext";
import { useContext } from "react";

const ContactUs = () => {

    const conUsData = [
        {
            "id": 1,
            "image": contactImg,
            "heading": "Contact Usdddd",
            "content": "#1024 West Chord Road, Near Police station, Chandrs Layout Bangalore 560040",
            "email": "abcd.contactus@gmail.com",
            "cno": 9663663663,
        },
        {
            "id": 2,
            "image": orderEnqImg,
            "heading": "Order Enquiry ",
            "content": "Your order has not reached you yet? No worries, the food may reach you any time shortly.",
            "email": "abcd.orderenquiry@gmail.com",
            "cno": 9739739739,
        },
        {
            "id": 3,
            "image": complaintImg,
            "heading": "For Complaints",
            "content": "Any Complaints? Not to worry. We are just a call away from you. Fee free to call us or you can even email us.",
            "email": "abcd.contactus@gmail.com",
            "cno": 9663663663,
        },
        {
            "id": 4,
            "image": preOrderImg,
            "heading": "For Pre Order",
            "content": "For pre ordering the food, you may contact to the below mentioned contact details. ",
            "email": "abcd.preorder@gmail.com",
            "cno": 9009000111,
        },
    ];   

    const myData = useContext(MyContext);
    
    return(
        <div className="m-4 px-3 min-h-[430px] ">
            <div className="text-center font-semibold text-3xl">Contact Us</div>
            <div className="flex flex-wrap m-4">
            {                
                conUsData.map((res) => (
                    <div key={res.id} className="flex flex-wrap p-4 w-[270px] h-[400px] m-2 rounded-2xl bg-gray-100 hover:bg-red-100 justify-center" >
                        <img className="w-32 h-32" src={res.image} ></img>
                        <span className="font-semibold text-xl">{res.heading}</span>
                        <span className="font-extralight">{res.content}</span>
                        <span className="font-extralight">{res.email}</span>
                        <span className="font-extralight">{res.cno}</span>
                    </div>
                ))                
            }                   
            </div>

            <div className="m-4">
            <h1 className="font-semibold">This data is coimg from Context with the default values.</h1>
                    <span>Hi, My Name is {myData.myName}. I Love to {myData.myHobbies}. You can 📲 me on {myData.mno} OR drop an 📧 to {myData.eid} </span>
            </div>           
        </div>
    );
}

export default ContactUs;