import React, { Component } from 'react';

class CardCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const flashcard = {
            term: this.state.term,
            description: this.state.description
        }
        this.props.addNewCard(flashcard);
        this.setState({
            term: '',
            description: ''
        });
    }

    render() {
        return (
            <div>
                <hr />
                <center>
                    <h3>Create a New Flashcard!</h3>
                </center>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Term:</label>
                            <input type="text" name="term" value={this.state.term}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Description:</label>
                            <input type="text" name="author" value={this.state.description}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default CardCreator;