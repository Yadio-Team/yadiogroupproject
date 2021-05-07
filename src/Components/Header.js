import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import logo from "../assets/logo-icon.png"

const Header = ({ logoutUser, user }) => {
  return (
    <div className="header-component">
      <Link to="/home" className="company-logo">
        <img src={logo} alt-text='logo'/>
      </Link>
      <Link to="/about" className="about-icon">
        About Us
      </Link>
      <Link to="/podcasts" className="podcast-icon">
        Podcasts
      </Link>
      <Link to="/audio-books" className="audiobook-icon">
        Audiobooks
      </Link>
      <Link to="/create" className="review-icon">
        Create Review
      </Link>
      <Link
        to="/"
        onClick={() => {
          logoutUser();
        }}
        className="logout"
      >
        Logout
      </Link>

    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutUser })(Header);
