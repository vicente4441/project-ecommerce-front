import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;

export const PublicationButton = styled.button`
  background-color: #3483fa;
  font-size: 15px;
  width: 100px;
  padding: 10px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .25s;
  
  &:hover{
    background-color: #1e6dff;
  }
`;

export const PublicationUser = styled.div`
  color: #3483fa;
  text-decoration: underline;
`;