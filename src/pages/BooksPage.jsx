import Books from "../containers/Books";
import {books} from "../utils/books";

export default function BooksPage(){
    return <Books books={books} />
}