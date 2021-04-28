import { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { getUser } from '../redux/userReducer'

import axios from 'axios';
import Header from './Header'



const Auth = ({ getUser }) => {
    const [state, setState] = useState({
      userName: '',
      password: ''
    })
  
    const history = useHistory()
 

    const loginUser = async (e) => {
        e.preventDefault()
        const { userName, password } = state
    
        try {
          const user = await axios.post('/auth/login', { userName, password })
          getUser(user.data)
          history.push('/')
        } catch (err) {
          console.log(err)
        }
      }
      const registerUser = async (e) => {
        e.preventDefault()
        const { userName, password } = state
    
        try {
          const user = await axios.post('/auth/register', { userName, password })
          getUser(user.data)
          history.push('/')
        } catch (err) {
          console.log(err)
        }
      }

      const changeHandler = e => setState({
          ...state,
          [e.target.name] : e.target.value
      })
      return (
        <div className='auth'>
          <h1 className='auth-title'>Sign In</h1>
          <div className='auth-info' >
            <input
              className='auth-userName'
              placeholder='User Name'
              name='userName'
              onChange={(e) => changeHandler(e)}
            />
            <input
              className='auth-password'
              placeholder='Password'
              name='password'
              onChange={(e) => changeHandler(e)}
            />
            <Header/>
           <button className='sign-in-button' type='submit' onClick={loginUser}>Sign in</button>
           <button className='register-button' type='submit'onClick={registerUser}>Register</button>
          </div>
        </div>
      ) 

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth);