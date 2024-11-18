import styled from "styled-components";

export const PublicationDetailsContainer = styled.div`
  padding: 1vw;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex: 1;

  i{
    color: #3483fa;
  }

  @media screen and (max-width: 720px){
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;