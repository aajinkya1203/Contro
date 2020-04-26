import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from './component/layout/IndexPage';
import signin from './component/auth/signin';
import signup from './component/auth/signup';
import dashboard from './component/dashboard/dashboard';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={ IndexPage } />
          <Route path='/signin' component={ signin } />
          <Route path='/signup' component={ signup } />
          <Route path='/home' component={ dashboard } />
          <Route path='/about' component={ dashboard } />
          <Route path='/profile' component={ dashboard } />
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
