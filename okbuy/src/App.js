import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Car from './views/Car'
import Login from './views/Login'
import Goods from './views/Goods'
import {
  NavLink,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
          <Router>
              <NavLink to='/' exact style={{color:'blue'}} activeStyle={{color:'red'}} >Home</NavLink>
              <NavLink to='/car' style={{color:'blue'}} activeStyle={{color:'red'}} >Car</NavLink>
              <NavLink to='/goods' style={{color:'blue'}} activeStyle={{color:'red'}} >Goods</NavLink>

              <Route path='/' exact component={Home}  ></Route>
              <Route path='/car' component={Car}  ></Route>
              <Route path='/login' component={Login}  ></Route>
              <Route path='/goods' component={Goods}  ></Route>

          </Router>
    </div>
  );
}

export default App;
