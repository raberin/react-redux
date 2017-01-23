import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class RegisterPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // register task
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-8 text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" ref="email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password" />
            </div>
            <button type="submit" className="btn btn-default">Register</button>
          </form>
        </div>

      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
const mapStateToProps = (state) => {
  return { data: state };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(RegisterPage);
