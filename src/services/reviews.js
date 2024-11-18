import axiosRequest from "./axios";

export const getReview = async (idUser) => {
  try{
    const results = await axiosRequest.get(`/reviews/getReviews/${idUser}`);

    return results.data;
  }catch(err){
    return err;
  };
};


export const createReview = async (idUser, data) => {
  try{
    const results = await axiosRequest.post(`/reviews/createReview/${idUser}`, data);

    return results.data;
  }catch(err){
    return err;
  };
};