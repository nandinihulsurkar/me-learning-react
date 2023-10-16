import { SHIMMER_GRID } from "../utils/constants";

const Shimmer = () => {
    return(
        <div className="shimmer-container">
            <diV><img className="shimmer-card" src={SHIMMER_GRID} /></diV>
            <diV><img className="shimmer-card" src={SHIMMER_GRID} /></diV>
            <diV><img className="shimmer-card" src={SHIMMER_GRID} /></diV>
            <diV><img className="shimmer-card" src={SHIMMER_GRID} /></diV>
            <diV><img className="shimmer-card" src={SHIMMER_GRID} /></diV>            
        </div>
    );
}

export default Shimmer;