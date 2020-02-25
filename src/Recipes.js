import React from 'react'
import style from "./recipe.module.css"

const Recipes = ({title,calories,image,ingredient}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredient.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h4>{calories}</h4>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipes
