import React from 'react';
import './flashcard.css';
import '../app';

const Flashcard = (props) => {
    console.log(props.flashcard)
    return (
            <div className="flashcard">
                <div className="card">
                    <h1 className="term">{props.flashcard.term}</h1>
                    <h1 className="description">{props.flashcard.description} </h1>
                </div>
            </div>
    );
}

export default Flashcard;