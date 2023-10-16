
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
        <div className="body-container">
            <div className="search-bar">
                <div>
                    <input className="search-text-box" type="text" value={searchText} 
                        onChange = {(e)=>{
                            setSearchText(e.target.value);                            
                        }} >
                    </input>
                    <button className="filter_btns"
                        onClick={() => {
                            const searchedRestroList = newRestroDataList.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestroList(searchedRestroList);
                            console.log(searchedRestroList.length);
                        }}
                    >Search</button>
                </div>
                <button 
                    className="filter_btns" 
                    onClick={() => {
                        const filteredRestList = newRestroDataList.filter(
                            (res) => res.info.avgRating > 4.2
                        );
                        setFilteredRestroList(filteredRestList);
                    }}
                >
                Top Rated Restaurants
                </button>
            </div>
            <div className="restro-container">                
                {
                    filteredRestroList.map((resdata) => (
                        <RestorentCard key={resdata.info.id} restData={resdata} />
                    ))

                    //NOTE the key attribute in the component is given as it may generate Warning.
                    //WE can also give index as a key here. but React saya that shoud not use index as keys.
                }           
            </div>
        </div>
    );
}

export default Body;