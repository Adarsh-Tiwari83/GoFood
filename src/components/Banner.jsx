import { FaArrowRight } from 'react-icons/fa';
import './Banner.scss';

const Banner = () => (
    <section className="banner">
        <p className="discount">Discount up to 20%</p>
        <h1>Buy Fresh And Organic Grocery Food</h1>
        <p>Enjoy the best quality and fresh products delivered to your doorsteps.</p>
        
        <div className="stats">
            <button>Shop Now <FaArrowRight /></button>
            
            <div className="stat">
                <span>35k+</span>
                <p>Users</p>
            </div>
            <div className="stat">
                <span>18k+</span>
                <p>Products</p>
            </div>
        </div>
    </section>
);

export default Banner;
