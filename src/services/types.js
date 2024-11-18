import axiosRequest from "./axios";

export const getTypes = async () => {
  try{
    const results = await axiosRequest('/types/getTypes');

    return results.data;
  }catch(err){
    return err;
  };
};