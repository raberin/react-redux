import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Sidebar,
  Header
} from '../../components';

import { logout } from '../../actions/authActions';


class Dashboard extends PureComponent {
  render() {
    const { logout } = this.props.actions;
    return (
      <div className='main'>
       <Sidebar />
       <Header logout={logout}/>
      </div>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    actions: bindActionCreators({
        logout,
    }, dispatch),
};
})(Dashboard);
