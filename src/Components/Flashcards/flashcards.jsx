import React from 'react';
import './flashcards.css';
import '../app';

const Flashcard = ({ flashcards }) => {
    return (
        <div>
            {flashcards && flashcards.map(flashcard =>            
            <div className="flashcard">
                <div className="card">
                    <h1 className="term">{flashcard.term}</h1>
                    <h1 className="description">{flashcard.description}  </h1>
                </div>
            </div>
            )}
        </div>
    );
}

export default Flashcard;