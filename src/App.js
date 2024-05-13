import {Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home'
import Services from './components/Services'
import NotFound from './components/NotFound'
import ContactUs from './components/ContactUs'
// import FAQ from './components/FAQ'
import UserForm from './components/UserForm'
import AboutUs from './components/AboutUs'
import './App.css';

function App() {
  return ( 
      <Switch>
        
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/about' component={AboutUs}/>
        <Route exact path='/user-form' component={UserForm}/>
        <Route exact path='/bad-path' component={NotFound} />
        <Redirect to='/'/>
      </Switch>   
  )
}

export default App;
