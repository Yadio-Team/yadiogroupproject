import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { getUser } from "../redux/userReducer";
import axios from "axios";

const Auth = ({ getUser }) => {
  const [user, setUser] = useState({
    userName: localStorage.getItem("userName") || "",
    password: "",
    rememberMe: localStorage.getItem("rememberMe") || false,
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

  return (
    <div className="auth">
      <h1 className="auth-title">Sign In</h1>
      <div className="auth-info">
        <input
          className="auth-userName"
          placeholder="User Name"
          name="userName"
          value={userName}
          onChange={handleChange}
        />
        <input
          className="auth-password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
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
