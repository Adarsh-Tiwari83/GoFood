import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ProductList.scss';
import axios from 'axios';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
                setProducts(response.data.meals);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [category]);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.idMeal} className="product-item">
                    <img src={`${product.strMealThumb}`} alt={product.strMeal} />
                    <div className="product-info">
                        <h3>{product.strMeal}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, inventore?</p>
                    </div>
                    <div className="product-actions">
                        <p className="price">$8.45</p>
                        <button className="shop-now">
                            Shop Now <FaArrowRight />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
