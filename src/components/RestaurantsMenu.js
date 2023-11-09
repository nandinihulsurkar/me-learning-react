import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantsMenuCategory from "./RestaurantsMenuCategory";
import { IMG_CDN_URL } from "../utils/constants";

import { useEffect, useState } from "react";

const RestaurantsMenu = () => {

    const { restaurantId } = useParams();
    const [vegOrNonveg, setVegOrNonveg] = useState("BOTH");
     
    const restaurantsMenu = useFetchRestaurantMenu(restaurantId, vegOrNonveg); 
    
    const [showIndex, setShowIndex] = useState(null);   

    if(restaurantsMenu === null) return <Shimmer />
    
    const {name, cuisines, city, areaName, avgRating, cloudinaryImageId} = restaurantsMenu?.cards[0]?.card?.card?.info;
    
    var categories = restaurantsMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
        c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(restaurantsMenu);
    
    return(
        <div className="pl-3 p-3 w-[70%] m-auto">            
                       
            <div className="flex p-2 bg-white">
                <div className="w-[20%] p-2">
                    <img className="w-40 h-28" src={IMG_CDN_URL+cloudinaryImageId}></img>
                </div>
                <div className="w-[80%] p-2">
                    <ul>
                        <li className="font-bold text-2xl text-red-500">{name}</li>
                        <li className="font-extralight">{cuisines.join(", ")}</li>
                        <li className="font-extralight">{areaName}, {city}</li>
                        <li className="text-green-700 font-semibold font-mono">{avgRating} Star Satings</li>
                    </ul>
                </div>                                
            </div>

            <div className="">
                <select className="p-1 w-40 h-8 rounded-lg bg-red-200 text-black" 
                    onChange={(e)=>{
                        setVegOrNonveg(e.target.value);
                    }} 
                >
                    <option value="BOTH">Veg & Non-Veg</option>
                    <option value="VEG">Veg Only</option>
                    <option value="NONVEG">Non-Veg Only</option>
                </select>
            </div>
                       
            {
                categories.map((cat, index) => (
                    <RestaurantsMenuCategory 
                        key={cat?.card?.card.title} 
                        catData={cat.card?.card} 
                        shCatItems={index == showIndex ? true : false} 
                        setShowIndex={() => setShowIndex(index)}                                                                                 
                    />
                ))
            }

        </div>
    );
}

export default RestaurantsMenu;