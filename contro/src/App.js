import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './component/layout/IndexPage';
import signin from './component/auth/signin';
import signup from './component/auth/signup';
import dashboard from './component/dashboard/dashboard';
import Todos from './component/activities/Todos';
import Reminders from './component/activities/Reminders';
import Notes from './component/activities/Notes';
import NoteDetail from './component/activities/NotesActs/NoteDetail';
import about from './component/layout/about';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Switch>
          <Route exact path='/' component={ IndexPage } />
          <Route path='/signin' component={ signin } />
          <Route path='/signup' component={ signup } />
          <Route exact path='/home' component={ dashboard } />
          <Route path='/about' component={ about } />
          <Route path='/profile' component={ dashboard } />
          <Route path='/home/Todos' component={ Todos } />
          <Route path='/home/Reminders' component={ Reminders } />
          <Route path='/home/Notes/:id' component={ NoteDetail } />
          <Route path='/home/Notes' component={ Notes } />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
  
}

export default App;
