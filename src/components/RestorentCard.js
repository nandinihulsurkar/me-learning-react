
const xxx = {
    
}

const RestorentCard = (props) => {   
    const {restData} = props;    
    return(
        <div className="flex flex-wrap w-[220px] h-[400px] m-2 rounded-2xl bg-gray-100 hover:bg-gray-200" >
            <img 
                className="p-2 w-[220px] h-[200px] rounded-2xl" 
                alt="restorent logo here" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData.info.cloudinaryImageId}
            />
            <span className="px-2 w-[220px] text-red-500 font-mono">{restData.info.name}</span>
            <span className="px-2 w-[220px] font-mono">{restData.info.avgRating} Stars</span>
            <span className="px-2 w-[220px] font-thin">Devivered in {restData.info.sla.deliveryTime} Mins</span>
            <span className="px-2 w-[220px] font-extralight">{restData.info.cuisines.join(", ")}</span>      
        </div>
    );
}

export default RestorentCard;