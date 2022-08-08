import Navbar from "../components/Navbar";
import "../styles/containers/Home.css";

export default function Home(){
    return (
        <>
        <Navbar />
        <section className="opening-image">
            <div className="cover-white">
                <div className="align-it">
                    <div className="opening-text">
                        <h2 className="ot-title bebas c-black">
                            Lorem Ipsum Dolor
                        </h2>
                        <div className="ot-para poppins c-black">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam deserunt fugiat exercitationem eius impedit inventore optio aperiam? Corrupti iste veritatis, dolore pariatur eos laborum a nisi, molestiae fugiat labore tempore.
                        </div>
                        <span className="ot-explore bebas c-white b-dblue">
                            Cari buku
                        </span>
                    </div>
                </div>
            </div>
        </section>
        <section className="welcoming">
            <h2 className="w-title poppins c-black t-center">
                Kata Sambutan
            </h2>
            <p className="w-para poppins c-black t-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, labore consectetur doloribus tenetur ut molestiae. Impedit dicta quas commodi facilis excepturi molestias cumque dolores deleniti! Maiores, perferendis. Odit, ducimus adipisci!
            </p>
        </section>
        </>
    )
}