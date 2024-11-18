import ReactSelect from "react-select"
import { Error, Label, SelectContainer } from "./styles";

const styles = {
  control: (styles) => ({...styles, fontSize: '0.85rem'})
}

export const Select = ({ placeholder, value, setValue, listOptions, error, label, defaultValue, disabled }) => {

  return (
    <SelectContainer>
      {error && <Error>{error}</Error>}
      <Label>{label}</Label>
      <ReactSelect styles={styles} options={listOptions} defaultValue={defaultValue} placeholder={placeholder} value={value} onChange={(value) => setValue(value)} isDisabled={disabled}/>
    </SelectContainer>
  )
};