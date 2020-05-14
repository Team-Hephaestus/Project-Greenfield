import React from 'react';
import Ratings from './Ratings.jsx';
import ReviewsSection from '../containers/ReviewsSectionContainer.js';

const Ratings_Reviews = (props) => {
  console.log(ReviewsSection);
  return (
    <div>
      <Ratings />
      <ReviewsSection />
    </div>
  );
};

export default Ratings_Reviews;
