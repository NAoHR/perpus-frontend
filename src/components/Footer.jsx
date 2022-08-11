import "../styles/components/footer.css";
import {FaInstagramSquare, FaPhoneSquareAlt, FaEnvelope} from "react-icons/fa";

export default function Footer(){
    return(
        <>
        <footer className="b-dblue">
            <div className="footer-main poppins">
                <div className="flogo fcontent">
                    <img src="/logo_perpus_white.png" alt="" />
                </div>
                <div className="ftext c-white fcontent">
                    <h2 className="ftext-title bold">
                        Lorem Ipsum
                    </h2>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                </div>
                <div className="ftext c-white fcontent">
                    <h2 className="ftext-title bold">
                        Lorem Ipsum
                    </h2>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                    <h4 className="ftext-content">
                        lorem ipsum dolor
                    </h4>
                </div>
                <div className="ftext c-white fcontent">
                    <h2 className="ftext-title">
                        Lorem Ipsum
                    </h2>
                    <div className="ftext-icon">
                        <h3>
                            <FaInstagramSquare />
                        </h3>
                        <h3>
                            <FaPhoneSquareAlt />
                        </h3>
                        <h3>
                            <FaEnvelope />
                        </h3>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}