import React from 'react';
import './styles/questions.css';
import {useState,useEffect} from 'react';
import Results from './results';
import Loader from './loading';

function Questions() {
    useEffect(() => {
        fetchItems()
    },[])

    //const prueba = ['Honduras','Nicaragua','El salvador','Costa Rica','Brazil','Uruguay','Argentina'];
    let prueba = [];
    const [option1,setOption1] = useState('');
    const [option2,setOption2] = useState('');
    const [option3,setOption3] = useState('');
    const [option4,setOption4] = useState('');
    const [capital,setCapital] = useState(null);
    const [country,setCountry] = useState(undefined);
    const [check,setCheck] = useState(undefined);
    const [points,setPoints] = useState(-1);
    const [showResults,setShowResults] = useState(false);
    const [loader,setLoader] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(undefined)
    const optionsMix = [];

    const fetchCountry = async () => {
        const countrySearch = Math.random()*prueba.length-1//Posible error aqui
        /**/
        const country = Math.floor(countrySearch+1)
        const url = `https://restcountries.eu/rest/v2/name/${prueba[country]}`;
        const data = await fetch(url)
        const response = await data.json()
        console.log(response[0].name)
        setCapital(response[0].capital)
        const value = response[0].name
        setCountry(value)
        cleanOptions()
        apiRequestForUser(defineOptionPosition(),value)
    }

    const fetchItems = async () => {
        setLoader(true)
        setPoints(points+1)
        const allCountries = 'https://restcountries.eu/rest/v2/all'
        const allCountriesData = await fetch(allCountries)
        const allCountriesResponse = await allCountriesData.json()
        //await prueba.push[allCountriesResponse]
        const objeto = allCountriesResponse;
        const objectChange = Object.entries(objeto)
        objectChange.map((element) => {
            prueba.push(element[1].name)
        })
        
        await fetchCountry()
        setLoader(false)
        
    }

    const defineOptionPosition = () => {
        const order = Math.random()*4
        const orderRounded = Math.floor(order+1)
        //console.log(orderRounded)
        return orderRounded
    }

    const apiRequestForUser = (position,value) => {
        if (position===1) {
            setOption1(value)

        } 
        if (position===2) {
            setOption2(value)

        } 
        if (position===3) {
            setOption3(value)

        } 
        if (position===4){
            setOption4(value)

        }
        

        //fillOtherOptions(option1,option2,option3,option4)

    }

        const optionSelectedSwitchStyle1 = () => {
            setCheck(option1)
            //console.log(document.querySelector('answers-items-1').parentNode)
            //console.log(document.querySelector('.option').parentNode)
        }

        const optionSelectedSwitchStyle2 = () => {
            setCheck(option2)
        }

        const optionSelectedSwitchStyle3 = () => {
            setCheck(option3)
        }

        const optionSelectedSwitchStyle4 = () => {
            setCheck(option4)
        }


        const cleanOptions = () => {
            setOption1(prueba[Math.floor(Math.random()*prueba.length-1+1)])
            setOption2(prueba[Math.floor(Math.random()*prueba.length-1+1)])
            setOption3(prueba[Math.floor(Math.random()*prueba.length-1+1)])
            setOption4(prueba[Math.floor(Math.random()*prueba.length-1+1)])
        }

        let finalPoints = 0;

        const checkIfTheAnswerIsCorrect = () => {
            if (country === check) {
                fetchItems()
                setCheck('')
                console.log(document.querySelector('.option').parentNode)
                //check.style.color = 'red'
            } else {
                //finalPoints = points;
                console.log('Fallastes papa')
                setShowResults(true)
                console.log(points)
                //setPoints(0)
                //fetchItems()
            }
        }

        if (showResults) {
            return <Results correct={points} />
        }

        if (loader) {
            return <Loader/>
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
                            <p>{capital} is the capital of</p>
                        </div>
                        <div className="answers">
                            <div className='answers-items' id="answers-items-1" onClick={optionSelectedSwitchStyle1}>
                                <div className="id-answer">
                                    <span>A</span>
                                </div>
                                <div className="option">
                                    <p>{option1}</p>
                                </div>
                            </div>
                            <div className='answers-items' id="answers-items-2" onClick={optionSelectedSwitchStyle2}>
                                <div className="id-answer">
                                    <p>B</p>
                                </div>
                                <div className="option">
                                    <p>{option2}</p>
                                </div>
                            </div>
                            <div className="answers-items" onClick={optionSelectedSwitchStyle3}>
                                <div className="id-answer">
                                    <p>C</p>
                                </div>
                                <div className="option">
                                    <p>{option3}</p>
                                </div>
                            </div>
                            <div className="answers-items" onClick={optionSelectedSwitchStyle4}>
                                <div className="id-answer">
                                    <p>D</p>
                                </div>
                                <div className="option">
                                    <p>{option4}</p>
                                </div>
                            </div>
                        </div>
                        <div className="send-container">
                            <div className="confirm">
                                {check}
                            </div>
                            <div className="next-container">
                                <button type="button" className="next" onClick={checkIfTheAnswerIsCorrect}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Questions;