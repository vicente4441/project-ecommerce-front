import { Input } from "../../Input/Input";
import { HeaderContainer, HeaderImage, HeaderImageContainer, HeaderName } from "./styles";

export const Header = ({ name, setName, makeOffer }) => {
  return (<HeaderContainer>
    <HeaderImageContainer>
      <HeaderImage src='../../../../../download.webp'/>
    </HeaderImageContainer>
    {makeOffer ? 
    <Input value={name} setValue={setName} placeholder={'Name'} label={'Enter a name'}/> 
    : 
    <HeaderName>
      {name}
    </HeaderName>}
  </HeaderContainer>)
};