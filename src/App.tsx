import React from 'react';
import './App.scss';
import Header from './components/header/header.components';
import EnvironmentsView from './containers/environmentsView/environmentsView.component';
import EnvironmentView from './containers/environmentView/environmentView.component';

function App() {
    return (
        <div className="App">
            {/* <Header />
            <EnvironmentsView /> */}
            <EnvironmentView />
        </div>
    );
}

export default App;
