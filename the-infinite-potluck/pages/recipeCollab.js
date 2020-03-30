import { Component } from 'react';
import io from 'socket.io-client';
import { render } from 'react-dom';
import Router from 'next/router';
import secureTemplate from '../static/secure-template';


class recipeCollab extends Component {
    componentDidMount(){
        this.socket=io('/recipe');
        
        const recipe = document.getElementById('recipe');

        recipe.addEventListener("keyup", (data) => {
            console.log("1) CLIENT EMITS message WITH DATA");
            const text = recipe.value;
            this.socket.emit('message', text);
        });

        this.socket.on('message', (data) => {
            recipe.value = data;
        });

    }    
    render(){
        return(
            <div>
                <textarea id="recipe" rows="10" cols="30">
                </textarea>
            </div>
            
        )
    }
}
export default secureTemplate(recipeCollab);