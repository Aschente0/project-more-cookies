import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';
import "../recipeWiki.css";

const apiKey = '56c94cc84b534f349b59f11eb9d6ae51';

export default class RecipeWiki extends Component {
    componentDidMount(){
        const search = document.getElementById('search');
        search.addEventListener('submit', function(event){
            event.preventDefault();
            let data = document.querySelector('#data').value;
            document.getElementById('search').reset();
            console.log(data);

            const res = fetch('api/recipe')
                .then(function(response){
                    response.json().then(function(data){
                        console.log(data);
                        // resulting array of data (recipes)
                        let recipe = document.getElementById('recipes');
                        let baseUri = data.baseUri;
                        data.results.forEach(result => {
                            let imageUrl = result.image;
                            console.log(baseUri + imageUrl);
                            recipe.innerHTML = recipe.innerHTML +
                                `<img src="${baseUri + imageUrl}" className="recipe" height="200"/>
                                `;
                        });
                    });
                });


        });
    }
    
    render(){
        return(
            <div>
                <div className="body">
                    <form id="search" className="search">
                        <input type="text" id="data" name="data"/>
                        <button id="search_btn">
                            Search
                        </button>
                    </form>

                    <div id="recipes" className="recipes">
                    </div>
                </div>

                <style jsx>{`
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
        )
    }
}
