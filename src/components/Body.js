
import { Link } from "react-router-dom";
import RestorentCard, {ForAggregatedDiscount} from "./RestorentCard";
import Shimmer from "./Shimmer";

import { useState, useEffect, useContext } from 'react';
import UserContext from "../utils/contexts/UserContext";
import MyContext from "../utils/contexts/MyContext";
import MyDetails from "./MyDetails";

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
    //console.log(filteredRestroList);

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
    const {myInfo, setMyInfo} = useContext(MyContext);

    const [clickMeCount, setClickMeCount] = useState(0);
    useEffect(()=>{
        setClickMeCount(0);

        const myD = {
            myName: "Default UseR",
            mno: "1234567891",
            eid: "default@gmail.coM",
            myHobbies: "be default all the timee :-)",
        };
        setMyInfo(myD);   
    },[]);
  
    //Conditional rendering
    return newRestroDataList.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex my-8 px-5 justify-center">
                <div>
                    <input className="border border-black border-solid mr-3 p-2 w-52 h-8" type="text" value={searchText} 
                        onChange = {(e)=>{
                            setSearchText(e.target.value);   
                        }} >
                    </input>
                    <button className="px-4 h-8 text-white bg-red-400 rounded-md mr-4"
                        onClick={() => {
                            const searchedRestroList = newRestroDataList.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            searchText == " " ? setFilteredRestroList(newRestroDataList) : setFilteredRestroList(searchedRestroList);
                            console.log(searchText+" - "+searchedRestroList.length);

                            /*if(searchText == " ")                                
                                setFilteredRestroList(newRestroDataList);
                            else{
                                const searchedRestroList = newRestroDataList.filter(
                                    (res) => res.info.name.toLowerCase() == searchText.toLowerCase()// console.log(res.info.name.toLowerCase()+"  ===? "+searchText.toLowerCase()) //
                                );
                                console.log(searchedRestroList);
                                setFilteredRestroList(searchedRestroList);
                            }*/
                        }}
                    >Search</button>

                    <select className="p-1 h-9 bg-red-400 text-white mr-4 rounded-md"  
                        onChange={(e)=>{
                            if(e.target.value == "Top Rated Restaurants"){
                                const newList = newRestroDataList.filter(
                                    (res)=> res.info.avgRating > 4.3
                                );
                                setFilteredRestroList(newList);
                            }
                            else if(e.target.value == "Del within 20 Mins"){
                                console.log("Case : Del within 20 Mins");
                                const delList = newRestroDataList.filter(
                                    (res)=> res.info.sla['deliveryTime'] <= 20
                                );
                                setFilteredRestroList(delList);
                            }
                            else if(e.target.value=="1K+ Ratings"){
                                const k1Ratings = newRestroDataList.filter(
                                    (res)=> res.info.totalRatingsString.includes("K+")
                                );
                                setFilteredRestroList(k1Ratings);
                            }
                            else if(e.target.value=="Open For Now"){
                                const openList = newRestroDataList.filter(
                                    (res)=> res.info.avgRating.isOpen ? res : []
                                );
                                setFilteredRestroList(openList);
                            }
                            else
                                setFilteredRestroList(newRestroDataList);
                        }} 
                    >
                        <option value="">-- Quick Search --</option>
                        <option value="Top Rated Restaurants">Top Rated Restaurants</option>
                        <option value="Del within 20 Mins">Del within 20 Mins</option>
                        <option value="1K+ Ratings">1K+ Ratings</option>
                        <option value="Open For Now">Open For Now</option>
                    </select>                    
                    
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
                    const cmc = clickMeCount+1;                    
                    (cmc<=4) ? setClickMeCount(cmc) : setClickMeCount(0);
                    
                    switch(cmc){
                        case 1: var myInfo = {
                            myName: "Nandini Hulsurkar",
                            mno: "1231234560",
                            eid: "nandini@gmail.com",
                            myHobbies: "watch hindi movies & web series, listning to music & spend quality time with my kids and family."
                        };
                        break;
                        case 2: var myInfo = {
                            myName: "Jagdish Malgar",
                            mno: "0104198400",
                            eid: "jacks@gmail.com",
                            myHobbies: " play cricket and snooker, travel wth friends and family"
                        };
                        break;
                        case 3: var myInfo = {
                            myName: "Ansh Malgar",
                            mno: "0602201500",
                            eid: "ansh@gmail.com",
                            myHobbies: " play football, draw and irritate my mumma and brother :-)"
                        };
                        break;
                        case 4: var myInfo = {
                            myName: "Druva Malgar",
                            mno: "0802202100",
                            eid: "druvamonster@gmail.com",
                            myHobbies: " Play play play and just play all the time :-)"
                        };
                        break;
                        default: var myInfo = {
                            myName: "Default User",
                            mno: "1234567890",
                            eid: "default@gmail.com",
                            myHobbies: "be default all the time :-)"
                        };

                    }                   
                    setMyInfo(myInfo);
                }}>
                Click Me
                </h1>{clickMeCount}
                
               
                <MyDetails theData={myData} />
            </div>
        </div>
    );
}

export default Body;