
import { Link } from "react-router-dom";
import RestorentCard, {ForAggregatedDiscount} from "./RestorentCard";
import Shimmer from "./Shimmer";

import { useState, useEffect, useContext } from 'react';
import UserContext from "../utils/contexts/UserContext";
import MyContext from "../utils/contexts/MyContext";

const Body = () => {

    const [searchText, setSearchText] = useState(" ");

    const [newRestroDataList, setNewRestroDataList] = useState([]);
    const [filteredRestroList, setFilteredRestroList] = useState([]);
    /*
    * NOTE what does the above line of code is doing for US?
    * useState() basically returns an array in which 
    * newRestroDataList = array[0] AND setNewRestroDataList = array[1]
    * So the single line of above code can also be written as
    * arr = useState(restroDataList);
    * newRestroDataList = arr[0]; setNewRestroDataList = arr[1];
    */
    //console.log("In Body - restro list == ");
    //console.log(newRestroDataList);

    useEffect(() => {
        fetchData();
    }, []);
    

    /*
     * useEffect takes 2 Arguments.
     * The 1st Argument is a call back function AND the 2ns argument is dependency array
     * IMP: The call back function is called AFTER the component is rendered
     */
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setNewRestroDataList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestroList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const AggregatedDiscounts = ForAggregatedDiscount(RestorentCard);

    const { loggedInUser, setLnUserInfo } = useContext(UserContext);
   
    const myData = useContext(MyContext);
    const {myName, setMyInfo} = useContext(MyContext);
    
    //Conditional rendering
    return newRestroDataList.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex my-8 px-5 justify-center">
                <div>
                    <input className="border border-black border-solid mr-3 w-64 h-8" type="text" value={searchText} 
                        onChange = {(e)=>{
                            setSearchText(e.target.value);                            
                        }} >
                    </input>
                    <button className="px-4 h-8 text-white bg-red-400 rounded-md mr-4"
                        onClick={() => {
                            const searchedRestroList = newRestroDataList.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestroList(searchedRestroList);
                            //console.log(searchedRestroList.length);
                        }}
                    >Search</button>

                    <button 
                        className="px-4 h-8 text-white bg-red-400 rounded-md mr-4" 
                        onClick={() => {
                            const filteredRestList = newRestroDataList.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredRestroList(filteredRestList);
                        }}
                    >
                    Top Rated Restaurants
                    </button>
                    
                    <label>Username : </label>
                    <input className="border border-black border-solid mr-3 w-40 h-8 p-2" 
                        type="text" value={loggedInUser}
                        onChange={(e) => {
                            //hsetLnUserInfo();
                            const uuInfo = {
                                name: e.target.value,                                
                            };
                            setLnUserInfo(uuInfo)
                            //console.log(e.target.value);
                        }}
                    />                    
                </div>
                
            </div>
            <div className="flex flex-wrap mx-5 justify-center">                
                {
                    filteredRestroList.map((resdata) => (
                        <Link key={resdata.info.id} to={"/restaurant/"+resdata.info.id}>                            
                            {
                                resdata.info.aggregatedDiscountInfoV3 ? <AggregatedDiscounts restData={resdata} /> : <RestorentCard restData={resdata} />
                            }
                        </Link>
                    ))
                    //NOTE the key attribute in the component is given as it may generate Warning.
                    //WE can also give index as a key here. but React saya that shoud not use index as keys.
                }           
            </div>
            <div className="mt-5 px-5">
                <h1 className="cursor-pointer text-red-500 font-semibold text-lg" onClick={() => {
                    const myInfo = {
                        myName: "Nandini Hulsurkar",
                        mno: "1231234560",
                        eid: "nandini@gmail.com",
                        myHobbies: "watch hindi movies & web series, listning to music & spend quality time with my kids and family."
                    };
                    setMyInfo(myInfo);
                }}>
                    Click Here :-)
                </h1>
                <div>
                    <h1 className="font-semibold">This data is coimg from Context with the default values.</h1>
                    <span>Hi, My Name is {myData.myName}. I Love to {myData.myHobbies}. You can 📲 me on {myData.mno} OR drop an 📧 to {myData.eid} </span>
                </div>
            </div>
        </div>
    );
}

export default Body;