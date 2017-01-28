/**
 * Main Component. Holds the Application layout
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../components';
import { logout } from '../../actions';

class Main extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._logout = this._logout.bind(this);
  }

  _logout() {
    this.props.dispatch(logout());
  }
  render() {
    return (
      <div>
        <Header isLoggedIn={this.props.isLoggedIn} logout={this._logout}/>
        {this.props.children}
      </div>
    );
  }
}
// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};

export default connect(mapStateToProps)(Main);
