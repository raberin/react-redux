import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {LoginForm} from '../../components';
import { login } from '../../actions/authActions';

import './login.css'

class Login extends PureComponent {
    state = {
        username: '',
        password: '',
        rememberme: false
    }

    handleInputChange = ({ target }) => {
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    login = (event) => {
        const { login } = this.props.actions;
        event.preventDefault();
        login(this.state.username);

    }

    render() {
        const { username, password, rememberme } = this.state;
        return (
            <div className="login-container">
                <LoginForm onLogin={this.login} handleInputChange={this.handleInputChange} username={username} password={password} rememberme={rememberme} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { data: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            login,
        }, dispatch),
    };
};

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Login);
