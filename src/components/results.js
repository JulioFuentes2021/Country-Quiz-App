import React from 'react';
import ResultImage from './images/winner.svg';
import './styles/results.css';
import {Link} from 'react-dom';

class Results extends React.Component {

    reload = () => {
        window.location.replace('');
    }

    render() {
        return (
            <div className="results-supremo">
            <div className="congragulations">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <div className="box-inside">
                    <div className="title-result">
                        <p>Country Quiz Results</p>
                    </div>
                    <div className="results-info-container">
                        <div className="image-result">
                            <img src={ResultImage} alt="Image" />
                        </div>
                        <div className="results-items">
                            <div className="item-title-result">
                                <p>Results</p>
                            </div>
                            <div className="correct-answers">
                                <p>You got <span className="final-results">{this.props.correct}</span> correct answers</p>
                            </div>
                        </div>
                        <div className="try-again-container">
                            <button type="button" className="try-again" onClick={this.reload}>Try Again</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;