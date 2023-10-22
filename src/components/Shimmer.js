import shimmerLoadingImage from "../images/loading-state-shimmer.gif";

const Shimmer = () => {
    return(
        <div className="flex m-10 h-96">
            <div className="w-96 h-40"><img src={shimmerLoadingImage} /></div>
            <div className="w-96 h-40"><img src={shimmerLoadingImage} /></div>
            <div className="w-96 h-40"><img src={shimmerLoadingImage} /></div>
            <div className="w-96 h-40"><img src={shimmerLoadingImage} /></div>
            <div className="w-96 h-40"><img src={shimmerLoadingImage} /></div>                       
        </div>
    );
}

export default Shimmer;