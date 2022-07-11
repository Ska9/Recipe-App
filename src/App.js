import React, {useState, useEffect} from 'react';
import Recipe from '../src/Components/Recipe.jsx';
import './App.css';

const App = () => {

  const APP_ID = 'fdace575';
  const APP_KEY = 'ac096b956a66cbf6d1df15be5c0923e8	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('tacos');

  useEffect(() => {
      getRecipes();
  }, [query])

  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
      const data = await response.json();
      setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'  
          type='text'
          value={search}
          onChange={updateSearch}
        />
        <button
          className='search-button'
          type='submit'
        >Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
          ))}
        </div>
    </div>
  );
}

export default App;
