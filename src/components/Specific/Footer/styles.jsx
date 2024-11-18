import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 30vh;
  background-color: whitesmoke;
  border-top: 1px solid lightgray;

  @media screen and (max-width: 720px){
    padding-bottom: 70px;
  }
`;

export const FooterSectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

export const FooterSectionTitle = styled.h3`
  font-size: 1.1em;
  color: #3483fa;
  text-decoration: underline;
`;

export const FooterSectionText = styled.p`
  font-size: 0.85em;
  cursor: pointer;
  transition: color .25s;

  &:hover{
    color: grey;
  };
`;

export const FooterSectionCopyright = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media screen and (max-width: 720px){
    flex-direction: column;
  }
`;