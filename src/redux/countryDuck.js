const INITIAL_STATE = {
    allCountriesArray:[],
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    capital:null,
    country:undefined,
    check:undefined,
    points:-1,
    showResults:false,
    loader:false,
}

//Types
//Avoid typo problems
const CHANGE_OPTION_1 = 'CHANGE_OPTION_1';
const CHANGE_OPTION_2 = 'CHANGE_OPTION_2';
const CHANGE_OPTION_3 = 'CHANGE_OPTION_3';
const CHANGE_OPTION_4 = 'CHANGE_OPTION_4';
const SETCAPITAL = 'SETCAPITAL';
const SETCOUNTRY = 'SETCOUNTRY';
const SETCHECK = 'SETCHECK';
const SETPOINTS = 'SETPOINTS';
const SETSHOWRESULTS = 'SETSHOWRESULTS';
const SETLOADER = 'SETLOADER';


//Reducer
export const countryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_OPTION_1:
            return {...state, option1: action.payload}
        case CHANGE_OPTION_2:
            return {...state, option2: action.payload}
        case CHANGE_OPTION_3:
            return {...state, option3: action.payload}
        case CHANGE_OPTION_4:
            return {...state, option4: action.payload}
        case SETCAPITAL:
            return {...state, capital: action.payload}
        case SETCOUNTRY:
            return {...state, country: action.payload}
        case SETCHECK:
            return {...state, check: action.payload}
        case SETPOINTS:
            return {...state, points: action.payload}
        case SETSHOWRESULTS:
            return {...state, showResults: action.payload}
        case SETLOADER:
            return {...state, loader: action.payload}
        
        default: return state
    }
}

//Actions
export const changeOption1 = (value) => (dispatch,getState) => {
    dispatch({
        type: CHANGE_OPTION_1,
        payload:value
    })
}
export const changeOption2 = (value) => (dispatch,getState) => {
    dispatch({
        type: CHANGE_OPTION_2,
        payload:value
    })
}
export const changeOption3 = (value) => (dispatch,getState) => {
    dispatch({
        type: CHANGE_OPTION_3,
        payload:value
    })
}
export const changeOption4 = (value) => (dispatch,getState) => {
    dispatch({
        type: CHANGE_OPTION_4,
        payload:value
    })
}

export const setCapital = (value) => (dispatch,getState) => {
    dispatch({
        type: SETCAPITAL,
        payload:value
    })
}

export const setCountry = (value) => (dispatch,getState) => {
    dispatch({
        type: SETCOUNTRY,
        payload:value
    })
}

export const setCheck = (value) => (dispatch,getState) => {
    dispatch({
        type: SETCHECK,
        payload:value
    })
}

export const setPoints = (value) => (dispatch,getState) => {
    dispatch({
        type: SETPOINTS,
        payload:value
    })
}

export const setShowResults = (value) => (dispatch,getState) => {
    dispatch({
        type: SETSHOWRESULTS,
        payload:value
    })
}

export const setLoader = (value) => (dispatch,getState) => {
    dispatch({
        type: SETLOADER,
        payload:value
    })
}