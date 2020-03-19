import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';
import Auth from '../lib/Auth';
import Nav from '../components/nav';


const auth = new Auth();

const apiKey = '56c94cc84b534f349b59f11eb9d6ae51';

export default class RecipeWiki extends Component {
    componentDidMount(){
        var user_data = localStorage.getItem('user_details');
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        if(!isLoggedIn || !user_data){
            window.location.replace('/');
        }

        const search = document.getElementById('search');
        search.addEventListener('submit', function(event){
            event.preventDefault();

            // toggle elements
            document.getElementById('recipes').hidden = false;
            document.getElementById('indepthRecipe').hidden = true;

            let data = document.querySelector('#data').value;
            document.getElementById('search').reset();
            console.log(data);

            const res = fetch('api/recipe')
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
                            <div id="${result.id}" style="display:flex;flex-direction:row;margin-bottom:20px;border:2px solid #000;padding:3px;">
                                <img src="${baseUri + imageUrl}" height="200" style="padding-right:50px;"/>
                                <div style="display:flex;flex-direction:column;">
                                    <div style="padding-bottom:68px;font-size:30px;;">${result.title}</div>
                                    <div style="padding-bottom:10px">Preparation time: ${result.readyInMinutes}</div>
                                    <div>Number of servings: ${result.servings}</div>
                                </div>
                            </div>
                        `;
                        });
                        // add event listeners on click
                        data.results.forEach(result => {
                            let card = document.getElementById(result.id);
                            card.addEventListener("click", function(event){
                                fetch('api/recipeFocus')
                                .then(function(response){
                                    response.json().then(function (data) {
                                        console.log(data);
                                        console.log(data.title);
                                        //toggle elements
                                        document.getElementById('recipes').hidden = true;
                                        document.getElementById('indepthRecipe').hidden = false;

                                        //populate focus view
                                        let focus = document.getElementById('indepthRecipe');
                                        //general info
                                        focus.innerHTML = `
                                            <div style="display:flex;flex-direction:column;"> 
                                                <div style="font-size:50px;align-self:center;">${data.title}</div>
                                                <div style="display:flex;flex-direction:column;border:3px solid #000;align-self:center;padding:5px;margin-bottom:10px;">
                                                    <img src="${data.image}"/>
                                                    <div>${data.summary}</div>
                                                </div>
                                                <div>Ingredients: </div>
                                                <ul id="ingredients"></ul>
                                                <div>Directions: </div>
                                                <ol id="steps"></ol>
                                                <button id="backBtn">Back</button>
                                            </div>
                                        `;
                                        //back button toggles
                                        document.getElementById('backBtn').addEventListener("click", () => {
                                            document.getElementById('recipes').hidden = false;
                                            document.getElementById('indepthRecipe').hidden = true;
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
                <Nav />
                <div className="main">
                    <div className="body">
                        <form id="search" className="search">
                            <input type="text" id="data" name="data"/>
                            <button id="search_btn">
                                Search
                            </button>
                        </form>
                        
                        <div id="recipes" className="recipes">
                        </div>

                        <div id="indepthRecipe">
                        </div>

                    </div>

                    <style jsx>{`
                    .main{
                        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
                        'Arial', sans-serif;
                        padding: 20px 20px 60px;
                        max-width: 680px;
                        margin: 0 auto;
                    }
                    .body {
                        display: flex;
                        flex-direction: column;
                    }
                    .search {
                        padding-bottom: 80px;
                        align-items: center;
                    }
                    `}
                    </style>
                </div>
            </div>
        )
    }
}