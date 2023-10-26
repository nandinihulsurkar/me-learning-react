
import { useState } from "react";
import RestaurantsMenuCategoryItems from "./RestaurantsMenuCategoryItems";

const RestaurantsMenuCategory = ({ catData, shCatItems, setShowIndex }) => {
    
    const showHideCatItemsHere = () =>{
        console.log("show or hide === "+ shCatItems);        
        setShowIndex();     
    }

    const abcd = () => {
        console.log("funct abcd");
    }

    return(
        <div className="mt-5 border-gray-200 border-x-2">        
            
            <div className="text-black bg-gray-200 p-2 font-bold mb-1 hover:cursor-pointer shadow-lg" onClick={() => { showHideCatItemsHere(); abcd();}} >
                <span>{catData.title} ({catData?.itemCards?.length})</span>
                <span className="float-right">🔻</span>
            </div>
            
            {shCatItems && <RestaurantsMenuCategoryItems key={catData.id} catItems={catData.itemCards} />}       

        </div>
    )
};

export default RestaurantsMenuCategory;

