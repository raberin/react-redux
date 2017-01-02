import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.login = this.props.login;
  }
  render () {
    return (
      <form onSubmit={this.handleLogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" ref="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password"/>
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-default">Login</button>
      </form>
    );
  }

   handleLogin(event) {
    event.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		login({email, password})
  }
}

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => {
  return {data: state};
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user)())
    }
  }
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
