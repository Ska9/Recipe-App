import React from 'react';
import '../Components/Recipe.css';

const Recipe = ({title, ingredients, calories, image}) => {
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className='image' src={image} alt=''></img>
        </div>
    );
}

export default Recipe;