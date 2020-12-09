import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import "./styles.scss";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "./../../assets/logo.png";
// import { signOutUserStart } from "../../redux/user/user.actions";

// const mapState = ({ user }) => ({
//   currentUser: user.currentUser
// });

const Header = props => {
  // const dispatch = useDispatch();
  // const { currentUser } = useSelector(mapState);

  // const signOut = () => {
  //   dispatch(signOutUserStart());
  // };

  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Ana Carolina logo" />
          </Link>
        </div>

        <nav className="navbig">
          <div className="navbar">
          <ul>
          <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#eventos">Eventos</a>
            </li>
            <li>
              <a href="/#historia">História</a>
            </li>
            <li>
              <a href="/#sobre">Sobre Caicó</a>
            </li>
            <li>
              <a href="/#contato">Contato</a>
            </li>
          </ul>
          </div>

          <div className="callToActions">

          <ul>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>

          </ul>
          </div>
        </nav>

        
          {/* {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => signOut()}>
                    Logout
                </span>
              </li>
            </ul>
          )}

          {!currentUser && (
            <ul>
              <li>
                <Link to="/register">Register</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )} */}
          
        <nav className="nav-small">

        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
