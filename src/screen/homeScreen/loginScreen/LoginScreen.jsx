import React from 'react';
import './loginScreen.scss';

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="login"
        />
        <button>Login with google</button>
        <p>This project is made using YOUTUBE data API </p>
      </div>
    </div>
  );
};

export default LoginScreen;
