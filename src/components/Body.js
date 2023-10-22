
import { Link } from "react-router-dom";
import RestorentCard from "./RestorentCard";
import Shimmer from "./Shimmer";

import { useState, useEffect } from 'react';

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
    
    //Conditional rendering
    return newRestroDataList.length === 0 ? <Shimmer /> : (
        <div className="">
            <div className="flex my-8 px-5">
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
                            console.log(searchedRestroList.length);
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
                </div>
                
            </div>
            <div className="flex flex-wrap mx-5 items-center">                
                {
                    filteredRestroList.map((resdata) => (
                        <Link key={resdata.info.id} to={"/restaurant/"+resdata.info.id}><RestorentCard restData={resdata} /></Link>
                    ))
                    //NOTE the key attribute in the component is given as it may generate Warning.
                    //WE can also give index as a key here. but React saya that shoud not use index as keys.
                }           
            </div>
        </div>
    );
}

export default Body;