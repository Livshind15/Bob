import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/header/header.components';
import EnvironmentsView from './containers/environmentsView/environmentsView.component';
import EnvironmentView from './containers/environmentView/environmentView.component';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Environments: React.FC = () => (
    <Fragment>
        <Header />
        <EnvironmentsView />
    </Fragment>
);
const Environment: React.FC = () => (
    <Fragment>
        <EnvironmentView />
    </Fragment>
);
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Environments} />
                    <Route path="/environment" component={Environment} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
