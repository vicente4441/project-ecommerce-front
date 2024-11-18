import axiosRequest from "./axios"

export const getAllPublications = async (search, categorie, initialPrice, finalPrice, page) => {
  try{
    const results = await axiosRequest.get(`/publications/getAllPublications?search=${search}&categorie=${categorie}&initialPrice=${initialPrice}&finalPrice=${finalPrice}&page=${page}`);

    return results.data
  }catch(err){
    return err;
  }
};

export const getSummaryPublications = async (id) => {
  try{
    const results = await axiosRequest.get(`/publications/getUserSummaryPublications/${id}`);

    return results.data;
  }catch(err){
    return err;
  }
};

export const getMePublications = async (search, categorie, initialPrice, finalPrice, page) => {
  try{
    const results = await axiosRequest.get(`/publications/getMePublications?search=${search}&categorie=${categorie}&initialPrice=${initialPrice}&finalPrice=${finalPrice}&page=${page}`);

    return results.data;
  }catch(err){
    return err;
  };
};

export const getPublication = async (id) => {
  try{
    const results = await axiosRequest.get(`/publications/getPublication/${id}`);

    return results.data;
  }catch(err){
    console.log(err);
  };
};

export const getLikedPublications = async (search, categorie, initialPrice, finalPrice) => {
  try{
    const results = await axiosRequest.get(`/publications/getLikedPublications?search=${search}&categorie=${categorie}&initialPrice=${initialPrice}&finalPrice=${finalPrice}`);
    console.log(results)

    return results.data;
  }catch(err){
    return err;
  };
};

export const getSummaryLikedPublications = async () => {
  try{
    const results = await axiosRequest('/publications/getSummaryLikedPublications');

    return results.data;
  }catch(err){
    return err;
  };
};

export const getPublicationsByCategorieAndType = async (data) => {
  try{
    const results = await axiosRequest.post('/publications/getPublicationsByCategorieAndType', data);

    return results.data;
  }catch(err){
    return err;
  };
};

export const getUserPublications = async (idUser, search, categorie, initialPrice, finalPrice, page) => {
  try{
    const results = await axiosRequest.get(`/publications/getUserPublications/${idUser}?search=${search}&categorie=${categorie}&initialPrice=${initialPrice}&finalPrice=${finalPrice}&page=${page}`);

    return results.data;
  }catch(err){
    return err;
  };
};

export const getCountPublicationsAndOffersCompleted = async (idUser) => {
  try{
    const results = await axiosRequest(`/publications/getCountPublicationsAndOffersCompleted/${idUser}`);

    return results.data;
  }catch(err){
    return err;
  };
};

export const createPublication = async (data) => {
  try{
    const results = await axiosRequest.post('/publications/createPublication', data);

    return results.data;
  }catch(err){
    return err;
  };
};

export const updatePublication = async (data) => {
  try{
    const results = await axiosRequest.post('/publications/updatePublication',data);

    return results.data;
  }catch(err){
    return err;
  };
};

export const deletePublication = async (data) => {
  try{
    const results = await axiosRequest.post('/publications/deletePublication',data)

    return results.data;
  }catch(err){
    return err;
  };
};