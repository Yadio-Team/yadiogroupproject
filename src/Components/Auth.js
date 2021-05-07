import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { getUser } from "../redux/userReducer";
import axios from "axios";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import logo from '../assets/logo.png'

const Auth = ({ getUser }) => {
  const [user, setUser] = useState({
    userName: localStorage.getItem("userName") || "",
    password: "",
    rememberMe: localStorage.getItem("rememberMe") || false,
  });
  const [values, setValues] = useState({
    showPassword: false,
  });

  const history = useHistory();
  const { userName, password, rememberMe } = user;

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post("/auth/login", { userName, password });
      getUser(user.data);
      handleFormSubmit();
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const user = await axios.post("/auth/register", { userName, password });
      getUser(user.data);
      handleFormSubmit();
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("userName", userName);
  }, [userName, rememberMe]);

  const handleChange = (event) => {
    const input = event.target;
    const checkValue = input.checked === "false" ? false : true;
    const value = input.type === "checkbox" ? checkValue : input.value;

    setUser({ ...user, [input.name]: value });
  };

  const handleFormSubmit = () => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("userName", rememberMe ? userName : "");
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="auth">
      <img className='logo' src={logo} alt-text='logo'/>
      <h1 className="auth-title">Sign In</h1>
      <div className="auth-info">
        <input
          className="auth-userName"
          placeholder="User Name"
          name="userName"
          value={userName}
          onChange={handleChange}
        />
        <Input
          className="auth-password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
          type={values.showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        
        <input
          className="remember-me"
          name="rememberMe"
          value={rememberMe}
          // checked={rememberMe}
          onChange={handleChange}
          type="checkbox"
        />{" "}
        Remember me
        <button className="sign-in-button" type="submit" onClick={loginUser}>
          Sign in
        </button>
        <button
          className="register-button"
          type="submit"
          onClick={registerUser}
        >
          Register
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { getUser })(Auth);
