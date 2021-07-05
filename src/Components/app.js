import { assertExpressionStatement } from '@babel/types';
import React, { Component } from 'react';
import NavBar from './NavigationBar/navigationbar';
import Flashcards from './Flashcards/flashcards';
import Footer from './Footer/footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            flashcardArr: []
        };
    }

    componentDidMount(){
        this.getAllCards();
    }

    async getAllCards(){
        let result = await assertExpressionStatement.get("http://localhost:5000/api/collections");
        this.setState({
            flashcardArr: result.data
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <NavBar />
                <Flashcards />
                <Footer />
            </div>
        );
    }
}

export default App;