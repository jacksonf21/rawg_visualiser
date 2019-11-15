const classNames = require('classnames');

const templateClassName = (state, typical, iftrue) => {
  return classNames(typical, {
    [iftrue] : state === 1
  })
};

const checkGameRatingFields = (game) => {
  const ratings = game.ratings;
  const desiredRatings = [[5, 'exceptional'], [4, 'recommended'], [3, 'meh'], [1, 'skip']];
  const currentRatings = []; 

  currentRatings.push(ratings.some(rating => rating.title === 'exceptional'))
  currentRatings.push(ratings.some(rating => rating.title === 'recommended'))
  currentRatings.push(ratings.some(rating => rating.title === 'meh'))
  currentRatings.push(ratings.some(rating => rating.title === 'skip'))

  currentRatings.forEach((rating, idx) => {
    if (!rating) {
      const newRating = {
        id: desiredRatings[idx][0],
        title: desiredRatings[idx][1],
        count: 0,
        percent: 0
      }
      ratings.push(newRating)
    }
  })
  
  return ratings;
};

module.exports = { templateClassName, checkGameRatingFields }