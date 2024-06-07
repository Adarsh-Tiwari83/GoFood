import  { useEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import './App.scss';
import axios from 'axios';
import ConnectSection from './components/ConnectSection';




const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Vegetarian');
  const [categories, setCategories] = useState([]);
    useEffect(() => {
      try{
        const fetchData = async () => {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
          let categoryList=[];
          response.data.categories.forEach(category => {
            categoryList.push(category.strCategory);
          });
          //only take last 5 categories rest are not needed
          categoryList = categoryList.slice(-5);
          setCategories(categoryList);
        };
        fetchData();
      }
      catch(error){
        console.error(error);
      }
    }, [selectedCategory]);

  return (
    <div className="app">
      <div className="upper">
        <div className="main-section">
          <Header />
          <Banner />
        </div>
        <ConnectSection />
      </div>
      <CategoryList categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default App;

