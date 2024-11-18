import { Link, useParams } from "react-router-dom";
import { Review, ReviewComment, ReviewHeader, ReviewHeaderLeft, ReviewsEmpty, ReviewsSubpageContainer, Stars } from "./styles";
import { getReview } from "../../../../services/reviews";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { AxiosError } from "axios";
import { LoadingSubpage } from "../../../Global/LoadingSubpage/LoadingSubpage";

export const ReviewsSubpage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const fetchGetReviews = async () => {
    setLoading(true)
    const results = await getReview(id);

    if(results && !(results instanceof AxiosError)){
      setReviews(results.data);
    };
    setLoading(false);
  };

  useEffect(() => {
    fetchGetReviews();  
  }, []);

  if(loading) return <LoadingSubpage/>

  return (<ReviewsSubpageContainer>
    {reviews.length > 0 ? <div>
      {reviews?.map((review) => 
        <Review>
          <ReviewHeader>
            <ReviewHeaderLeft>
              <Link to={`/profile/${review.transmitter.id}`}>{review.transmitter.name} {review.transmitter.lastName}</Link>
              |
              <Stars>
                {Array.from({length: review.score}, () => <i class="bi bi-star-fill"></i>)}
              </Stars>
            </ReviewHeaderLeft>
            <p style={{color: 'gray'}}>Created: {format(new Date(review.createdAt), "dd-MM-yyyy")}</p>
          </ReviewHeader>
          <ReviewComment>Comment: {review.review}</ReviewComment>
        </Review>
      )}
    </div> : <ReviewsEmpty>
      <p>No results</p>
    </ReviewsEmpty>}
  </ReviewsSubpageContainer>)
};