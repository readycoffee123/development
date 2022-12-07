import './App.css';
import CookData from "./assets/cookbook-dat.json"
// import CookBook  from './CookBook.js'
import React, { useState } from "react";
import { FoodCard } from "./FoodCard"
import { useEffect } from "react";


// Some references I used for this project will also be mentioned as comments throughout the files :)

// I also learned React from the following video, https://www.youtube.com/watch?v=hQAHSlTtcmY and 
// https://www.youtube.com/watch?v=3_sj5tfs05g (this is to understand filtering in React)

function App() {

	const[data, setData] = useState(CookData);
	const[cart, setCart] = useState([]);
	const[filterCategory, setFilterCategory] = useState("");
	const[filterCategoryDifficulty, setFilterCategoryDifficulty] = useState("");
	const[sort, setsort] = useState(false)

	
	const filterResult = (filtered) => {
		if (filterCategory === "") {
			return filtered
		}
        const mydata = filtered.filter((recipe) => {
            return recipe.category === filterCategory;
        });
		return mydata
        // setData(mydata);
    }

	const filterResultDifficulty = (filtereddifficulty) => {
		if (filterCategoryDifficulty === "") {
			return filtereddifficulty
		}
        const mydata = filtereddifficulty.filter((recipe) => {
            return recipe.difficulty === filterCategoryDifficulty;
        });
		return mydata
        // setData(mydata);
    }

	// for sorting, I learned how to do it using the following website:
	// https://plainenglish.io/blog/sorting-react-components-using-sort#3-adding-sort-functionality
	const sortstuff = (sorted) => {

		if (sort === false) { //this will sort by cooktime
			const mydata = [...sorted].sort((a, b) => {
				return a.cooktime - b.cooktime 
			});
			return mydata
		} else { //this will sort by calories
			const mydata = [...sorted].sort((a, b) => {
				return a.calories - b.calories
			});
			return mydata
		}	
	}
	
	// To make multiple filters work together:
// https://stackoverflow.com/questions/64048890/react-apply-multiple-filters-to-array
	useEffect(() => {
		let result = CookData;
		result = filterResult(result);
		// console.log(result)
		result = sortstuff(result);
		// console.log(result)
		result = filterResultDifficulty(result);
		// result = sortCalories(result);
		
		setData(result);
	// }, [filterCategory, sortResult, sortMyCalories]); // dependency array. if these change then it will get called.
	}, [filterCategory, sort, filterCategoryDifficulty])

	
	const calcTotalCalories = cart => {
		console.log(cart);
		let sum = 0;
		cart.forEach(value => sum += value.calories);
		return sum;
	}

	
  return (
	// <p>hello</p>
	<div className ="main-container">
		<h1>My Cook Book of Delight</h1>
		<main>
			
		<section className= "all-container">
			<div className="button-container">
			<button type="button" className="button-meal" onClick={() => setData(CookData)}> RESET FILTERS</button>
				
				<p className="button-description"> Filter by difficulty</p>
	
				<button type="button" className="button-meal" onClick= {() => setFilterCategoryDifficulty('easy')}> EASY</button>
				<button type="button" className="button-meal" onClick= {() => setFilterCategoryDifficulty('hard')}> DIFFICULT </button>
				<p></p>

				<p className="button-description"> Filter by meal type</p>
				{/* <button type="button" className="button-meal" onClick={() => setData(CookData)}> ALL</button> */}
				<button type="button" className="button-meal" onClick= {() => setFilterCategory('dessert')}> DESSERT</button>
				<button type="button" className="button-meal" onClick= {() => setFilterCategory('dinner')}> DINNER </button>
				<button type="button" className="button-meal" onClick= {() => setFilterCategory('drink')}> DRINK </button>
				<p></p>
				<p className="button-description"> Sort by</p>
				<button type="button" className="button-meal" onClick ={() => setsort(false)} > COOK TIME</button>
				<button type="button" className="button-meal" onClick ={() => setsort(true)} > CALORIES</button>

				<p className="button-description"> Favorites</p>
				
				<div className="flex-cart">
					<p className = "recipe-description" >Total Calories : {calcTotalCalories(cart)}</p>
					<ul className ="cart-ul">
						{cart.map((values, i) => {
							return (	
								<>
								
									<li className="cart-li" key = {values.index}>  {values.name} , {values.calories}
									<button className = "remove-button" onClick={() => {
										const cpy = [...cart]
										cpy.splice(i, 1)
										console.log(cpy === cart);
										setCart(cpy);
									}}>X</button> </li>
								</> 
								
							)
						}
						)}
					</ul>
				</div>
			

			</div>
				<div className="item-container"> 
					{data.map((values) => {		
						// const{index, name, ingredients, description, image, cooktime, calories} = values;	
						return (	
							<div  key = {values.index} className="recipe-container">
							<FoodCard
								index= {values.index}
								name = {values.name}
								ingredients = {values.ingredients}
								description = {values.description}
								image = {values.image}
								cooktime = {values.cooktime}
								calories = {values.calories}	
								difficulty = {values.difficulty}
								// cart = {cart}
								// setCart = {setCart}
							/>
							<button className = "addToFav" onClick= {() => {
								const newCart = cart
								if (newCart.includes(values) === false) { //so that we're not going to add the same item to favorites more than once.
									newCart.push(values)
									const cpy = [...newCart]
									console.log(cpy === newCart)
									setCart(cpy);
								}
								
							} 
								} > Add to favorites </button>
							</div>	
						)
						
					})}
			</div>			
        </section>
		</main>
		
	</div>
	

  );  
}

export default App;
