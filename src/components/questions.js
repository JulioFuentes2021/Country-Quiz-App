import React from 'react';
import {useEffect} from 'react';
import Results from './results';
import Loader from './loading';
import { useDispatch } from 'react-redux';
import {changeOption1,
        changeOption2,
        changeOption3,
        changeOption4,
        setCapital,
        setCountry,
        setCheck,
        setPoints,
        setShowResults,
        setLoader,
        } from '../redux/countryDuck';
import { Context } from '../LogicGlobal/variables';
import Board from './Board';


function Questions() {
    useEffect(() => {
        fetchItems()
    },[])

    const {
        allCountriesArray,
        option1,
        option2,
        option3,
        option4,
        capital,
        country,
        check,
        points,
        showResults,
        loader,
        setError,
        error
    } = React.useContext(Context)

    const [wrongSelection, setWrongSelection] = React.useState();
    const [correctSelection, setCorrectSelection] = React.useState();
    const [postitionOfTheSolution,setPostitionOfTheSolution] = React.useState()

    const dispatch = useDispatch()

    const fetchItems = async () => {
        dispatch(setLoader(true))
        dispatch(setPoints(points+1))
        const allCountries = 'https://countriesnow.space/api/v0.1/countries/capital'
        const allCountriesData = await fetch(allCountries)
        const allCountriesArray = await allCountriesData.json()//Un array
        const randomCountry = Math.floor(Math.random()*allCountriesArray.data.length-1+1)
        dispatch(setCapital(allCountriesArray.data[randomCountry].capital))
        dispatch(setCountry(allCountriesArray.data[randomCountry].name))
        cleanOptions(allCountriesArray)
        const value = allCountriesArray.data[randomCountry].name
        apiRequestForUser(defineOptionPosition(),value)
        console.log(value)
        dispatch(setLoader(false))
    }

    const defineOptionPosition = () => {
        const order = Math.random()*4
        const orderRounded = Math.floor(order+1)
        return orderRounded
    }

    const correctOptionSelected = (position) => {
        setCorrectSelection(document.getElementById(`answers-items-${position}`))
        console.log('se ejecuto')
    }

    const apiRequestForUser = (position,value) => {
        if (position === 1) {
            dispatch(changeOption1(value))
            setPostitionOfTheSolution(1)
        }
        if (position === 2) {
            dispatch(changeOption2(value))
            setPostitionOfTheSolution(2)
        }
        if (position === 3) {
            dispatch(changeOption3(value))
            setPostitionOfTheSolution(3)
        }
        if (position === 4){
            dispatch(changeOption4(value))
            setPostitionOfTheSolution(4)
        }
    }

        const optionSelectedSwitchStyle1 = (e) => {
            dispatch(setCheck(option1))
            document.getElementById('answers-items-1').classList.add('selected')
            document.getElementById('answers-items-2').classList.remove('selected')
            document.getElementById('answers-items-3').classList.remove('selected')
            document.getElementById('answers-items-4').classList.remove('selected')
            setWrongSelection(document.getElementById('answers-items-1'));
            if (!correctSelection) {
                correctOptionSelected(postitionOfTheSolution)
            }
        }

        const optionSelectedSwitchStyle2 = () => {
            dispatch(setCheck(option2))
            document.getElementById('answers-items-2').classList.add('selected')
            document.getElementById('answers-items-1').classList.remove('selected')
            document.getElementById('answers-items-3').classList.remove('selected')
            document.getElementById('answers-items-4').classList.remove('selected')
            setWrongSelection(document.getElementById('answers-items-2'));
            if (!correctSelection) {
                correctOptionSelected(postitionOfTheSolution)
            }
        }

        const optionSelectedSwitchStyle3 = () => {
            dispatch(setCheck(option3))
            document.getElementById('answers-items-3').classList.add('selected')
            document.getElementById('answers-items-1').classList.remove('selected')
            document.getElementById('answers-items-2').classList.remove('selected')
            document.getElementById('answers-items-4').classList.remove('selected')
            setWrongSelection(document.getElementById('answers-items-3'));
            if (!correctSelection) {
                correctOptionSelected(postitionOfTheSolution)
            }
        }

        const optionSelectedSwitchStyle4 = () => {
            dispatch(setCheck(option4))
            document.getElementById('answers-items-4').classList.add('selected')
            document.getElementById('answers-items-1').classList.remove('selected')
            document.getElementById('answers-items-2').classList.remove('selected')
            document.getElementById('answers-items-3').classList.remove('selected')
            setWrongSelection(document.getElementById('answers-items-4'));
            if (!correctSelection) {
                correctOptionSelected(postitionOfTheSolution)
            }
        }


        const cleanOptions = (allCountriesArray) => {
            dispatch(changeOption1(allCountriesArray.data[Math.floor(Math.random()*allCountriesArray.data.length-1+1)].name))
            dispatch(changeOption2(allCountriesArray.data[Math.floor(Math.random()*allCountriesArray.data.length-1+1)].name))
            dispatch(changeOption3(allCountriesArray.data[Math.floor(Math.random()*allCountriesArray.data.length-1+1)].name))
            dispatch(changeOption4(allCountriesArray.data[Math.floor(Math.random()*allCountriesArray.data.length-1+1)].name))
        }


        const checkIfTheAnswerIsCorrect = (e) => {
            if (country === check) {
                setPostitionOfTheSolution('')
                setCorrectSelection('')
                fetchItems()
                dispatch(setCheck(''))
                console.log(document.querySelector('.option').parentNode)
            } else {
                console.log('Fallastes papa')
                console.log(wrongSelection)
                console.log(correctSelection)
                wrongSelection.classList.add('wrong')
                correctSelection.classList.add('selected')
                console.log(points)
                if (error) {
                    dispatch(setShowResults(true))
                }
                setError(true)
            }
        }

        const showResultsBtn = (booleanDate) => {
            dispatch(setShowResults(true))
        }

        if (showResults === true && error === true) {
            return <Results correct={points} />
        }

        if (loader) {
            return <Loader/>
        }

    return (
            <Board
                capital={capital}
                option1={option1}
                option2={option2}
                option3={option3}
                option4={option4}
                optionSelectedSwitchStyle1={optionSelectedSwitchStyle1}
                optionSelectedSwitchStyle2={optionSelectedSwitchStyle2}
                optionSelectedSwitchStyle3={optionSelectedSwitchStyle3}
                optionSelectedSwitchStyle4={optionSelectedSwitchStyle4}
                check={check}
                checkIfTheAnswerIsCorrect={checkIfTheAnswerIsCorrect}
                setShowResults={showResultsBtn}
            />
    )
}


export default Questions;