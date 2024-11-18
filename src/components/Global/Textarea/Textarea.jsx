import { TextareaContainer, Label, Error, TextareaStyled} from "./styles";

export const Textarea = ({ label, error, placeholder, value, setValue, rows }) => {
  return (<TextareaContainer>
    {error && <Error>{error}</Error>}
    <Label>{label}</Label>
    <TextareaStyled rows={rows} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
  </TextareaContainer>)
};
