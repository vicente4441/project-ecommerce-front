import styled from "styled-components";

export const UserPublicationsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 20px;
`;

export const PublicationsContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const Publications = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const UserPublicationsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;