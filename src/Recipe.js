import React from 'react'; 
const Recipe = ({label, image, calories, source}) => {
    return(
        <div>
            <h2>Recipe Name: {label}</h2>
            <h2>Source: {source}</h2>
            <p> Calories: {calories}</p>
            <img src={image} alt={label} />
            
        </div>
    )
}


export default Recipe;
