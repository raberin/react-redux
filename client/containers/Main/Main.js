// This component handles the App template used on every page
// basic layout of the app
import React, { PropTypes } from 'react';
import { Header, Footer } from '../../components';

const App = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;
