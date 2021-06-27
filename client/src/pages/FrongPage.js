import React, {useEffect} from "react"
import getAll from "../utils/getAll"

function FrontPage() {
    
    const [book, setBook] = useState({})
    
    useEffect(() => {
        getById('books', bookId, setBook)
    }, []);
    
    return (
        <div>
            <section>

            </section>
            <section className="fp-books">
                <h3>Books</h3>
                <img className='BookItem BookImg' src={book.img} />
                <p className='BookItem BookTitle'>{book.title}</p>
                <p className='BookItem BookTitle'>By {book.author}</p>
            </section>
            <section>

            </section>
        </div>
    )
}

export default FrontPage