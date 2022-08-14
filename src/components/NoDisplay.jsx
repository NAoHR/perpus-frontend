import {FaFrown} from "react-icons/fa";
import "../styles/components/nodisplay.css";

export default function NoDisplay({message}){
    return (
    <div className="no-display poppins">
        <h2 className="nd-text nd-icon c-orange">
            <FaFrown />
        </h2> 
        <h2 className="nd-text c-lblack">
            {message}
        </h2>
    </div>
    )
}