import React from 'react';
import { SignUpButton, SignUpButtonsContainer, SignUpFormContainer, SignUpTitle } from './styles';
import { Input } from '../../Global/Input/Input';
import { Select } from '../../Global/Select/Select';
import { LoadingButton } from '../../Global/LoadingButton/LoadingButton';

export const SignUpForm = ({ title, name, lastName, email, password, rePassword, country, state, city, setName, setLastName, setEmail, setPassword, setRePassword, setCountry, setState, setCity, handleSubmit, listCountries, listStates, listCities, loading }) => {
  return(
    <SignUpFormContainer>
      <SignUpTitle>{title}</SignUpTitle>
      <Input type='text' label='Name' placeholder='Enter a name' value={name} setValue={setName}/>
      <Input type='text' label='Last name' placeholder='Enter a last name' value={lastName} setValue={setLastName}/>
      <Input type='email' label='Email' placeholder='Enter a email' value={email} setValue={setEmail}/>
      <Select label='Country' placeholder='Choose a country' listOptions={listCountries} value={country} setValue={setCountry}/>
      <Select label='State' placeholder='Choose a state' listOptions={listStates} value={state} setValue={setState}/>
      <Select label='City' placeholder='Choose a city' listOptions={listCities} value={city} setValue={setCity}/>
      <Input type='password' label='Password' placeholder='Enter a password' value={password} setValue={setPassword}/>
      <Input type='password' label='Re-password' placeholder='Repeat password' value={rePassword} setValue={setRePassword}/>
      {loading ? <LoadingButton/> : <SignUpButtonsContainer>
        <SignUpButton onClick={handleSubmit}>Create</SignUpButton>
      </SignUpButtonsContainer>}
    </SignUpFormContainer>
  )
};