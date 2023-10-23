import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateWithGoogle } from '../../redux/slices/authSlice';
import './loginScreen.scss';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const { accessToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(authenticateWithGoogle());
  };

  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="login"
        />
        <button onClick={() => handleLogin()}>Login with google</button>
        <p>This project is made using YOUTUBE data API </p>
      </div>
    </div>
  );
};

export default LoginScreen;
