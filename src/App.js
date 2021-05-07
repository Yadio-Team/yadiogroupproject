import React from 'react'
import logo from './logo.svg';
// import './App.css';
import './Components/Styles/app.scss';
import Auth from './Components/Auth'
import routes from './routes';
import background from './assets/image0.jpg'


function App() {
  return (
    <div className="App">
      {/* <img className='background' src = {background} alt text='background'/> */}
      {routes}
    </div>
  );
}

export default App;
