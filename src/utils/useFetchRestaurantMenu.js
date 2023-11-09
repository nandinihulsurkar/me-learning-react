import { useState, useEffect } from "react";
import { RESTAURANT_MENU }from "./constants";

const useFetchRestaurantMenu = (restId, vegOrNonveg) => {    
    const [restaurantMenu, setRrestaurantMenu] = useState(null);

    useEffect(()=>{
        fetchRestaurantMenu();
    }, [vegOrNonveg]);

    const fetchRestaurantMenu = async () => {
        
        const data = await fetch(RESTAURANT_MENU + restId);
        const jsonData = await data.json();
        
        if(vegOrNonveg == "VEG" || vegOrNonveg == "NONVEG")
        {
            var vegOrNonvegRec = jsonData.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (vrOne)=> vrOne?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );            
            
            vegOrNonvegRec.forEach((e, index) => {                
                var itemCards = e.card?.card?.itemCards;                
                var newItemCards = itemCards.filter(
                    (requestedOnly)=>requestedOnly.card.info.itemAttribute.vegClassifier == vegOrNonveg
                );                
                e?.['card']['card']['itemCards'] = newItemCards;
            });            
        }

        setRrestaurantMenu(jsonData.data);  
    };
    //console.log(restaurantMenu);
    return restaurantMenu;
}

export default useFetchRestaurantMenu;