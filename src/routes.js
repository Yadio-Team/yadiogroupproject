import React from 'react'
import Auth from './Components/Auth'
import Home from './Components/Home'
import {HashRouter as Switch, Route} from 'react-router-dom'

export default(
    <Switch>
        <Route exact path="/" component={Auth}/>
        <Route path="/home" component={Home}/>
        
    </Switch>

)
