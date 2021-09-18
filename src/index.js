import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Question from './components/questions';
import { Provider } from 'react-redux';
import { ContextProvider } from '../src/LogicGlobal/variables';
import generateStore from './redux/store';

const container = document.getElementById('root')
const store = generateStore()


ReactDOM.render(
    <Provider store={store}>
        <ContextProvider>'
            <Question/>
        </ContextProvider>
    </Provider>,
    container);


