import React, {Component} from 'react';

import './SignIn.css';

const SignIn = ( {handleSignIn} ) => {
  return (
    <div className="SignIn">
      <button
        className="block"
        onClick={handleSignIn}
      >
        Sign In
      </button>
    </div>
  );
}
export default SignIn;
