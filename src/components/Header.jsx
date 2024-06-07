import { FaChevronDown } from 'react-icons/fa';
import './Header.scss';

const Header = () => (
    <header>
        <div className="logo">
            <span>GO</span> <strong>FOOD</strong>
        </div>
        <nav>
            <a href="#">Home <FaChevronDown /></a>
            <a href="#">Groceries <FaChevronDown /></a>
            <a href="#">Pages <FaChevronDown /></a>
        </nav>
    </header>
);

export default Header;

