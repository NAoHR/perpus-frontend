import Navbar from "../components/Navbar";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {manfaat, kelebihan, photo} from "../utils/home"
import "../styles/containers/Home.css";

function WelcomingCard({text}){
    return (
    <span>
        <div className="mc-card b-shadow" style={{
            backgroundImage : `url("/home/manfaat/${text}.jpg")`
        }}>
            <div className="mcc-black b-black"></div>
            <h4 className="mcc-text poppins c-white">
                {text}
            </h4>
        </div>
    </span>    
    )
}

function AdvantagesCard({text}){
    return (
        <div className="ac-card b-lblue">
            <div className="ac-top">
                <img src={`/home/kelebihan/${text}.png`} alt="card image" className="acc-image" />
            </div>
            <h4 className="acc-text c-black poppins">
                {text}
            </h4>
        </div>
    )
}

function PhotoCard({text}){
    return (
        <div className="tp-card">
            <img src={`/home/tim/${text}.png`} alt="" className="tp-card-image"/>
            <h2 className="tp-text poppins c-lblack bold">
                {text}
            </h2>
        </div>
    )
}
export default function Home(){
    const ref = useRef();
    const { events } = useDraggable(ref);
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
        <section className="manfaat s-size">
            <h2 className="s-title poppins c-lblack">
                Manfaat
            </h2>
            <div className="manfaat-content" {...events} ref={ref}>
                {
                    manfaat.map((v) => {
                        return <WelcomingCard text={v} key={v}/>
                    })
                }
            </div>
        </section>
        <section className="advantages s-size">
            <h2 className="s-title poppins c-lblack">
                Kelebihan
            </h2>
            <div className="advantages-content">
                {
                    kelebihan.map((v) => {
                        return <AdvantagesCard key={v} text={v}/>
                    })
                }
                <div className="ac-card b-lblue">
                    <div className="ac-top">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png" alt="card image" className="acc-image" />
                    </div>
                    <h4 className="acc-text c-black poppins">
                        lorem ipsum dolor sit amet consectetur
                    </h4>
                </div>                
            </div>
        </section>
        <section className="kelebihan s-size">
            <h2 className="s-title poppins c-lblack">
                Kelebihan
            </h2>
            <div className="school-map">
                <div className="sm-text-side">
                    <p className="poppins c-lblack sm-t">
                    Jl. Balai Pustaka Baru I No.2, RW.7, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220
                    </p>
                    <a href="https://app.lapentor.com/sphere/smkn-26-1602643278?scene=5f87dd1c362df77f177c1f53">
                        <span className="vtour poppins bold c-light b-dblue c-white b-shadow">
                            Virtual Tour
                        </span>
                    </a>
                </div>
                <iframe className="sm-map" id="gmap_canvas" src="https://maps.google.com/maps?q=SMKN%2026%20jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </section>
        <section className="team s-size">
            <h2 className="s-title poppins c-lblack">
                Tim Kami
            </h2>
            <div className="team-photo">
                {
                    photo.map((v)=> {
                        return <PhotoCard text={v} key={v} />
                    })
                }
            </div>
        </section>
        </>
    )
}