import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            flashcardArr: []
        };
    }

    componentDidMount(){
        this.getAllFlashcards();
    }
    render() {
        return (
            <div className="container-fluid">

            </div>
        );
    }
}

export default App;