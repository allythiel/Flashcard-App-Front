import React from 'react';
import './flashcards.css';

function Flashcards(props){
    return (
        <div className="flashcards">
            <div className="card">
                <h1 className="term">{props.flashcard.term}</h1>
                <h4 className="description">{props.flashcard.description}</h4>
            </div>
        </div>
    );
}

export default Flashcards;