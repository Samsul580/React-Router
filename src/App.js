import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/team/:teamId">
                        <TeamDetail></TeamDetail>
                    </Route>
                    <Route path="*">
                        <NoMatch></NoMatch>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
