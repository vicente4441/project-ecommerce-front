import axiosRequest from "./axios"

export const getUser = async (id) => {
  try{  
    const results = await axiosRequest.get(`/user/getUser/${id}`);

    return results.data;
  }catch(err){
    return err;
  };
};

export const getMe = async () => {
  try{
    const results = await axiosRequest.get('/user/getMe');

    return results.data
  }catch(err){
    return err;
  };
};

export const getUsersSummary = async (search) => {
  try{
    const results = await axiosRequest.post('/user/getUsersSummary', {search});
    
    return results.data;
  }catch(err){
    return err;
  }
}

export const getUsers = async (search, created) => {
  try{
    const results = await axiosRequest.get(`/user/getUsers?search=${search}&created=${created}`);

    return results.data;
  }catch(err){
    return err;
  };
};

export const updateUsername = async (data) => {
  try{
    const results = await axiosRequest.post('/user/updateUsername', data);

    return results.data;
  }catch(err){
    return err;
  };
};

export const updateEmail = async (email) => {
  try{
    const results = await axiosRequest.post('/user/updateEmail', {email});

    return results.data;
  }catch(err){
    return err;
  };
};

export const updatePassword = async (password) => {
  try{
    const results = await axiosRequest.post('/user/updatePassword', {password});

    return results.data;
  }catch(err){
    return err;
  };
};

export const disableAccount = async () => {
  try{
    const results = await axiosRequest.post('/user/disableAccount');

    return results.data;
  }catch(err){
    return err;
  };
};

export const enableAccount = async () => {
  try{
    const results = await axiosRequest.post('/user/enableAccount');

    return results.data
  }catch(err){
    return err;
  };
};