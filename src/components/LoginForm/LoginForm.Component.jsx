import React from 'react';
import {Input} from '../common';

export default ({ username, password, rememberme, handleInputChange, onLogin }) => {
  return (
    <div className="card">
      <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="" />
      <form>
        <Input label="Username" name="username" value={username} onChange={handleInputChange}/>
        <Input label="Password" name="password" type="password" value={password} onChange={handleInputChange}/>
        <Input label="Remember me" name="rememberme" type="checkbox" value={rememberme} onChange={handleInputChange} />
        <button className="btn btn-lg btn-primary btn-block btn-signin" onClick={onLogin}>Sign in</button>
      </form>
    </div>
  );
};
