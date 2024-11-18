import { InfinitySpin } from "react-loader-spinner";
import { LoadingContainer } from "./styles";

export const Loading = () => {
  return (<LoadingContainer>
    <InfinitySpin height="200" width="200" radius="9" color="#3483fa" ariaLabel="loading"/>
  </LoadingContainer>);
};