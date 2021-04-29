import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";

const Header = ({ logoutUser, user }) => {
  return (
    <div className="header-component">
      <Link to="/" className="company-logo">
        Company Logo
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
      <Link to="/create-review" className="review-icon">
        Create Review
      </Link>
      <Link
        to="/auth"
        onClick={() => {
          logoutUser();
        }}
        className="logout"
      >
        Logout
      </Link>

      <Link to="/search-results" className="search">
        Search bar/icon
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutUser })(Header);
