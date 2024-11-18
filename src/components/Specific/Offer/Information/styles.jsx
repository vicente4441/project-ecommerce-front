import styled from "styled-components";

export const InformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i{
    color: #3483fa;
  }

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
  }
`;
