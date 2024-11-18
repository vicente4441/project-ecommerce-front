import { ConfigurationCardButton, ConfigurationCardButtonDisable, ConfigurationCardButtonEnable, ConfigurationCardContainer, ConfigurationCardTitle } from "./styles";

export const ConfigurationCard = ({ title , textButton, handleButton , status}) => {
  let renderButton;

  if(status === 'disabled'){
    renderButton = <ConfigurationCardButtonEnable onClick={handleButton}>{ textButton }</ConfigurationCardButtonEnable>
  }else if (status === 'enabled'){
    renderButton = <ConfigurationCardButtonDisable onClick={handleButton}>{ textButton }</ConfigurationCardButtonDisable> 
  }else{
    renderButton = <ConfigurationCardButton onClick={handleButton}>{ textButton }</ConfigurationCardButton>
  };

  return (<ConfigurationCardContainer>
    <ConfigurationCardTitle>{ title }</ConfigurationCardTitle>
    {renderButton}
  </ConfigurationCardContainer>)
};