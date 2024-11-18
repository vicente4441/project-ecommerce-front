import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-right: 10px;
  position: sticky;
  top: 10px;
  align-self: start;
  padding: 20px 0px;
  min-width: 350px;
  max-width: 350px;
`;
  
export const MenuItem = styled.div`
  padding: 15px 20px;
  width: 100%;
`;

export const ListCategories = styled.div`
  margin-top: 10px;
`;

export const Categorie = styled.div`
  padding: 7px 20px;
  color: grey;
  cursor: pointer;
  transition: .25s border-color;
  margin-top: 5px;
  border-bottom: 1px solid lightgray;
  
  &:hover{
    border-bottom: 1px solid gray;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.input`
  border: 1px solid lightgray;
  width: 100px;
  padding: 5px 10px;
  font-size: 0.7rem;
  border-radius: 5px;
`;

export const ButtonMenu = styled.button`
  padding: 5px 10px;
  background-color: #3483FA;
  color: white;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: .25s background-color;

  &:hover{
    background-color: #1e6dff; 
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  gap: 10px;
  align-items: center;
  justify-content: start;
`;

export const Search = styled.input`
  border: 1px solid lightgray;
  padding: 5px 10px;
  font-size: 0.8rem;
  width: 100%;
  border-radius: 5px;
`;