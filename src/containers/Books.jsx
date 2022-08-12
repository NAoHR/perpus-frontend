import Navbar from "../components/Navbar";
import "../styles/containers/Books.css";
export default function Books(){
    return (
        <>
        <Navbar />
        <section className="book">
            <div className="s-size card-wrap">
                <div className="search">
                    <div className="input-box round-it">
                        <input type="text" name="filter" className="poppins b-white c-orange bold" autoCorrect="false" placeholder="Cari disini"/>
                        
                    </div>
                    <div className="filter-box round-it">
                    <select name="cars" id="cars" form="carform" className="poppins c-white bold b-orange">
                        <option value="all">All</option>
                        <option value="life">life</option>
                        <option value="science">science</option>
                        <option value="wew">wew</option>
                    </select>
                    </div>
                </div>
            </div>
        </section>
        <section className="books s-size flex">

        </section>
        </>
    )
}