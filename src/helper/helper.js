const d3 = require('d3');

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

const pieClassCheck = () => {
  return d3.select(".piechart-container__piechart")['_groups'][0] !== null
}

module.exports = { checkGameRatingFields, pieClassCheck }