import React from 'react';
import './styles/introduction.css';

function Introduction () {
    return (
        <div className="introduction-container">
            <div className="start">
                <div className="title-page">
                    <h1>Country Quiz</h1>
                </div>
                <div className="start-button">
                    <button type="button">Start</button>
                </div>
            </div>
        </div>
    )
}

export default Introduction;