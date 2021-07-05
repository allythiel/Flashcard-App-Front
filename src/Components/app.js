import React, { Component } from 'react';
import TitleBar from './TitleBar/titlebar';
import Footer from './Footer/footer';
import CardViewer from './CardViewer/cardViewer';


class App extends Component {
    constructor(props) {
        super(props);
        this.flashcards = [];
        this.state = {
            cardNumber: 0
        }
    }
    // componentDidMount(){
    //     this.getAllCards();
    // }

    // async getAllCards(){
    //     let result = await assertExpressionStatement.get("http://localhost:5000/api/collections");
    //     this.setState({
    //         flashcardArr: result.data
    //     });
    // }

    addNewCard(flashcard){
        this.flashcards.push(flashcard);
        this.setState({
            cardNumber: this.books.length -1
        });
    }
    gotoNextCard(){
        let tempCardNumber = this.state.cardNumber;
        tempCardNumber++;
        if(tempCardNumber === this.flashcards.length){
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
            tempCardNumber = this.flashcards.length -1;
        this.setState({
            cardNumber: tempCardNumber
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <TitleBar />
                <CardViewer flashcard={this.flashcards[this.state.cardNumber]} nextCard={() => this.goToNextCard()} previousCard={() => this.goToPreviousCard()}/>
                <Footer />
            </div>
        );
    }
}

export default App;