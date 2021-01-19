import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import { AllUsers, Footer, Header, Main, User } from './components';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/allusers' component={AllUsers} />
        <Route path='/user' component={User} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
