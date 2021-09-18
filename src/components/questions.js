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
    } = React.useContext(Context)



    const dispatch = useDispatch()



    const fetchCountry = async () => {
        const countrySearch = Math.random()*allCountriesArray.length-1//Posible error aqui
        const country = Math.floor(countrySearch+1)
        const url = `https://restcountries.eu/rest/v2/name/${allCountriesArray[country]}`;
        const data = await fetch(url)
        const response = await data.json()
        console.log(response[0].name)
        dispatch(setCapital(response[0].capital))
        const value = response[0].name
        dispatch(setCountry(value))
        cleanOptions()
        apiRequestForUser(defineOptionPosition(),value)
    }

    const fetchItems = async () => {
       dispatch( setLoader(true))
        dispatch(setPoints(points+1))
        const allCountries = 'https://restcountries.eu/rest/v2/all'
        const allCountriesData = await fetch(allCountries)
        const allCountriesResponse = await allCountriesData.json()
        const objeto = allCountriesResponse;
        const objectChange = Object.entries(objeto)
        objectChange.map((element) => (
            allCountriesArray.push(element[1].name)
        ))
        
        await fetchCountry()
        dispatch(setLoader(false))
    }

    const defineOptionPosition = () => {
        const order = Math.random()*4
        const orderRounded = Math.floor(order+1)
        return orderRounded
    }

    const apiRequestForUser = (position,value) => {
        if (position === 1) {
            dispatch(changeOption1(value))
        }
        if (position === 2) {
            dispatch(changeOption2(value))
        }
        if (position === 3) {
            dispatch(changeOption3(value))
        }
        if (position === 4){
            dispatch(changeOption4(value))
        }
    }

        const optionSelectedSwitchStyle1 = () => {
            dispatch(setCheck(option1))
        }

        const optionSelectedSwitchStyle2 = () => {
            dispatch(setCheck(option2))
        }

        const optionSelectedSwitchStyle3 = () => {
            dispatch(setCheck(option3))
        }

        const optionSelectedSwitchStyle4 = () => {
            dispatch(setCheck(option4))
        }


        const cleanOptions = () => {
            dispatch(changeOption1(allCountriesArray[Math.floor(Math.random()*allCountriesArray.length-1+1)]))
            dispatch(changeOption2(allCountriesArray[Math.floor(Math.random()*allCountriesArray.length-1+1)]))
            dispatch(changeOption3(allCountriesArray[Math.floor(Math.random()*allCountriesArray.length-1+1)]))
            dispatch(changeOption4(allCountriesArray[Math.floor(Math.random()*allCountriesArray.length-1+1)]))
        }


        const checkIfTheAnswerIsCorrect = () => {
            if (country === check) {
                fetchItems()
                dispatch(setCheck(''))
                console.log(document.querySelector('.option').parentNode)
            } else {
                console.log('Fallastes papa')
                dispatch(setShowResults(true))
                console.log(points)
            }
        }

        if (showResults) {
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
            />
    )
}


export default Questions;