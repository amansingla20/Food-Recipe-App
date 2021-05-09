import React from 'react'
import './Recipe.css';

const Recipe = ({recipe}) => {
    console.log(recipe);
    return (
        recipe['recipe']['image'].match(/\.jpeg|jpg|gif|png$/)!=null && (

        <div className='recipe-title'>

            <img className='recipe-image' alt ='' src={recipe['recipe']['image']}/>
            <p className='recipe-name'>{recipe["recipe"]["label"]}</p>
        </div>
        )
    )
}

export default Recipe
