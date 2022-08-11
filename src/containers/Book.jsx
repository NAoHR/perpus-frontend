import {useParams} from "react-router-dom"
import Navbar from "../components/Navbar";

export default function Book(){
    const {bookId} = useParams();
    return (
        <>
        <Navbar />
        <p>this is a <b>books/{bookId}</b> page</p>
        </>
    )
}