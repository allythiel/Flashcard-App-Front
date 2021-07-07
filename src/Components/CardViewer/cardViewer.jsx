import React from 'react';
import Flashcard from '../Flashcard/flashcard';

function CardViewer(props){
    return(
        <div className="row row-spacer">
        <div className="col-md-4">
            <button onClick={() => props.previousCard()}>Previous Flashcard</button>
        </div>
        <div className="col-md-4">
            <Flashcard flashcard={props.flashcards}/>
        </div>
        <div className="col-md-4">
            <button onClick={() => props.nextCard()}>Next Flashcard</button>
        </div>
        {/* <div className="col-md-4">
            <button onClick={() => props.flipCard()}>Flip Flashcard</button>
        </div> */}
    </div>
    )
}

export default CardViewer;