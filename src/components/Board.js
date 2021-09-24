import React from 'react';
import './styles/questions.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Context } from '../LogicGlobal/variables';
import { setShowResults } from '../redux/countryDuck';
import { useDispatch } from 'react-redux';


const Board = (props) => {
    const dispatch = useDispatch()
    const {error} = React.useContext(Context);

    useEffect(() => {
        document.getElementById('next').setAttribute('disabled','');
    },[])

    const check = useSelector(countries => countries.countries.check);

    if (!!check) {
        document.getElementById('next').removeAttribute('disabled');
    }

    return (
            <div className="app-container">
                <div>
                    <div className="title">
                            <h1>Country Quiz</h1>
                        </div>
                    <div className="work-space">
                        <div className="questions-container">
                            <div className="api-question">
                                <p>{props.capital} is the capital of</p>
                            </div>
                            <div className="answers">
                                <div className='answers-items' id="answers-items-1" onClick={props.optionSelectedSwitchStyle1}>
                                    <div className="id-answer">
                                        <span>A</span>
                                    </div>
                                    <div className="option">
                                        <p>{props.option1}</p>
                                    </div>
                                </div>
                                <div className='answers-items' id="answers-items-2" onClick={props.optionSelectedSwitchStyle2}>
                                    <div className="id-answer">
                                        <p>B</p>
                                    </div>
                                    <div className="option">
                                        <p>{props.option2}</p>
                                    </div>
                                </div>
                                <div className="answers-items" id="answers-items-3" onClick={props.optionSelectedSwitchStyle3}>
                                    <div className="id-answer">
                                        <p>C</p>
                                    </div>
                                    <div className="option">
                                        <p>{props.option3}</p>
                                    </div>
                                </div>
                                <div className="answers-items" id="answers-items-4" onClick={props.optionSelectedSwitchStyle4}>
                                    <div className="id-answer">
                                        <p>D</p>
                                    </div>
                                    <div className="option">
                                        <p>{props.option4}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="send-container">
                                <div className="next-container">
                                    <button
                                            
                                            id="next"
                                            type="button"
                                            className={!!check ? 'next':'next disable'}
                                            onClick={error ? props.setShowResults:props.checkIfTheAnswerIsCorrect}
                                        >
                                            { !error ? 'Next':'Results' }
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Board;