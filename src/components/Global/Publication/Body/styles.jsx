import styled from "styled-components";

export const BodyContainer = styled.div`
`;

export const PublicationDescription = styled.p`
  padding: 0px 10px;
  margin: 10px 0px;
  line-height: 20px;
  font-size: .85em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-wrap: wrap;
`;

export const PublicationPriceQuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const PublicationPrice = styled.div`
  font-size: 1rem;
  color: #3483fa;
  font-size: 0.9em;
`;

export const PublicationQuantity = styled.div`
  font-size: 15px;
  font-size: 0.9em;
`;

export const PublicationCategorie = styled.p`
  padding: 10px 15px;
  color: #3483fa;
  text-align: end;
  font-size: 0.9em;
`;

export const PublicationTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 0.9em;
  color: #3483fa;
`;