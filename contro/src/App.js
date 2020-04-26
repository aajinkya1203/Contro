import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './component/layout/IndexPage';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={ IndexPage } />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
