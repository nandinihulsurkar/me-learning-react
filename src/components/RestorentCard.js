
import theGreenStar from "../images/the-star.png";

const RestorentCard = (props) => {   
    const {restData} = props;    
    return(
        <div className="flex flex-wrap w-[240px] h-[400px] m-2 rounded-2xl bg-gray-100 hover:bg-gray-200" >
            <img 
                className="p-2 w-[240px] h-[200px] rounded-3xl" 
                alt="restorent logo here" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData.info.cloudinaryImageId}
            />
            <span className="px-2 w-[220px] text-red-500 ">{restData.info.name}</span>
            <span className="px-2 w-[220px] font-mono flex">
                <img className="w-5 h-5 mr-1" src={theGreenStar}></img>
                {restData.info.avgRating}
                <span className="ml-4">{restData.info.sla['slaString']}</span>
            </span>
            <span className="px-2 w-[220px] font-thin">Devivered in {restData.info.sla.deliveryTime} Mins</span>
            <span className="px-2 w-[220px] font-extralight">{restData.info.cuisines.join(", ")}</span>      
        </div>
    );
};

/** ... is a spread operator :  */
export const ForAggregatedDiscount = (RestorentCard) => {
    return (props) => {
        const { restData } = props;        
        return(
            <div className="">
                <label className="absolute mt-1 ml-3 p-1 text-xl font-semibold text-white bg-red-400 rounded-lg">{restData.info.aggregatedDiscountInfoV3['header'] +" "+ restData.info.aggregatedDiscountInfoV3['subHeader']}</label>                
                <RestorentCard {...props} />
            </div>
        );
    }
};

export default RestorentCard;