import {useParams} from "react-router-dom"

export default function Book(){
    const {bookId} = useParams();
    return (
        <>
        <p>this is a <b>books/{bookId}</b> page</p>
        </>
    )
}