import React from 'react';
import {BrowserRouter as Router,NavLink,Route,Switch}from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Detail from './components/detail/Detail';
import Single from './components/single/Single';
import Head from "./components/head/Head";
import Foot from "./components/foot/Foot";
function App() {
    if(window.location.href == 'http://localhost:3000/login'){
        return (
            <div className="App">
                <Router>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/single/:id' component={Single}/>
                </Router>
            </div>
        );
    }else{
        return (
            <div className="App">
                <Router>
                    <Head/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/detail' component={Detail}/>
                    <Route path='/single/:id' component={Single}/>
                    <Foot/>
                </Router>
            </div>
        );
    }
}

export default App;

