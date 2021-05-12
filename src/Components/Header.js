import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";
import logo from "../assets/logo-icon.png";

const Header = ({ logoutUser, user }) => {
  return (
    <div className="header-component">
      <Link to="/home" >
        <img className="company-logo" src={logo} alt="logo" />
      </Link>
      <Link to="/about" className="about-icon">
        About Us
      </Link>
      <Link to="/podcasts" className="podcast-icon">
        Podcasts
      </Link>
      {/* <Link to="/audio-books" className="audiobook-icon">
        Audiobooks
      </Link> */}
      <Link to="/reviews" className="review-icon">
        Podcast Reviews
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
