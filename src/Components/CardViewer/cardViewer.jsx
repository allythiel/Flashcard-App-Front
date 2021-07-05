import React from 'react';
import Flashcards from './'

function CardViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousCard()}>Previous Flashcard</button>
        </div>
        <div className="col-md-4">
            <Flashcards flashcard={props.flashcard}/>
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextCard()}>Next Flashcard</button>
        </div>
    </div>
    )
}

export default CardViewer;