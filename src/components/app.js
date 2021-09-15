import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Questions from './questions';
import Results from './results';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Questions} />
                <Route exact path="/results" component={Results} />
            </Switch>
        </BrowserRouter>
        )
}


export default App;
