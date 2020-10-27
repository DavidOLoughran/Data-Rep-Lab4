//Importing React Library
import React from 'react';


//Header class created to display text by returning h1 tag to class Header 
export class Create extends React.Component {

    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //
    onChangeMovieName(e) {
        this.setState({ Title: e.target.value })
    }

    onChangeMovieYear(e) {
        this.setState({ Year: e.target.value })
    }

    onChangeMoviePoster(e) {
        this.setState({ Poster: e.target.value })
    }

    //When Input Add Movie is clicked alert displays details added
    onSubmit() {
        alert('| Movie added | Title: '
            + this.state.Title + ' Year: '
            + this.state.Year + ' Poster: '
            + this.state.Poster);
    }

    render() {
        return (
            <div>
                <h1>This is the create Component</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Please add movie title</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}></input>
                    </div>

                    <div className="form-group">
                        <label>Please add movie year</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeMovieYear}></input>
                    </div>

                    <div className="form-group">
                        <label>Please add movie poster</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangeMoviePoster}></input>
                        <br></br>
                        <input type="submit" value="Add Movie"></input>
                    </div>
                </form>
            </div>

        );
    }
}