const classNames = require('classnames');

const templateHiddenClass = (state, iftrue) => {
  return classNames('overlay-hidden', {
    [iftrue] : state === 1
  })
};

const pieClassCheck = (ratingCategory) => {
  return classNames('piechart-container__piechart', {
    'piechart-container__piechart--exceptional-selected' : ratingCategory === 0,
    'piechart-container__piechart--recommended-selected' : ratingCategory === 1,
    'piechart-container__piechart--meh-selected' : ratingCategory === 2,
    'piechart-container__piechart--skip-selected' : ratingCategory === 3
  });
}

module.exports = { pieClassCheck, templateHiddenClass }