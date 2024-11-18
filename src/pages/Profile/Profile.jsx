import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { ProfileBody, ProfileBodyInformation, ProfileBodyNav, ProfileButton, ProfileButtonConfiguration, ProfileContainer, ProfileHeader, ProfileHeaderConfiguration, ProfileHeaderInformation, ProfileHeaderCreatedTransactions, ProfileHeaderReview, ProfileHeaderStars, ProfileHeaderTitle, ProfilePhotoContainer, ProfileHeaderInformationContainer } from "./styles";
import { useEffect, useState } from "react";
import { getUser } from "../../services/user";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { CreateReviewModal } from "../../components/Specific/Modals/CreateReview/CreateReviewModal";
import { createReview } from "../../services/reviews";
import Cookies from 'js-cookie'
import { getCountPublicationsAndOffersCompleted } from "../../services/publication";
import { Loading } from '../../components/Global/Loading/Loading';
import { AxiosError } from "axios";
import { showPopupAdvice } from "../../redux/slices/popup";

export const Profile = () => {
  const [userInformation, setUserInformation] = useState(null);
  const [showCreateReview, setShowCreateReview] = useState(false);
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [countPublications, setCountPublications] = useState(0);
  const [countOffersCompleted, setCountOffersCompleted] = useState(0);
  const [loadingReview, setLoadingReview] = useState(false);
  const { auth: { user } } = useSelector(state => state);
  const { id } = useParams();
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchGetUser = async () => {
   setLoading(true)
   const results = await getUser(id);
   
   setUserInformation(results.data);
   let count = 0;

   results.data.reviewReceiver.forEach((review) => {
    count += review.score;
   });

   let average = 0;
   if(results.data.reviewReceiver.length > 0){
    average = count / results.data.reviewReceiver.length;
    }

   setStars(average);

   setLoading(false);
  };

  const fetchGetCountPublicationsAndOffersCompleted = async () => {
    const results = await getCountPublicationsAndOffersCompleted(id);

    setCountPublications(results.data.countPublications);
    setCountOffersCompleted(results.data.countOffersCompleted);
  };

  const handleShowCreateReview = () => setShowCreateReview(!showCreateReview);

  const handleSubmitReview = async (data) => {
    setLoadingReview(true);
    const results = await createReview(id, data);
    
    if(results && !(results instanceof AxiosError)){
      handleShowCreateReview();
      dispatch(showPopupAdvice({ show: true, message: results.title, type: 'success' }));
    }else{
      dispatch(showPopupAdvice({ show: true, message: results.response.data.title, type: 'error' }));
    };
    setLoadingReview(false)
  };

  const handleNavigateLogIn = () => {
    navigate('/login')
  }

  useEffect(() => {
      fetchGetUser();
      fetchGetCountPublicationsAndOffersCompleted();
  }, [id]);

  if(loading) return <Loading/>;

  return (<>
    <CreateReviewModal isOpen={showCreateReview} handleModal={handleShowCreateReview} handleSubmit={handleSubmitReview} loading={loadingReview}/>
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePhotoContainer>
          <img src="../../../happyvector071190415714.webp"/>
        </ProfilePhotoContainer>
        <div style={{width: '100%'}}>
          <ProfileHeaderConfiguration>
            {!(userInformation?.id === user?.id && token) && <ProfileButton onClick={token ? '' : handleNavigateLogIn}>Agree friend</ProfileButton>}
            {!(userInformation?.id === user?.id && token) && <ProfileButton onClick={token ? handleShowCreateReview: handleNavigateLogIn}>Report user</ProfileButton>}
            {(userInformation?.id === user?.id && token) && <ProfileButtonConfiguration><Link to='configuration'><i class="bi bi-gear-wide"></i></Link></ProfileButtonConfiguration>}
          </ProfileHeaderConfiguration>
          <ProfileHeaderInformation>
            <ProfileHeaderTitle>{user?.id === userInformation?.id ? user.name : userInformation?.name} {user?.id === userInformation?.id ? user.lastName : userInformation.lastName}</ProfileHeaderTitle>
              <ProfileHeaderInformationContainer>
                <p>Transactions realized: {countOffersCompleted}</p>
                <p>Publications: {countPublications}</p>
              </ProfileHeaderInformationContainer>
              <p>Followers: 5</p>
              <ProfileHeaderInformationContainer>
                <ProfileHeaderReview>
                  <p>Reviews:</p>
                  <ProfileHeaderStars>
                    {stars === 0 ? 'No reviews' : Array.from({ length: stars }, () => <i class="bi bi-star-fill"></i>)} 
                  </ProfileHeaderStars>
                </ProfileHeaderReview>
                <p>Account created in: <span>{userInformation && format(new Date(userInformation?.createdAt), "dd-MM-yyyy")}</span></p>
              </ProfileHeaderInformationContainer>
          </ProfileHeaderInformation>
        </div>
      </ProfileHeader>
      <ProfileBody>
        <ProfileBodyNav>
          <NavLink to='publications'>Publications</NavLink>
          {userInformation?.id === user?.id && <NavLink to='likes'>Likes</NavLink>}
          <NavLink to='reviews'>Reviews</NavLink>
        </ProfileBodyNav>
        <ProfileBodyInformation>
          <Outlet/>
        </ProfileBodyInformation>
      </ProfileBody>
    </ProfileContainer>
  </>
  )
};