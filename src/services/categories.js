import axiosRequest from "./axios"

export const getCategories = async () => {
  try{
    const results = await axiosRequest('/categories/getCategories');

    return results.data;
  }catch(err){
    return err;
  };
};