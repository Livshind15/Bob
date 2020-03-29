import React from 'react';
import './App.scss';
import Header from './components/header/header.components';
import EnvironmentsView from './components/environmentsView/environmentsView.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <EnvironmentsView/>
    </div>
  );
}

export default App;
