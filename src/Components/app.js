import React, { Component } from 'react';
import TitleBar from './TitleBar/titlebar';
import Footer from './Footer/footer';
import CardViewer from './CardViewer/cardViewer';
import CardCreator from './cardCreator/cardCreator';
import axios from 'axios';
import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [],
            cardNumber: 0,
            isLoaded: false,
        }
    }
    componentDidMount(){
        this.getAllCards();
    }

    async getAllCards(){
        let result = await axios.get("http://localhost:5000/api/collections");
        this.setState({
            flashcards: result.data,
            isLoaded: true
        });
    }

    addNewCard(flashcard){
        this.state.flashcards.push(flashcard);
        this.setState({
            cardNumber: this.flashcards.length -1
        });
    }
    gotoNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.state.flashcards.length){
            tempCardNumber = 0;
        }
        this.setState({
            cardNumber: tempCardNumber
        });
    }
    gotoPreviousCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber--;
        if(tempCardNumber < 0)
            tempCardNumber = this.state.flashcards.length -1;
        this.setState({
            cardNumber: tempCardNumber
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <CardCreator addNewCard={this.addNewCard.bind(this)}/>
                {this.state.isLoaded ? <CardViewer flashcards={this.state.flashcards[this.state.cardNumber]} nextCard={() => this.gotoNextCard()} previousCard={() => this.gotoPreviousCard()} />  : <h1>Loading!!!</h1>}
                <Footer />
            </div>
        );
    }
}

export default App;