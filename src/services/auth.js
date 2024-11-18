import axiosRequest from "./axios.js";

export const logIn = async (data) => {
  try{
    const results = await axiosRequest.post('/auth/logIn', data);

    return results.data;
  }catch(err){
    return err;
  }; 
};

export const register = async (data) => {
  try{
    const results = await axiosRequest.post('/auth/register', data);

    return results.data;
  }catch(err){
    return err;
  };
};

export const verifyCode = async (data) => {
  try{
    const results = await axiosRequest.post('/auth/sendCodeToEmail', data);

    return results.data;
  }catch(err){
    return err;
  };
};