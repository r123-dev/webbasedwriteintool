import React from 'react';
import { Button } from 'antd';
import { GoogleLogin } from 'react-google-login';
import { auth } from '../firebase.config';
import { FcGoogle } from 'react-icons/fc';
import { signInWithRedirect, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoogleLoginButton = () => {
  const provider = new GoogleAuthProvider();

  const onGoogleAuthHandler = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      
      await signInWithRedirect(auth, provider); // Use 'provider' directly here
      alert(success.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    
      
        <Button className="login-btn" onClick={onGoogleAuthHandler}><FcGoogle /></Button>
    
  );
}

export default GoogleLoginButton;

