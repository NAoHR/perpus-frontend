import { useEffect } from "react";
import { useState } from "react";
import {FaTimes,FaBars} from "react-icons/fa";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom"
import "../styles/components/Navbar.css";

export default function Navbar(){
    const [isNavbarShowed,setINS] = useState(false);
    const [nowPath,setNP] = useState(null);
    const [isBlur,setIB] = useState(false);

    const path = useLocation();

    useEffect(()=>{
        document.addEventListener("scroll", function(){
            if(window.pageYOffset >= 75){
                setIB(true)
            }else{
                setIB(false);
            }
        })
    },[])

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
        <div className="blur-nav" style={{
            background: `rgba(255,255,255,${isBlur ? "0.6" : "0"})`,
            transition: ".5s"
        }}></div>
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
                    <Link to="/">
                        <h4 className="csc-text" style={{
                        textDecoration : `${nowPath === "/" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/" ? "bold" : "600"}`
                        }}>
                            home
                        </h4>
                    </Link>
                </div>
                <div className="cs-content">
                    <Link to="/books">
                        <h4 className="csc-text" style={{
                        textDecoration : `${nowPath === "/books" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/books" ? "bold" : "600"}`
                        }}>
                            books
                        </h4>
                    </Link>
                </div>
                <div className="cs-content">
                    <Link to="/about">
                        <h4 className="csc-text" style={{
                        textDecoration : `${nowPath === "/about" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/about" ? "bold" : "600"}`
                    }}>
                            about
                        </h4>
                    </Link>
                </div>
                <div className="cs-content">
                    <Link to="/guide">
                        <h4 className="csc-text" style={{
                        textDecoration : `${nowPath === "/guide" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/guide" ? "bold" : "600"}`
                    }}>
                            guide
                        </h4>
                    </Link>
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
                <Link to="/">
                    <h3 className="ned-text" style={{
                        textDecoration : `${nowPath === "/" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/" ? "bold" : "600"}`
                    }}>
                        home
                    </h3>
                </Link>
            </div>
            <div className="ne-detail">
                <Link to="/books">
                    <h3 className="ned-text" style={{
                        textDecoration : `${nowPath === "/books" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/books" ? "bold" : "600"}`
                    }}>
                        books
                    </h3>
                </Link>
            </div>
            <div className="ne-detail">
                <Link to="/about">
                    <h3 className="ned-text" style={{
                        textDecoration : `${nowPath === "/about" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/about" ? "bold" : "600"}`
                    }}>
                        about
                    </h3>
                </Link>
            </div>
            <div className="ne-detail">
                <Link to="/guide">
                    <h3 className="ned-text" style={{
                        textDecoration : `${nowPath === "/guide" ? "underline black" : ""}`,
                        fontWeight : `${nowPath === "/guide" ? "bold" : "600"}`
                    }}>
                        guide
                    </h3>
                </Link>
            </div>
        </div>
        </>
    )
}