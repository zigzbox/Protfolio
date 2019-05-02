import React from 'react';
import HelloWorld from '/HelloWorld'
import ContactPage from '/ContactPage'
// import ArtDumb from '/ArtDumb'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar'


function App() {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Switch>
        <Route exact path='/' component={HelloWorld}/>
        {/* <Route path='/ArtDumb' component={ArtDumb}/> */}
        <Route path='/C:\Users\glenh\projects\profolio\src\ContactPage.js' component={ContactPage}/>
      </Switch>
    </div>
  );
}

export default App;
