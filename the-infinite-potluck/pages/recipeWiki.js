import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';

/***** help from https://github.com/Basscord/webrtc-video-broadcast *****/

export default class RecipeWiki extends Component {
    static async getInitialProps(){
        const res = await fetch('api/recipe');
        const recipes = await res.json();
        return { recipes };
    }
    componentDidMount(){
        console.log(this.props.recipes);
        let recipes = document.getElementById('recipes');
        this.props.recipes.forEach(recipe => {
            recipes.innerHTML = recipes.innerHTML + `
            <li>
                ${recipe.recipe}
            </li>
            `
        });
    }    
    render(){
        return(
            <div>
                <ul id="recipes">
                </ul>
            </div>
            
        )
    }
}
