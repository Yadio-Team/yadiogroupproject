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
          [e.target.userName] : e.target.value
      }) 

}

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth);