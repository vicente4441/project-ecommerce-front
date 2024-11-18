import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Search = styled.input`
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 5px;

  @media screen and (max-width: 1024px){
    font-size: 0.9em
  }
`;

export const SearchDelete = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: lightgray;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;
`;