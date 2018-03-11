import React from 'react';
import './CurrentUser.css';

const CurrentUser = ({currentUser}) => {
  return (
    <div className="CurrentUser">
      <img
        className="CurrentUser--photo"
        src={ currentUser.photoURL }
        alt={ currentUser.displayName }
      />
      <div className="CurrentUser--identification">
        <h3 className="CurrentUser--displayName">{ currentUser.displayName }</h3>
        <p className="CurrentUser--email">{ currentUser.email }</p>
      </div>
    </div>
  );
};
export default CurrentUser;
