# Development

### Link to Deployed Website

If you used the stencil code, this is `https://readycoffee123.github.io/development/`

### Goal and Value of the Application
The goal of this web application was to create a digital cookbook where users can use it for their favorite recipes where they can sort/filter according to calories, cook time, difficulty, and meal type. This is especially designed for people who do not have enough time to find recipes that are appropriate for their schedules, time that they have for cooking, and the type of meal that they'd like to eat. I wanted to design something that is easy to use, visually appealing, and easy to navigate. This application also provides a total calorie count for users who are curious about what they're eating and how much to eat more for a healthy calorie amount

### Usability Principles Considered
This web application considers the best and most optimal sorting and filtering options that the users might benefit from. These include cooktime to make sure that the recipe that the user wants is suitable for the amount of time that they can spare, calorie information to make sure that the user is getting enough and sufficient calories and nutrients, filtering by meal type to enable the users to find the recipe that they would like, and a "favorites" section where users can add the meals or drinks they like to refer back to and see their calorie information, if they'd like to. The users can additionally can filter for easy or hard recipes. This is designed for users who are not confident in their cooking recipes and would prefer easy recipes or users who do not have enough time for cooking for that particular time.

The website is organized in a way that it is easy to view the recipes and also the dishes. If the user hovers over, they can see the ingredient lists, which is only available upon hovering to reduce the information overload. Additionally, each recipe includes a short description on what is the recipe to give a quick information for the user, if the user doesn't know what to pick. 


### Organization of Components

The organization of the website includes a component structure for a single FoodCard (FoodCard.js). 

FoodCard represents each Item in the website, where Items are each recipes listed in the page. Each card includes information regarding the image for the recipe, the description of the item, category of the meal, the cooktime for the meal or drink, the difficulty, calorie information, and the name of the recipe. This information will be filled by the JSON file where each information is stored.  

### How Data is Passed Down Through Components

As mentioned above, there is a JSON file that stores information for each recipe, including the name of the recipe, description for the recipe, cookitme, difficulty, calorie information, category, image for the recipe, and ingredients. In App.js file, this information is used to filter and sort according to the cooktime, calories, difficulty, and meal type for the users to pick the best recipe for the day. In a similar way, the information is also used for the cart structure and also to count the total number of calories in the cart (which stores the favorites that the user added).

To display all the recipes, the information from the JSON file is also passed to the FoodCard component inside the App.js file. 

### How the User Triggers State Changes


