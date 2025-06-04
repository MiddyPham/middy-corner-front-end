import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ButtonContainer, SocialButton } from "./authButtonsStyle";

const AuthButtons = () => {
  const { login } = useAuth();

  const handleLogin = async (provider: 'facebook' | 'google') => {
    try {
      await login(provider);
    } catch (error) {
      console.error(`${provider} login failed:`, error);
    }
  };

  return (
    <ButtonContainer>
      <SocialButton onClick={() => handleLogin('facebook')}>
        <img src="/icons/facebook.svg" alt="Facebook" />
        Continue with Facebook
      </SocialButton>
      <SocialButton onClick={() => handleLogin('google')}>
        <img src="/icons/google.svg" alt="Google" />
        Continue with Google
      </SocialButton>
    </ButtonContainer>
  );
};

export default AuthButtons;
