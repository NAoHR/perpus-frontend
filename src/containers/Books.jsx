import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/containers/Books.css";
import {FaStar} from "react-icons/fa";


function BookCard(){
    return(
            <div className="book-card">
                <div className="bc-image">
                    <div className="bc-rating b-white poppins">
                        <p className="c-orange">
                            <FaStar />
                        </p>
                        <p>
                            4.9
                        </p>
                    </div>
                </div>
                <div className="bc-text">
                    <h3 className="poppins c-lblack bold">
                        Lorem Ipsum Dolor sit amet constrectur
                    </h3>
                    <p className="c-lblack poppins">
                        lorem ipsum dolor
                    </p>
                </div>
            </div>
    )
}
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
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
        </section>
        <Footer />
        </>
    )
}