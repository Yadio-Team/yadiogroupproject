import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getUser } from '../redux/userReducer'

const Register = ({ getUser }) => {
    const [state, setState] = useState({
      userName: '',
      password: ''
    })
  
    const history = useHistory()

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
          [e.target.userName] : e.target.value
      }) 

}

    const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Register)