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
        
        <Route exact path='/infinity-computer-services' component={Home} />
        <Route exact path='/infinity-computer-services/services' component={Services} />
        <Route exact path='/infinity-computer-services/contact' component={ContactUs} />
        <Route exact path='/infinity-computer-services/about' component={AboutUs}/>
        <Route exact path='/infinity-computer-services/user-form' component={UserForm}/>
        <Route exact path='/infinity-computer-services/bad-path' component={NotFound} />
        <Redirect to='/infinity-computer-services'/>
      </Switch>   
  )
}

export default App;
