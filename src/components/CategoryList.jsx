import './CategoryList.scss';

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="category-section">
            <h2 className="sub-heading">Shop by Category</h2>
            <h3 className="main-heading">Top Category of Organic Food</h3>
            <div className="category-list">
                {categories.map(category => (
                    <button
                        style={selectedCategory === category ? { backgroundColor: '#345333', color: 'white' } : {}}
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;

