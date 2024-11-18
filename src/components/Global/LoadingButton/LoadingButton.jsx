import { InfinitySpin } from "react-loader-spinner";
import { LoadingButtonContainer } from "./style";

export const LoadingButton = ({ height = 150, width = 150 }) => {
  return (<LoadingButtonContainer>
    <InfinitySpin height={height} width={width} radius="9" color="#3483fa" ariaLabel="loading"/>
  </LoadingButtonContainer>);
};