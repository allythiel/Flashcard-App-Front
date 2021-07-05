import React from 'react';
import './flashcards.css';

function Flashcard(props){
    return (
        <div className="flashcardfront">
            <div className="card">
                <h1 className="term">{props.flashcard.term}</h1>
                <h1 className="description">{props.flashcard.description}</h1>
            </div>
        </div>
    );
}

export default Flashcard;