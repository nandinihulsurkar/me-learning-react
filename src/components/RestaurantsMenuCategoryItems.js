import { IMG_CDN_URL } from "../utils/constants";
import vegSymb from "../images/veg.png";
import nonVegSymb from "../images/non-veg.png";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const RestaurantsMenuCategoryItems = ({catItems}) => {
    
    //const cartItems = useSelector((store) => store.cart.items);
    
    const dispatch = useDispatch();
    const handleAddToCart = (itemRec) => {
        //console.log(itemRec);
        dispatch( addToCart(itemRec) );
    }

    return(
        <div>
            { 
                catItems.length > 0 ? catItems.map((recItem) => (
                    <div key={recItem.card.info.id} className="flex p-2 mb-6 bg-white border-b-2" >         
                        <div className="w-[80%] p-2">                     
                            <ul>                                    
                                {                                    
                                    recItem.card.info.itemAttribute.vegClassifier==="VEG" ? <li><img className="w-4 h-4" src={vegSymb}></img></li> : <li><img className="w-4 h-4" src={nonVegSymb}></img></li>
                                }
                                <li className="font-semibold text-sm">{recItem.card.info.name}</li>
                                <li className="font-mono">₹{recItem.card.info.price/100}</li>
                                <li className="mt-3 font-extralight text-gray-400">{recItem.card.info.description}</li>                                                                    
                            </ul>            
                        </div>
                        <div className="w-[20%] p-2 ">                            
                            <div className="absolute">
                                <button className="px-5 py-1 bg-white text-red-500 font-semibold rounded-lg mt-24  ml-8"
                                    onClick={() => handleAddToCart(recItem)}
                                > Add </button>
                            </div>
                            <img className="w-32 h-32 rounded-lg" src={ IMG_CDN_URL+recItem.card.info.imageId }></img>
                        </div>                                                  
                    </div>
                ))  : 
                <div className="flex p-2 mb-6 bg-white border-b-2" >
                    <div className="w-[100%] p-2">                     
                        <ul>
                            <li className="font-semibold text-sm">No items to display..</li>
                        </ul>            
                    </div>
                </div>         
            }
        </div>
    );

}

export default RestaurantsMenuCategoryItems;