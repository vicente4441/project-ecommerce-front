import { Error, InputContainer, InputText, Label } from "./styles";

export const Input = ({ label, type, error, placeholder, value, setValue }) => {
  return (
  <InputContainer>
    {error && <Error>{error}</Error>}
    <Label>{label}</Label>
    <InputText type={type} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
  </InputContainer>
  );
};