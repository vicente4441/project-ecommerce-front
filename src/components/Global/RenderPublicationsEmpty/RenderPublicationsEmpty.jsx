import { RenderPublicationsEmptyContainer } from "./styles";

export const RenderPublicationsEmpty = ({ text }) => {
  return (<RenderPublicationsEmptyContainer>
    <p>{text}</p>
  </RenderPublicationsEmptyContainer>)
};