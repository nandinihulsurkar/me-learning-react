import { useDispatch, useSelector } from "react-redux";
import theEmptyCartImg from "../images/empty-cart.png";
import { IMG_CDN_URL } from "../utils/constants";
import vegSymb from "../images/veg.png";
import nonVegSymb from "../images/non-veg.png";

import { emptyTheCart, removeFromCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store)=> store.cart.items);
    //console.log(cartItems);

    const dispatcher = useDispatch();
    const handleEmptyCart = () => {
        dispatcher( emptyTheCart() );
    }

    const handleRemoveFromCart = (indexId) => {
        console.log("Remove this idddd = "+indexId);
        dispatcher( removeFromCart(indexId) );
    }

    return(
        <div className="mt-10 mx-10 w-[70%] bg-red-50 justify-center items-center ">
            
            <div className="mb-5 h-10 flex justify-between">
                <div className="mt-4 ml-3 font-semibold text-red-500 text-2xl font-mono float-left">Cart Details</div>
                <div className="mt-4 mr-3">
                    { cartItems.length > 0 ?             
                    <button className="p-1 bg-red-500 text-white rounded-lg cursor-pointer float-right" 
                        onClick={() => handleEmptyCart()}
                    >
                        Empty Cart
                    </button>
                    :
                    ""
                    }
                </div>              
            </div>
            
            { 
                cartItems.length > 0 ? cartItems.map((recItem, index) => (
                    <div key={recItem.card.info.id} className="flex p-2 my-6 bg-white border-b-2" >         
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
                                    onClick={() => handleRemoveFromCart(index)}
                                > Remove </button>
                            </div>
                            <img className="w-32 h-32 rounded-lg" src={ IMG_CDN_URL+recItem.card.info.imageId }></img>
                        </div>                                                  
                    </div>
                ))  : 
                <div className="flex w-[100%] p-2 mb-6 bg-white border-b-2 items-center" >
                    <div className="w-[100%] p-2">                     
                        <img className="" src={theEmptyCartImg}></img>            
                    </div>
                </div>         
            }

        </div>
    )
}

export default Cart;