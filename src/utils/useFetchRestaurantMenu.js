import { useState, useEffect } from "react";
import { RESTAURANT_MENU }from "./constants";

const useFetchRestaurantMenu = (restId) => {

    const [restaurantMenu, setRrestaurantMenu] = useState(null);

    useEffect(()=>{
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        const data = await fetch(RESTAURANT_MENU + restId);
        const jsonData = await data.json();

        setRrestaurantMenu(jsonData.data);
    };
    
    return restaurantMenu;
}

export default useFetchRestaurantMenu;