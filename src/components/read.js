//Importing React Library
import React from 'react';
import { Movies } from './movies';
import axios from 'axios'; 


//Read class created to read in movie details 
export class Read extends React.Component{

    state = {
        movies: []           
    }; 

    //Reading in JSON Data from URL below, .then runs if there is no error reading url, 
    //catch excecutes if error reading url
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        .then(response =>{
            this.setState({movies: response.data.Search})
        })
        .catch(
            (error)=>{
                console.log(error);
            }
        );

    }

    render(){
        return(
            <div>
                <h1>This is the read component</h1>
                <Movies movies = {this.state.movies}></Movies>
            </div>

        );
    }
}