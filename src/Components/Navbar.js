import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () =>{
    const { books } = useContext(BookContext);
    return(
        <div className="navbar">
            <h1>Nova Reading List</h1>
            <p>Currently you have { books.length } books to get througth...</p>
        </div>
    )
}
export default Navbar;