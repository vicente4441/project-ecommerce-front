import React from 'react';
import { Input } from '../../Global/Input/Input';
import { VerifyCodeButton, VerifyCodeContainer, VerifyCodeTitle } from './styles';
import { LoadingButton } from '../../Global/LoadingButton/LoadingButton';

export const VerifyCode = ({ title, code, setCode, handleSubmit, loading }) => {
  return (
  <VerifyCodeContainer>
    <VerifyCodeTitle>{title}</VerifyCodeTitle>
    <Input label='Ingresa el codigo enviado a tu email' value={code} setValue={setCode}/>
    {loading ? <LoadingButton/> : <VerifyCodeButton onClick={handleSubmit}>Enviar</VerifyCodeButton>}
  </VerifyCodeContainer>
  )
}
