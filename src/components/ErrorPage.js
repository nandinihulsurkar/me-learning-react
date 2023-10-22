
import { useRouteError } from "react-router-dom";

import errorImg from "../images/error.png";

const ErrorPage = () => {
    const errorData = useRouteError();
    //console.log(errorData);
    return(
        <div id="page-not-found">
            <h3>{errorData.status} : {errorData.statusText}</h3>
            <img className="pageNF-img" src={errorImg}></img>            
        </div>
    );
}

export default ErrorPage;