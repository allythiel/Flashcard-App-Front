import React from 'react';
import './flashcard.css';
import '../app';

function Flashcard(props){
    return (
            <div className="flashcard">
                <div className="card">
                    <h1 className="term">{props.flashcard.term}</h1>
                    <h3 className="description">{props.flashcard.description} </h3>
                </div>
            </div>
    );
}

export default Flashcard;