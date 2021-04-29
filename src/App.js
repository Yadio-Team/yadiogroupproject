import React from 'react'
import logo from './logo.svg';
// import './App.css';
import './Components/Styles/app.scss';
import Auth from './Components/Auth'
import routes from './routes';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
