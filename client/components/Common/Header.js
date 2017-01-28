import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = (props) => {
  return (
    <nav>
      <div>
        {!props.isLoggedIn && <Link to="/login" activeClassName="active">Login</Link>}
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
