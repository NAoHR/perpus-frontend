import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/containers/Books.css";
import {FaStar} from "react-icons/fa";
import NoDisplay from "../components/NoDisplay";
import { useState } from "react";


function BookCard({book}){
    const {title, rating, image, author} = book
    return(
            <div className="book-card">
                <div className="bc-image" style={{
                    backgroundImage : `url(${image})`
                }}>
                    <div className="bc-rating b-white poppins">
                        <p className="c-orange">
                            <FaStar />
                        </p>
                        <p>
                            {rating}
                        </p>
                    </div>
                </div>
                <div className="bc-text">
                    <h3 className="poppins c-lblack bold">
                        {title.length > 38 ? `${title.slice(0,36)}...` : title}
                    </h3>
                    <p className="c-lblack poppins">
                        {author}
                    </p>
                </div>
            </div>
    )
}


function BookMapper({data}){
    if(data.length > 0){
        return data.map((v)=> {
            return <BookCard book={v} key={v.id} />
        })
    }
    return <NoDisplay message={"No Data To Be Displayed"} />
}
export default function Books({books}){
    const [filterBook,setFB] = useState(books);

    function filterText(v){
        const value = v.target.value;
        setFB(
            books.filter((v)=> {
                if(v.title.toLowerCase().indexOf(value) !== -1 || v.author.toLowerCase().indexOf(value) !== -1){
                    return v
                }
            })
        )
    }

    function filterSelect(v){
        const value = v.target.value;
        if(value === "all"){
            setFB(books)
        }else{
            setFB(
                books.filter((v)=> v.genre.indexOf(value) !== -1)
            )
        }
    }
    return (
        <>
        <Navbar />
        <section className="book">
            <div className="s-size card-wrap">
                <div className="search">
                    <div className="input-box round-it">
                        <input type="text" name="filter" className="poppins b-white c-orange bold" autoCorrect="false" placeholder="Cari disini" onChange={filterText} autoComplete="off" />
                    </div>
                    <div className="filter-box round-it">
                    <select name="cars" id="cars" form="carform" className="poppins c-white bold b-orange" onChange={filterSelect}>
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
            <BookMapper data={filterBook}/>
        </section>
        <Footer />
        </>
    )
}