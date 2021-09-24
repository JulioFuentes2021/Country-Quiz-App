import React from "react";
import { useSelector } from "react-redux"


const Context = React.createContext();

function ContextProvider(props) {
    const allCountriesArray = useSelector(countries => countries.countries.allCountriesArray)
    const option1 = useSelector(countries => countries.countries.option1)
    const option2 = useSelector(countries => countries.countries.option2)
    const option3 = useSelector(countries => countries.countries.option3)
    const option4 = useSelector(countries => countries.countries.option4)
    const capital = useSelector(countries => countries.countries.capital)
    const country = useSelector(countries => countries.countries.country)
    const check = useSelector(countries => countries.countries.check)
    const points = useSelector(countries => countries.countries.points)
    const showResults = useSelector(countries => countries.countries.showResults)
    const loader = useSelector(countries => countries.countries.loader)
    const [error,setError] = React.useState(false);
    
    return (
        <Context.Provider value={{
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
            error,
            setError
        }}>
            { props.children }
        </Context.Provider>
    );
}

//Posibles soluciones: custom Hooks para pasar todas las variables

export { Context, ContextProvider };