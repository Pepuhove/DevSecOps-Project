
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";


function Footer(){
    return(
        <footer className="ftr">
            <div className="footer">
                <h2>THABANG ARTZ</h2>
            <ul>
                <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>
                <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
                <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                <hr />
            </ul>
            </div>
         

            <div className="social-links">
                {/* Social Media Links */}
                <a href="https://facebook.com/fanuel.mutemasango/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaFacebook />
                </a>
                <a href="https://wa.me/+27792889816" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FaWhatsapp />
                </a>
                <a href="mailto:fanuelmutemasango@gmail.com" className="social-icon">
                    <FaEnvelope />
                </a>
            </div>

            <div className="footer-bottom">
                <p>&copy; Thabang Artz PTY Ltd. <br /> Powered and secured by <a href="https://www.biblegateway.com/passage/?search=Revelation%2010%3A7&version=KJV">REV 10:7</a></p>
            </div>

        </footer>
    );
}
export default Footer;