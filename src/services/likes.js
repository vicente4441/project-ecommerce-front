import axiosRequest from "./axios"

export const createLike = async (idPublication) => {
  try{
    const results = await axiosRequest.post('/likes/createLike', {idPublication});

    return results.data
  }catch(err){
    return err;
  };
};

export const deleteLike = async (idLike) => {
  try{
    const results = await axiosRequest.post(`/likes/deleteLike/${idLike}`);

    return results.data;
  }catch(err){
    return err;
  };
};