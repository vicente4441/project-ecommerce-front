import React, { useEffect, useState } from 'react';
import { SignUpContainer } from './styles';
import { register, verifyCode } from '../../services/auth';
import { SignUpForm } from '../../components/Specific/SignUpForm/SignUpForm';
import { AxiosError } from 'axios';
import { VerifyCode } from '../../components/Specific/VerifyCode/VerifyCode';
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import { City, Country, State } from 'country-state-city';
import { useDispatch } from 'react-redux';
import { showPopupAdvice } from '../../redux/slices/popup';
import { setAccess, setUser } from '../../redux/slices/auth';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [listCountries, setListCountries] = useState([]);
  const [listStates, setListStates] = useState([]);
  const [listCities, setListCities] = useState([]);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState('');
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  
  const navigate = useNavigate()

  const handleSubmitVerifyCode = async (e) => {
    e.preventDefault();
    setLoading(true);

    const obj = {
      name,
      lastName,
      email,
      password,
      rePassword,
      country: country.value,
      city: city.value,
      state: state.value
    };

    const results = await verifyCode(obj);

    if(results && !(results instanceof AxiosError)){
      setStep(1)
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };

    setLoading(false);
  };

  const handleSubmitSignUp = async (e) => {
    setLoading(true);

    const obj = {
      code,
      user: {
        name,
        lastName,
        email,
        password,
        rePassword,
        country: country.value,
        city: city.value,
        state: state.value
      },
    };

    const results = await register(obj)

    if(results && !(results instanceof AxiosError)){
      Cookies.set('token', results.data.token)
      dispatch(setUser(results.data.data));
      dispatch(setAccess(false));
      navigate('/')
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }))
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }))
    };

    setLoading(false);
  };

  const handleSelectCountry = (data) => {
    setCountry(data);
    const newArrayStates = State.getStatesOfCountry(data.code).map((state) => {
      return {
        value: state.name,
        label: state.name,
        code: state.isoCode
      }
    });
    
    setListStates(newArrayStates);
  }

  const handleSelectState = (data) => {
    setState(data);

    const newArrayCities = City.getCitiesOfState(country.code, data.code).map((city) => {
      return {
        value: city.name,
        label: city.name,
        code: city.stateCode
      }
    });

    setListCities(newArrayCities);
  };

  const handleSelectCity = (data) => setCity(data)

  useEffect(() => {
    const newArrayCountries = Country.getAllCountries().map((country) => {
     return {
      value: country.name,
      label: country.name,
      code: country.isoCode
     } 
    });

    setListCountries(newArrayCountries);
  }, []);


  return (
    <SignUpContainer>
      {step === 0 && <SignUpForm title='Sign Up' name={name} lastName={lastName} email={email} password={password} rePassword={rePassword} setName={setName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword} setRePassword={setRePassword} handleSubmit={handleSubmitVerifyCode} listCountries={listCountries} country={country} setCountry={handleSelectCountry} listStates={listStates} state={state} setState={handleSelectState} listCities={listCities} city={city} setCity={handleSelectCity} loading={loading}/>}
      {step === 1 && <VerifyCode title='Verificar codigo' code={code} setCode={setCode} handleSubmit={handleSubmitSignUp} loading={loading}/>}
    </SignUpContainer>
  )
};