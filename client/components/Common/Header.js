import React, { PropTypes } from 'react';
// import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  return (
    <nav>
      {/* <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/dashboard" activeClassName="active">Dashboard</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link> */}
      <div>
        {/* {!props.isLoggedIn && <Link to="/login" activeClassName="active">Login</Link>} */}
        {/* {props.isLoggedIn && <span>{ 'Welcome ' + props.userEmail}</span>} */}
        {props.isLoggedIn && <a href="#" className="btn" onClick={::props.logout}>Logout</a>}
      </div>
    </nav>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  // userEmail: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};
export default Header;
