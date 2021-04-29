import { useState } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { getUser } from '../redux/userReducer'
import Register from './Register'
import axios from 'axios';



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

      const changeHandler = e => setState({
          ...state,
          [e.target.name] : e.target.value
      })
      return (
        <div className='auth'>
          <h1 className='auth-title'>Sign In</h1>
          <form className='auth-info' onSubmit={(e => loginUser(e))}>
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
           <button className='sign-in-button' type='submit'>Sign in</button>
           <button className='register-button' type='submit'>Register</button>
          </form>
        </div>
      ) 

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth);