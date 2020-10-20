//Importing React Library
import React from 'react';
import { MovieItem } from './movieItem';


//Header class created to display text by returning h1 tag to class Header 
export class Movies extends React.Component{
    render(){
        //Map function used to seperate movies
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie}></MovieItem>

        })
        
    }
}