
const restCardStyle = {
    backgroundColor: "#F0F0F0"
}

const RestorentCard = (props) => {   
    const {restData} = props;    
    return(
        <div className="restro-card" style={restCardStyle} >
            <img 
                className="restorent-logo" 
                alt="restorent logo here" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restData.info.cloudinaryImageId}
            />
            <h3>{restData.info.name}</h3>
            <h5>{restData.info.cuisines.join(", ")}</h5>
            <h5>{restData.info.avgRating} Stars</h5>
            <h5>Devivered in {restData.info.sla.deliveryTime} Mins</h5>
        </div>
    );
}

export default RestorentCard;