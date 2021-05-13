import { connect } from "react-redux";
import { logoutUser } from "../redux/userReducer";
import { Link } from "react-router-dom";
import logo from "../assets/logo-icon.png";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUsers,faPodcast,faEdit, faSignOutAlt}  from "@fortawesome/free-solid-svg-icons"

const Header = ({ logoutUser, user }) => {
  return (
    <div className="header-component">
      <Link to="/home" >
        <img className="company-logo" src={logo} alt="logo" />
      </Link>
      <Link to="/about" className="about-icon">
      <FontAwesomeIcon className='icon' icon={faUsers}/>  <p className='text-icon'> About Us</p>
      </Link>
      <Link to="/podcasts" className="podcast-icon">
       <FontAwesomeIcon className='icon' icon={faPodcast}/> <p className='text-icon'> Podcasts</p>
      </Link>
      {/* <Link to="/audio-books" className="audiobook-icon">
        Audiobooks
      </Link> */}
      <Link to="/reviews" className="review-icon">
        <FontAwesomeIcon className='icon' icon={faEdit}/><p className='text-icon'>Podcast Reviews</p>
      </Link>
      <Link
        to="/"
        onClick={() => {
          logoutUser();
        }}
        className="logout"
      >
        <FontAwesomeIcon className='icon' icon={faSignOutAlt}/>
       <p className='text-icon'> Logout</p>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, { logoutUser })(Header);
