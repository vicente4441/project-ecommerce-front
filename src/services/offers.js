import axiosRequest from "./axios";

export const getOffers = async (action, status, created) => {
  try {
    const results = await axiosRequest.get(`/offers/getAllOffers/${action}/${status}?created=${created}`);

    return results.data;
  }catch(err){
    return err;
  };
};


export const createOffer = async (data) => {
  try{
    const results = await axiosRequest.post('/offers/createOffer', data);

    return results.data
  }catch(err){
    return err;
  };
};

export const acceptOffer = async (data) => {
  try{
    const results = await axiosRequest.post('/offers/acceptedOffer', data);

    return results.data;
  }catch(err){
    return err;
  }
};

export const declineOffer = async (data) => {
  try{
    const results = await axiosRequest.post('/offers/declineOffer', data);

    return results.data;
  }catch(err){
    return err;
  }
}