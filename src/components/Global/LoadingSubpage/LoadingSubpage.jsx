import { InfinitySpin } from "react-loader-spinner";
import { LoadingSubpageContainer } from "./styles";

export const LoadingSubpage = () => {
  return (<LoadingSubpageContainer>
    <InfinitySpin height="200" width="200" radius="9" color="#3483fa" ariaLabel="loading"/>
  </LoadingSubpageContainer>)
};