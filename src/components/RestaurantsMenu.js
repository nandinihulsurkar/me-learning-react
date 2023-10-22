import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";

const RestaurantsMenu = () => {

    const restaurantId = useParams();
    console.log(restaurantId);

    const restaurantsMenu = useFetchRestaurantMenu(restaurantId);
    console.log(restaurantsMenu);

    return(
        <div id="the_rest_menu_container">
            <div id="rm_rest_details">
                <div>details</div>
                <div>image</div>
            </div>
            <div id="rm_veg_only">
                Veg only button
            </div>
            <div id="rm_recommended_details">
                Restorent recommended item  details will come here
            </div>
        </div>
    );
}

export default RestaurantsMenu;