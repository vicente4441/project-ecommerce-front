import React, { useState } from 'react';
import { LogInContainer} from './styles';
import { LogInForm } from '../../components/Specific/LogInForm/LogInForm';
import { logIn } from '../../services/auth';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setAccess, setUser } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { showPopupAdvice } from '../../redux/slices/popup';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      email,
      password
    };

    const results = await logIn(obj);

    if(results && !(results instanceof AxiosError)){
      Cookies.set('token', results.data.token)
      dispatch(setUser(results.data.data));
      dispatch(setAccess(true));
      navigate('/');
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    }
    setLoading(false);
  };

  return (
  <LogInContainer>
    <LogInForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} loading={loading}/>
  </LogInContainer>);
};
