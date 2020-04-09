import { Component } from 'react';
import Link from 'next/link';
import secureTemplate from '../static/secure-template-wheader';

const apiKey = '56c94cc84b534f349b59f11eb9d6ae51';

class RecipeWiki extends Component {
    constructor(props){
        super(props);
    }
    
    toggle() {
        let recipes = document.getElementById('recipes');
        let indepthRecipe = document.getElementById('indepthRecipe');
        if (recipes.hidden){
            recipes.hidden = !recipes.hidden;
            indepthRecipe.hidden = !indepthRecipe.hidden;
        }
        
    }

    componentDidMount(){
        const search = document.getElementById('search');
        search.addEventListener('submit', (event) => {
            event.preventDefault();
            this.toggle();
            let data = document.querySelector('#data').value.toString();
            document.getElementById('search').reset();
            console.log(data);

            // fetch('api/recipe')
            fetch(`https://api.spoonacular.com/recipes/search?query=${data}&instructionsRequired=true&apiKey=${apiKey}`, {
                method: 'GET',
            })
                .then(function(response){
                    response.json().then(function(data){
                        console.log(data);
                        // resulting array of data (recipes)
                        let recipe = document.getElementById('recipes');
                        // clear existing recipes
                        recipe.innerHTML = ``;
                        let baseUri = data.baseUri;
                        // populate recipe list with recipe overview cards
                        data.results.forEach(result => {
                            let imageUrl = result.image;
                            console.log(baseUri + imageUrl);
                            recipe.innerHTML = recipe.innerHTML + `
                            <div id="${result.id}" onMouseOver="this.style.background='#87CEFA';" onMouseOut="this.style.background='#F0F8FF';" style="display:flex;flex-direction:row;margin-bottom:20px;border:2px solid #067df7;padding:3px;box-shadow: 5px 5px 2px grey;background: #F0F8FF;">
                                <img src="${baseUri + imageUrl}" height="200" style="border:1px solid #067df7;box-shadow: 2px 2px 1px grey;"/>
                                <div style="display:flex;flex-direction:column;justify-content:space-between;padding-left:20px;padding-top:10px;padding-bottom:10px;">
                                    <div style="padding-bottom:68px;font-size:30px;">${result.title}</div>
                                    <div>
                                        <div style="padding-bottom:10px">Preparation time: ${result.readyInMinutes}</div>
                                        <div>Number of servings: ${result.servings}</div>
                                    </div>
                                </div>
                            </div>
                        `;
                        });
                        // add event listeners on click
                        data.results.forEach(result => {
                            let card = document.getElementById(result.id);
                            card.addEventListener("click", function(event){
                                // fetch('api/recipeFocus')
                                fetch(`https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${apiKey}`, {
                                    method: 'GET',
                                })
                                .then(function(response){
                                    response.json().then(function (data) {
                                        console.log(data);
                                        console.log(data.title);
                                        //toggle elements
                                        document.getElementById('recipes').hidden = true;
                                        document.getElementById('indepthRecipe').hidden = false;
                                        document.getElementById('chooseBtn').hidden = false;
                                        document.getElementById('backBtn').hidden = false;
                                        //populate focus view
                                        let focus = document.getElementById('indepthRecipe');
                                        //general info
                                        focus.innerHTML = `
                                            <div style="display:flex;flex-direction:column;"> 
                                                <div style="font-size:50px;align-self:center;">${data.title}</div>
                                                <div style="display:flex;flex-direction:column;align-self:center;padding:5px;">
                                                    <img src="${data.image}" style="border:3px solid #067df7;margin-bottom:10px;box-shadow: 2px 2px 1px grey;"/>
                                                    <div>${data.summary}</div>
                                                </div>
                                                <div>
                                                    <div>Ingredients: </div>
                                                    <ul id="ingredients"></ul>
                                                    <div>Directions: </div>
                                                    <ol id="steps"></ol>
                                                </div>
                                            </div>
                                        `;
                                        //back button toggles
                                        document.getElementById('backBtn').addEventListener("click", () => {
                                            document.getElementById('recipes').hidden = false;
                                            document.getElementById('indepthRecipe').hidden = true;
                                            document.getElementById('chooseBtn').hidden = true;
                                            document.getElementById('backBtn').hidden = true;
                                        });
                                        //ingredients
                                        let  ingredients = document.getElementById('ingredients');
                                        data.extendedIngredients.forEach(ingredient => {
                                            let item;
                                            let amount = ingredient.amount.toString().substring(0,4);
                                            // grammar logic for ingredient list items
                                            if(ingredient.unit){
                                                (amount == "1") ? (item = amount + " " + ingredient.unit + " of " + ingredient.name) : (item = amount + " " + ingredient.unit + "s of " + ingredient.name);
                                            }
                                            else{
                                                (amount == "1") ? (item = amount + " " + ingredient.name) : (item = amount + " " + ingredient.name + "s");
                                            }

                                            ingredients.innerHTML = ingredients.innerHTML + `
                                                <li>${item}</li>
                                            `;
                                        });
                                        //instructions
                                        let steps = document.getElementById('steps');
                                        data.analyzedInstructions[0].steps.forEach(step => {
                                            steps.innerHTML = steps.innerHTML + `
                                                <li>${step.step}</li>
                                            `;
                                        });

                                        document.getElementById('chooseBtn').addEventListener("click", function(event) {
                                            localStorage.setItem('data', JSON.stringify(data));
                                        });

                                    });
                                });
                            });
                        });
                    });
                });
        });
    }
    render(){
        return(
            <div>
                <div className="main">
                    <div className="body">
                        <div id="header" className="header">
                            <h3>Search for a recipe</h3>
                            <form id="search" className="search">
                            <input type="text" id="data" name="data" placeholder="Search for a recipe..." size="40"/>
                            <button id="search_btn">
                                Search
                            </button>
                        </form>
                        </div>
                        
                        <div id="recipes" className="recipes" hidden>
                        </div>

                        <div className="indepth">
                            <div id="indepthRecipe" hidden>
                            </div>
                            <Link href="/broadcaster">
                                <button id="chooseBtn" className="btn" hidden>
                                    Choose Recipe
                                </button>
                            </Link>
                            <button id="backBtn" className="btn" hidden>Back</button>
                        </div>

                    </div>

                    <style jsx>{`
                    .main {
                        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
                        'Arial', sans-serif;
                        padding: 20px 20px 60px;
                        max-width: 680px;
                        margin: 0 auto;
                    }
                    .header {
                        font-size: 30px;
                        color: #067df7;
                        padding-left: 5px;
                        margin-bottom:10px;
                        border: 2px solid #067df7;
                        box-shadow: 5px 5px 2px grey;
                        background: #F0F8FF;
                    }
                    .body {
                        display: flex;
                        flex-direction: column;
                    }
                    .search {
                        display: flex;
                        justify-content: flex-start;
                        padding-bottom: 30px;
                        align-items: center;
                        background: #F0F8FF;
                    }
                    .indepth {
                        display: flex;
                        flex-direction: column;
                        background: #F0F8FF;
                        border: 2px solid #067df7;
                        box-shadow: 5px 5px 2px grey;
                        padding: 5px;
                    }
                    .btn {
                        background-color: #067df7;
                        border: 2px solid CornFlowerBlue;
                        color: white;
                        margin: 5px;
                    }
                    `}
                    </style>
                </div>
            </div>
        )
    }
}
export default secureTemplate(RecipeWiki);