//Importing React Library
import React from 'react';
import { Card } from 'react-bootstrap';

//MovieItem class created to display movies 
export class MovieItem extends React.Component {
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.movie.Year}</p>
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>

        );
    }
}