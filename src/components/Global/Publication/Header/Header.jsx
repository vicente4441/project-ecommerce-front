import { HeaderContainer, PublicationAdvice, PublicationImage, PublicationImageContainer, PublicationLike, PublicationTitle } from "./styles";

export const Header = ({ title, like, offerFinalized }) => {
  return (
  <HeaderContainer>
    {like?.length > 0 && <PublicationAdvice><i class="bi bi-hand-thumbs-up-fill"></i></PublicationAdvice>}
    {offerFinalized > 0 && <PublicationAdvice><i class="bi bi-patch-check-fill"></i></PublicationAdvice>}
    <PublicationImageContainer>
      <PublicationImage src='../../../../../download.webp'/>
    </PublicationImageContainer>
    <PublicationTitle>{title}</PublicationTitle>
  </HeaderContainer>
)};