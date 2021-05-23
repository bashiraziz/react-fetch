import React, {useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "789d3930";
  const APP_KEY = "35de69857ef829f84456fc95c3540043";
  const API_URL = `https://api.edamam.com/search?q=banana&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
    const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes (data.hits);
      console.log(data.hits);
    }
  
    loadData();
  },[]);

  return (
    
    <div className="App">
   
      {
      recipes.map((r, id) => (
        <Recipe key={id} source={r.recipe.source}label={r.recipe.label} image={r.recipe.image} calories={r.recipe.calories} />
        ))
      }
    </div>
  )
};

export default App;
