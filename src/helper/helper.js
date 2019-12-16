const d3 = require('d3');

const checkGameRatingFields = (game) => {
  const gameRatings = game.ratings;
  const currentRatings = [];

  currentRatings.push(gameRatings.some(rating => rating.title === 'exceptional'))
  currentRatings.push(gameRatings.some(rating => rating.title === 'recommended'))
  currentRatings.push(gameRatings.some(rating => rating.title === 'meh'))
  currentRatings.push(gameRatings.some(rating => rating.title === 'skip'))
  
  return addMissingRatings(gameRatings, currentRatings);
};

const pieClassCheck = () => {
  return d3.select(".piechart-container__piechart")['_groups'][0] !== null
}

function addMissingRatings(ratings, currentRatings) {
  const desiredRatings = [[5, 'exceptional'], [4, 'recommended'], [3, 'meh'], [1, 'skip']];
  
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
  });

  return ratings;
};

module.exports = { checkGameRatingFields, pieClassCheck }