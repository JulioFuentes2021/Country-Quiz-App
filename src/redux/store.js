import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { countryReducer } from './countryDuck';

const rootReducer = combineReducers({
    countries:countryReducer
});
//This method is wrong
// const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

//ComposeWithDevtools
//Connect the chrome redux store to see different states

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(reduxThunk)))
    return store
}