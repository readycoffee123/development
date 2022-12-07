// import cookbook from "./assets/cookbook-dat.json";
import React from "react";

export const FoodCard = (props) => {
	// this.state.cookbook.map((data) =>
	// const addCart = () => {
	// 	return ""
	// }

	return (
		<div  key={props.index}>
		<p className="recipe-name">{props.name}</p>
		<div className="img-container">
			<img src={props.image} />
			
			<ul className="ingredient" >
				{props.ingredients.map((ingredient, index) => {
					return (
						<li key={index}>{ingredient}</li>										
					);
					})}
			</ul>
		</div>
		{/* <button onClick= {addCart()} > Add to favorites </button> */}
		<p className="recipe-description">{props.description}</p>
		<p className="recipe-description"> {props.cooktime} min </p>
		<p className="recipe-description"> {props.calories} cal </p>
		<p className="recipe-description"> {props.difficulty} </p>
		
		</div>
)
// )
}


	
