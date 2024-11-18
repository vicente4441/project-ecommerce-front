import { FooterContainer, FooterSection, FooterSectionCopyright, FooterSectionsContainer, FooterSectionText, FooterSectionTitle } from "./styles";

export const Footer = () => {
  return (
  <FooterContainer>
    <FooterSectionsContainer>
      <FooterSection>
        <FooterSectionTitle>Contactanos</FooterSectionTitle>
        <FooterSectionText><i className="bi bi-facebook" style={{marginRight: '5px'}}></i> Facebook</FooterSectionText>
        <FooterSectionText><i className="bi bi-instagram" style={{marginRight: '5px'}}></i> Instagram</FooterSectionText>
        <FooterSectionText><i className="bi bi-twitter-x" style={{marginRight: '5px'}}></i> Twitter</FooterSectionText>
        <FooterSectionText><i className="bi bi-whatsapp" style={{marginRight: '5px'}}></i> +56 778 213 1234</FooterSectionText>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle>Ayuda</FooterSectionTitle>
        <FooterSectionText>Comprar</FooterSectionText>
        <FooterSectionText>Vender</FooterSectionText>
        <FooterSectionText>Resolución de problemas</FooterSectionText>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle>Acerca de</FooterSectionTitle>
        <FooterSectionText>Nosotros</FooterSectionText>
        <FooterSectionText>Preguntas frecuentes</FooterSectionText>
      </FooterSection>
      <FooterSection>
        <FooterSectionTitle>Legal</FooterSectionTitle>
        <FooterSectionText>Terminos y condiciones</FooterSectionText>
        <FooterSectionText>Politicas de privacidad</FooterSectionText>
      </FooterSection>
    </FooterSectionsContainer>
    <FooterSectionCopyright>
      <FooterSectionText> Copyright <i className="bi bi-c-circle"></i> 1999-2024 Vic. exchange S.R.L.</FooterSectionText>
      <FooterSectionText>Creador: Vicente Rodriguez</FooterSectionText>
    </FooterSectionCopyright>
  </FooterContainer>);
};