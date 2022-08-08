import { useEffect } from "react";
import { useState } from "react";
import {FaTimes,FaBars} from "react-icons/fa";
import {useLocation} from "react-router-dom"
import "../styles/components/Navbar.css";

export default function Navbar(){
    const [isNavbarShowed,setINS] = useState(false);
    const [nowPath,setNP] = useState(null);

    const path = useLocation();

    useEffect(()=>{
        const expand = document.getElementsByClassName("nav-expand")[0];

        if(isNavbarShowed){
            expand.style = "padding:8px;height:200px;transition:.5s"            
        }else{
            expand.style = "padding: 0px; height:0px;transition:.5s"
        }
    },[isNavbarShowed])

    useEffect(()=>{
        setNP(path.pathname)
    },[path.pathname])
    return (
        <>
        <nav className="nav-main">
            <div className="left-side nm-content flex">
                <div className="toggle f-align-all flex"  onClick={()=> setINS(!isNavbarShowed)}>
                    <h2 className="toggle-icons c-lblack">
                        {isNavbarShowed ? <FaTimes /> : <FaBars />}
                    </h2>
                </div>
                <div className="logo flex">
                    <img src="https://upload.wikimedia.org/wikipedia/id/e/ed/Nyan_cat_250px_frame.PNG" alt="temp_image" />
                </div>
            </div>
            <div className="center-side flex c-black poppins f-align-all">
                <div className="cs-content">
                    <h4 className="csc-text" style={{
                    textDecoration : `${nowPath === "/" ? "underline black" : ""}`
                }}>
                        home
                    </h4>
                </div>
                <div className="cs-content">
                    <h4 className="csc-text" style={{
                    textDecoration : `${nowPath === "/books" ? "underline black" : ""}`
                }}>
                        books
                    </h4>
                </div>
                <div className="cs-content">
                    <h4 className="csc-text" style={{
                    textDecoration : `${nowPath === "/about" ? "underline black" : ""}`
                }}>
                        about
                    </h4>
                </div>
                <div className="cs-content">
                    <h4 className="csc-text" style={{
                    textDecoration : `${nowPath === "/guide" ? "underline black" : ""}`
                }}>
                        guide
                    </h4>
                </div>
            </div>
            <div className="right-side nm-content">
                <div className="logo flex">
                    <img src="/smkn26_logo.png" alt="logo smk 26" />
                </div>
            </div>
        </nav>
        <div className="nav-expand c-lblack poppins b-white">
            <div className="ne-detail">
                <h3 className="ned-text" style={{
                    textDecoration : `${nowPath === "/" ? "underline black" : ""}`
                }}>
                    home
                </h3>
            </div>
            <div className="ne-detail">
                <h3 className="ned-text">
                    books
                </h3>
            </div>
            <div className="ne-detail">
                <h3 className="ned-text">
                    about
                </h3>
            </div>
            <div className="ne-detail">
                <h3 className="ned-text">
                    guide
                </h3>
            </div>
        </div>
        </>
    )
}