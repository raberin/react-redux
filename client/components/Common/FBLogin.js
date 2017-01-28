import React, { Component, PropTypes } from 'react';
import config from '../../../server/config';
console.log(config);
class FBLogin extends Component {
  constructor(props) {
    super(props);
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  componentDidMount() {
    window.fbAsyncInit = () => {
      FB.init({
        appId      : config.auth.facebook.appId,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.getLoginStatus(response => {
        this.statusChangeCallback(response);
      })
      FB.AppEvents.logPageView();
    }
  }

  statusChangeCallback(response) {
    console.log(response);
  }
  checkLoginState() {
    FB.getLoginStatus(response => {
      this.statusChangeCallback(response);
    })
  }
  handleFBLogin() {
    FB.login((response) => {
      this.statusChangeCallback(response);
    });
  }
  render() {
    return (
      <div className="container">
        <a href="#" onClick={this.handleFBLogin}>Login</a>
      </div>
    );
  }
}

export default FBLogin;
