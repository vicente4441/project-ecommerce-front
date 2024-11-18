import React from 'react';
import { LogInButton, LogInButtonsContainer, LogInFormContainer, LogInTitle } from './styles';
import { Input } from '../../Global/Input/Input';
import { LoadingButton } from '../../Global/LoadingButton/LoadingButton';

export const LogInForm = ({ title, email, password, setEmail, setPassword, handleSubmit, loading }) => {
  return (
  <LogInFormContainer>
    <LogInTitle>{title}</LogInTitle>
    <Input label='Email' type='text' placeholder='Enter a email' value={email} setValue={setEmail}/>
    <Input label='Password' type='password' placeholder='Enter a password' value={password} setValue={setPassword}/>
    <LogInButtonsContainer>
      {loading ? 
        <LoadingButton/>
      : 
        <LogInButton onClick={handleSubmit}>Continue</LogInButton>
      }
    </LogInButtonsContainer>
  </LogInFormContainer>)
};