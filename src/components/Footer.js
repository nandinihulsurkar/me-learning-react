
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
    return(
        <div id="footer">
            <div className="left-footer">
                <img className="footer-img" src={LOGO_URL} />
            </div>
            <div className="right-footer">
                I want you to know that your hard work, dedication, and passion for teaching are truly appreciated. Thanks a lot for making this Namaste React. I am able to learn react confidently now. Thanks again.
            </div>            
        </div>
    );
}

export default Footer;