import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { FBLogin } from '../../components';

class LoginPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      role: 'manager',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
  }

  handleRoleChange(event, index, role) {
    this.setState({ role });
  }
  handleLogin(event) {
    event.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const { role } = this.state;
    this.props.actions.login({ email, password, role });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 text-center">
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" ref="email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password" />
            </div>
            <button type="submit" className="btn btn-default">Login</button>
          </form>
          <br />
          {/*
            uncomment this line for facebook login 
            <FBLogin />
          */}
        </div>

      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => {
  return { data: state.auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      login,
    }, dispatch),
  };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
